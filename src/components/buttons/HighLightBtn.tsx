import Link from "next/link";
import React, { FC } from "react";

interface ButtonProps {
	href: string;
	className?: string;
	children: React.ReactNode;
}

const HighLightBtn: FC<ButtonProps> = ({ children, className, href }) => {
	return (
		<Link href={href}
			className={`px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-8 lg:py-3 xl:px-8 xl:py-3 2xl:px-14 2xl:py-6 border border-sky-blue rounded-md bg-[#BEE8FF1A] text-white ${className}`}>
			{children}
		</Link>
	)
}

export default HighLightBtn;