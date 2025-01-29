"use client";

import { FC, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroPumpkin: FC = () => {
	const imageRef = useRef(null);

	useGSAP(() => {
		if (!imageRef.current) return;
		console.log("Image Animating...");

		const ti = gsap.timeline({
			scrollTrigger: {
				trigger: imageRef.current,
				start: "center center", // Animation starts when scrolled 200px down
				end: "bottom+=900 bottom", // Ends when image moves 300px below center
				scrub: true, // Smoothly syncs animation with scroll
			},
			defaults: {
				y: 0,
				x: 0,
				scale: 1,
				rotate: 0
			}
		});

		ti.to(imageRef.current, {
			scale: 0.3, // Reduce size to 60%
			y: "80%", // Move downward by 80% of its height
			x: "-50%", // Move slightly left (adjust as needed)
			rotateX: 45,
			ease: "none",
		});
	}, []);

	return (
		<Image
			ref={imageRef}
			src="/img/home/decoration-pumpkin-1.png"
			className="w-full xl:w-5/6 object-cover absolute top-0 -right-1/3 scale-110 -z-[1]"
			width="1237"
			height="910"
			alt="Hero Background"
		/>
	);
};

export default HeroPumpkin;