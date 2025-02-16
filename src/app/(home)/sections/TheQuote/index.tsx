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
	// background: linear-gradient(124.81deg, #000000 4.31%, #2C353B 40.96%, #BEE8FF 73.3%);
	// background: linear-gradient(90deg, #000000 -7.61%, rgba(0, 0, 0, 0.23588) 21.61%, rgba(0, 0, 0, 0) 56.38%);
	return (
		<div ref={textRef}
			className="tpk-contained flex justify-center items-center h-[50vh] mb-28">
			
			<div className="py-5 text-center md:w-5/6">
				<h2 className="text-black dark:text-white uppercase tpk-text-2xl">
					Developing Businesses with Premium Innovative web development and Cybersecurity.
				</h2>
			</div>
		</div>
	)
}

export default TheQuote;