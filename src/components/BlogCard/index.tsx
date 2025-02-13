'use client';
import React from 'react';
import GradientBtn from '../Buttons/GradientBtn';

interface ProfileCardData {
    number: string;
    tag: string;
    title: string;
    subtitle: string;
    image?: string;
}
export const ProfileCard: React.FC<ProfileCardData> = ({ number, title, tag, image, subtitle }) => {
    return (
        <div className="group w-full md:max-w-[413px] border hover:cursor-pointer hover:scale-105 transition-all flex flex-col border-gray-900 rounded-lg h-full shadow-lg p-2 md:p-4">
            
			
            {/* Card Content */}
            <div className="mt-2 md:mt-4 mb-auto">
                <h3 className="text-xs md:text-sm font-normal text-sky-200">
                    {title}
                </h3>
                <p className="mt-0 mb-7 font-medium text-neutral-400 text-[10px] md:text-xs transition-transform duration-500">
                    {subtitle}
                </p>

				{/* <GradientBtn href="#x" className="inline-flex tpk-text-sm text-sm !rounded-full !p-3" isAnimated={true}>{tag}</GradientBtn> */}
                <span className="inline-block px-4 py-1 w-fit font-semibold text-[12px] border  text-white rounded-full ">
					{tag}
				</span>
            </div>
			
			
			<div className="relative overflow-hidden rounded-lg mt-4">
                {/* Transparent div */}
                <div className="group-hover:right-0 top-0 right-2/4 absolute rounded-lg shadow-md transition-all duration-500 ease-in-out delay-100 h-full w-full backdrop-blur-lg hidden lg:block bg-black/12"></div>
                {/* Profile Image */}
                <img
                    src={image}
                    alt="Profile"
                    className="rounded-lg object-cover h-56 md:h-[28rem] w-full" />
				<h6 className="py-3 w-full text-white-800 dark:text-white text-7xl lg:text-9xl z-[5] absolute bottom-0 left-2 ">{number}</h6>
				<h6 className="py-3 w-full text-white-800 dark:text-white z-[5] absolute text-xl top-0 left-2 uppercase font-light ">blog</h6>
            </div>

        </div>
    );
}