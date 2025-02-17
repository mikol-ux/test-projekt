"use client";

import gsap from "gsap";
import { useContext, useRef } from "react";
import { usePathname } from "next/navigation";
import TransitionContext from "@/context/Transition.context";
import { SwitchTransition, Transition } from "react-transition-group";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname(); // Next.js App Router replacement for `useRouter().pathname`
	const { setAnimating } = useContext(TransitionContext);
	const nodeRef = useRef<HTMLDivElement | null>(null); // Explicit nodeRef to avoid findDOMNode()

	return (
		<SwitchTransition mode="out-in">
			<Transition
				key={pathname} // Triggers transition when route changes
				timeout={600}
				nodeRef={nodeRef} // Explicitly set nodeRef
				onEnter={() => {
					if (!nodeRef.current) return; // Type safety check

					console.log("set animatoin");
					setAnimating(true); // Mark transition as active

					gsap.fromTo(
						nodeRef.current,
						{ autoAlpha: 0, y: 50, scale: 0.95 }, // Start animation state
						{
							autoAlpha: 1,
							y: 0,
							scale: 1,
							duration: 0.6,
							ease: "power2.out",
							onComplete: () => setAnimating(false), // Mark transition as completed
						}
					);
				}}
				onExit={() => {
					if (!nodeRef.current) return; // Type safety check

					gsap.to(nodeRef.current, {
						autoAlpha: 0,
						y: -50,
						scale: 0.95,
						duration: 0.5,
						ease: "power2.in",
					});
				}}>
				<div ref={nodeRef} className="w-full">{children}</div>
			</Transition>
		</SwitchTransition>
	);
};

export default PageTransition;
