'use client';
import React from 'react';
import GradientBtn from '../Buttons/GradientBtn';

interface BlogCardData {
	number: string;
	tag: string;
	title: string;
	subtitle: string;
	image?: string;
}

const BlogCard: React.FC<BlogCardData> = ({ number, title, tag, image, subtitle }) => {
	return (
		<div className="group md:max-w-[25em] min-w-[25em] border hover:cursor-pointer hover:scale-105 transition-all flex flex-col border-gray-900 rounded-lg h-full shadow-lg p-2 md:p-4">


			{/* Card Content */}
			<div className="mt-2 md:mt-4 mb-auto">
				<h3 className="tpk-text-sm font-normal text-sky-blue">
					{title}
				</h3>
				<p className="tpk-text-sm font-light text-white transition-transform duration-500 mt-0 mb-7">
					{subtitle}
				</p>

				{/* <GradientBtn href="#x" className="inline-flex tpk-text-sm text-sm !rounded-full !p-3" isAnimated={true}>{tag}</GradientBtn> */}
				<div className="bg-linear-to-l from-pitch-dark-blue from-[-4.81%] via-deep-blue via-[27%] to-sky-blue to-100% rounded-full p-[1px] w-max">
					<span className="block bg-black font-medium text-[12px] text-white rounded-full w-full h-full px-3 py-1">
						{tag}
					</span>
				</div>
			</div>


			<div className="relative overflow-hidden rounded-lg mt-4">
				{/* Transparent div */}
				<div className="group-hover:right-0 top-0 right-2/4 absolute rounded-lg shadow-md transition-all duration-500 ease-in-out delay-100 h-full w-full backdrop-blur-lg bg-black/12"></div>
				{/* Profile Image */}
				<img
					src={image}
					alt="Profile"
					className="rounded-lg object-cover h-[28rem] w-full" />
				<h6 className="py-3 w-full text-white-800 dark:text-white text-7xl lg:text-9xl z-[5] absolute bottom-0 left-2 ">{number}</h6>
				<h6 className="py-3 w-full text-white-800 dark:text-white z-[5] absolute text-xl top-0 left-2 uppercase font-light ">blog</h6>
			</div>
		</div>
	);
}

export default BlogCard;