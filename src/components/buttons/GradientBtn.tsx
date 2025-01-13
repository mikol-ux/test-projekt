"use client";
import { useGSAP } from "@gsap/react";
import { FC, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface ButtonProps {
	href: string;
	className?: string;
	children: React.ReactNode;
	isAnimated?: boolean;
}

const GradientBtn: FC<ButtonProps> = ({ href, className, children, isAnimated }) => {
	const btnRef = useRef<HTMLAnchorElement>(null);
	const btnStyle = "relative text-center py-4 px-6 text-white bg-black dark:bg-transparent border-none uppercase rounded-md z-[1]";
	const btnAfterStyle = "after:content-[''] after:absolute after:top-1 after:left-1 after:right-1 after:bottom-1 after:bg-transparent after:rounded-sm after:z-[2]"
	const btnBeforeStyle = `before:content-[''] before:absolute before:inset-0 before:p-[1px] before:rounded-md before:bg-bg-gradient-dir
		before:from-pitch-dark-blue before:from-10% before:via-deep-blue before:via-30% before:to-sky-blue
		before:to-90% before:-z-[1] before:mask-content-box before:mask-composite-exclude`;

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
}

export default GradientBtn;