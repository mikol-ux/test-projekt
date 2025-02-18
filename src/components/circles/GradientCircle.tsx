"use client";

import { useGSAP } from "@gsap/react";
import { FC, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface GradientCircleProps {
	href: string;
	className?: string;
	children: React.ReactNode;
	isAnimated?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GradientCircle: FC<GradientCircleProps> = ({ href, className, children, isAnimated }) => {
	// const circleRef = useRef<HTMLDivElement>(null);

	const btnRef = useRef<HTMLAnchorElement>(null);
	const btnStyle = "relative text-center py-4 px-6 text-white bg-black dark:bg-transparent border-none uppercase rounded-full z-[1]";
	const btnAfterStyle = "after:content-[''] after:absolute after:top-1 after:left-1 after:right-1 after:bottom-1 after:bg-transparent after:rounded-full after:z-[2]"
	const btnBeforeStyle = `before:content-[''] before:absolute before:inset-0 before:p-[2.53px] before:rounded-full before:bg-bg-gradient-dir
		before:from-pitch-dark-blue before:from-10% before:via-deep-blue before:via-30% before:to-sky-blue
		before:to-90% before:-z-[1] before:mask-content-box`;

	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		if (isAnimated) {
			gsap.fromTo(btnRef.current, {
				"--tw-gradient-direction": "0deg"
			}, {
				"--tw-gradient-direction": "360deg",
				duration: 6,
				ease: "none",
				repeat: -1,
				yoyo: false
			});
			console.info("Btn animationg...");
		}
	});

	return (
		<Link href={href} ref={btnRef} className={`${btnStyle} ${btnBeforeStyle} ${btnAfterStyle} ${className}`}>
			{children}
		</Link>
	)

	// return (
	// 	<div
	// 		ref={circleRef}
	// 		className={`relative w-32 h-32 md:w-72 md:h-72 rounded-full border-2 border-blue-300 shadow-[0px_10px_20px_rgba(173,216,230,0.2)] flex justify-center items-center text-center mask-gradient transition-shadow duration-300 ease-in-out hover:shadow-[0px_15px_25px_rgba(72,187,255,0.6)] ${className}`}
	// 		style={{
	// 			boxShadow: "-3px 4px 5px rgba(190, 232, 255, 0.3)",
	// 			// border: "2px linear-gradient(to top, rgba(114, 187, 230, 0.2),rgba(72, 187, 255, 1))",
	// 			borderRadius: "50%",
	// 			transition: "box-shadow 0.3s ease-in-out",
	// 			paddingLeft: "1rem",
	// 			paddingRight: "1rem",
	// 		}}
	// 		onMouseEnter={() => {
	// 			if (circleRef.current) {
	// 				circleRef.current.style.boxShadow = "0 0 10px 5px rgba(72, 187, 255, 0.6)";
	// 			}
	// 		}}
	// 		onMouseLeave={() => {
	// 			if (circleRef.current) {
	// 				circleRef.current.style.boxShadow = "-3px 4px 5px rgba(190, 232, 255, 0.3)";
	// 			}
	// 		}}
	// 	>
	// 		<span className="relative text-deep-blue text-sm"></span>
	// 	</div>
	// );
};

export default GradientCircle;