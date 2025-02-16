"use client";

import gsap from "gsap";
import { RefObject, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function LoadPage({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const router = useRouter();
	const trans = useRef<HTMLDivElement | null>(null);
	const isNavigating = useRef(false); // Prevents multiple navigation events

	// Handles route change with fade-out BEFORE navigation
	const handleRouteChange = pageExitAnimation(pathname, isNavigating, trans, router);

	// Runs fade-in animation after navigation is complete
	const handleComplete = () => {
		isNavigating.current = false; // Unlock navigation
		const rand = Math.floor(Math.random() * 3) + 1;

		switch (rand) {
			case 1:
				gsap.fromTo(
					trans.current,
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
				);
				break;

			case 2:
				gsap.fromTo(
					trans.current,
					{ opacity: 0, scale: 0.95 },
					{ opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
				);
				break;

			case 3:
				gsap.fromTo(
					trans.current,
					{ x: "-100%", opacity: 0 },
					{ x: "0%", opacity: 1, duration: 0.6, ease: "power2.out" }
				);
				break;
		}
	};

	useEffect(() => {
		handleComplete(); // Runs enter animation when page loads
	}, [pathname]); // Runs every time the pathname changes

	return (
		<div ref={trans} className="relative">
			{children}
		</div>
	);
}


// Export handleRouteChange to be used in components
export { pageExitAnimation };

function pageExitAnimation(pathname: string, isNavigating: RefObject<boolean>, trans: RefObject<HTMLElement | null>, router: AppRouterInstance) {
	return async (url: string) => {
		if (url === pathname || isNavigating.current) return; // Prevent duplicate navigation
		isNavigating.current = true; // Lock navigation during animation

		// Fade-out current page before navigating
		await new Promise<void>((resolve) => {
			gsap.to(trans.current, {
				opacity: 0,
				y: -20,
				duration: 0.4,
				ease: "power2.in",
				onComplete: resolve, // Wait until animation finishes
			});
		});

		router.push(url);
	};
}
