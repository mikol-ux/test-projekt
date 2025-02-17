"use client";

import TransitionContext from "@/context/Transition.context";
import React, { ReactNode, useContext } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface GoToProps extends LinkProps {
	href: string,
	className: string,
	children: ReactNode
}

const GoTo = ({ href, className, children, ...props }: GoToProps) => {
	const router = useRouter();
	const { isAnimating } = useContext(TransitionContext);

	const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
		e.preventDefault(); // Prevent instant navigation
		console.log("dont", isAnimating);
		if (!isAnimating) router.push(url); // Wait for animation before navigating
	};

	return (
		<Link onClick={(e) => handleNavigation(e, href)} href={href} className={className} {...props}>{children}</Link>
	)
}

export default GoTo;