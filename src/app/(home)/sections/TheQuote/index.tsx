//
"use client";

import { FC, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TheQuote: FC = () => {
	const textRef = useRef(null);

	useGSAP(() => {
		if (!textRef.current) return;
		console.log("Text Animating...");

		const ti = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: "top bottom", // Animation starts when scrolled 200px down
				end: "bottom bottom", // Ends when image moves 300px below center
				scrub: true, // Smoothly syncs animation with scroll
			},
			defaults: {
				y: 0,
				x: 0,
				scale: 0.3
			}
		});

		ti.to(textRef.current, {
			scale: 1, // Reduce size to 60%
			marginTop: "40%", // Move downward by 80% of its height
			ease: "none"
		});
	}, []);

	return (
		<section ref={textRef}
			className="tpk-contained flex justify-center items-center h-[50vh]">
			<div className="py-5 text-center md:w-3/6">
				<h2 className="text-black dark:text-white uppercase text-2xl md:text-3xl 2xl:text-5xl">
					Developing Businesses with Premium Innovative web development and Cybersecurity.
				</h2>
			</div>
		</section>
	)
}

export default TheQuote;