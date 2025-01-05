"use client";
import { useGSAP } from "@gsap/react";
import { FC, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface ButtonProps {
	href: string;
	className: string;
	children: React.ReactNode;
}

const GradientBtn: FC<ButtonProps> = ({ href, className, children }) => {
	const btnRef = useRef<HTMLAnchorElement>(null);
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		gsap.fromTo(btnRef.current, {
			background: "linear-gradient(0deg, #bee8ff 0%, #438db5 30%, #202a30 100%)"
		}, {
			background: "linear-gradient(180deg, #bee8ff 0%, #438db5 30%, #202a30 100%)",
			duration: 6,
			ease: "none",
			repeat: -1,
			yoyo: false
		});
		console.info("Btn animationg...");
	});

	return (
		<Link ref={btnRef} href={href} className={`flex justify-center items-center w-max p-[1px] rounded-md uppercase ${className}`}>
			<span className="w-full h-full bg-white dark:bg-black rounded-md px-[1em] py-4">{children}</span>
		</Link>
	)
}

export default GradientBtn;