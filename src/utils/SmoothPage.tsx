"use client";

import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import type { LenisRef } from "lenis/react";

function SmooothPage({ children }: { children: React.ReactNode }) {
	// Correctly type the ref for ReactLenis
	const lenisRef = useRef<LenisRef | null>(null);

	useEffect(() => {
		function update(time: number) {
			lenisRef.current?.lenis?.raf(time * 1000);
		}

		gsap.ticker.add(update);

		return () => {
			gsap.ticker.remove(update);
		};
	}, []);

	return (
		<ReactLenis options={{ autoRaf: false }} ref={lenisRef}>
			{children}
		</ReactLenis>
	);
}

export default SmooothPage;