"use client";

import gsap from "gsap";
import { useContext, useRef } from "react";
import { usePathname } from "next/navigation";
import TransitionContext from "@/context/Transition.context";
import { SwitchTransition, Transition } from "react-transition-group";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname(); // Next.js App Router replacement for `useRouter().pathname`
	const { setAnimating } = useContext(TransitionContext);
	const nodeRef = useRef<HTMLDivElement | null>(null);

	return (
		<SwitchTransition mode="out-in">
			<Transition
				key={pathname}
				timeout={600}
				nodeRef={nodeRef}
				onEnter={() => {
					if (!nodeRef.current) return;
					setAnimating(true);

					gsap.fromTo(
						nodeRef.current,
						{ autoAlpha: 0, y: 50, scale: 0.95 },
						{
							autoAlpha: 1,
							y: 0,
							scale: 1,
							duration: 0.6,
							ease: "power2.out",
							onComplete: () => setAnimating(false),
						}
					);
				}}
			>
				<div ref={nodeRef} id="tpk-page-wrapper" className="w-full">{children}</div>
			</Transition>
		</SwitchTransition>
	);
};

export default PageTransition;