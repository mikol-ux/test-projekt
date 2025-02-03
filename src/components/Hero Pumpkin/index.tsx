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

		let mm = gsap.matchMedia();

		mm.add(
			{
				sm: "(max-width: 639px)", // Tailwind 'sm'
				md: "(min-width: 640px) and (max-width: 767px)", // Tailwind 'md'
				lg: "(min-width: 768px) and (max-width: 1023px)", // Tailwind 'lg'
				xl: "(min-width: 1024px) and (max-width: 1279px)", // Tailwind 'xl'
				xxl: "(min-width: 1280px)", // Tailwind '2xl'
			},
			(context) => {
				let { sm, md, lg, xl, xxl } = context.conditions!;

				console.log("size", context.conditions);

				const ti = gsap.timeline({
					scrollTrigger: {
						trigger: imageRef.current,
						start: "top+=200 top", // Start after scrolling 200px
						end: "bottom+=300 center", // Ends when the image moves further down
						scrub: true, // Smoothly syncs animation with scroll
					}
				});

				ti.to(imageRef.current, {
					scale: sm ? 0.8 : md ? 0.7 : lg ? 0.6 : xl ? 0.5 : 0.4, // Shrinks more on bigger screens
					y: sm ? "60em" : md ? "60%" : lg ? "60em" : xl ? "80%" : "90%", // Moves further down on bigger screens
					x: sm ? "-20%" : md ? "-30%" : lg ? "-40%" : xl ? "-50%" : "-60%", // Adjusts left position per screen
					rotate: sm ? 50 : md ? 20 : lg ? 70 : xl ? 40 : 50, // Rotates more on larger screens
					ease: "none",
				});
			}
		);
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