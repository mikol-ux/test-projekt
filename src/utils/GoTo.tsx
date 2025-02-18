"use client";

import gsap from "gsap";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import TransitionContext from "@/context/Transition.context";
import React, { ReactNode, useContext } from "react";

interface GoToProps extends LinkProps {
	href: string;
	className: string;
	children: ReactNode;
}

const GoTo = ({ href, className, children, ...props }: GoToProps) => {
	const router = useRouter();
	const { isAnimating, setAnimating } = useContext(TransitionContext);

	const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
		e.preventDefault(); // Prevent instant navigation

		if (isAnimating) return; // Prevent multiple clicks during animation
		setAnimating(true); // Mark transition as active

		const target = document.getElementById("tpk-page-wrapper") || document.body;
		console.log("start exit animation", isAnimating);
		// Exit animation before navigating
		gsap.to(target, {
			opacity: 0,
			y: -50,
			scale: 0.95,
			duration: .5,
			ease: "power2.in",
			onComplete: () => {
				console.log("go to url", url);
				setAnimating(false); // Mark animation as completed
				router.push(url); // Navigate after animation completes
				// Reset page visibility after navigating
				gsap.set(target, { opacity: 1, y: 0, scale: 1 });
			},
		});
	};

	return (
		<Link
			onClick={(e) => handleNavigation(e, href)}
			href={href}
			className={className}
			{...props}
		>
			{children}
		</Link>
	);
};

export default GoTo;
