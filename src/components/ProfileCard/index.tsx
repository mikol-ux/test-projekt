'use client';
import React from 'react';

interface ProfileCardData {
    name: string;
    title: string;
    description: string;
    imagePath: string;
    linkedin?: string;
    twitter?: string;
}
export const ProfileCard: React.FC<ProfileCardData> = ({ name, title, description, imagePath, linkedin, twitter }) => {
    return (
        <div className="group w-full md:max-w-[310px] border hover:cursor-pointer hover:scale-105 transition-all border-gray-900 rounded-lg shadow-lg p-2 md:p-4">
            <div className="relative overflow-hidden rounded-lg">
                {/* Transparent div */}
                <div className="group-hover:right-0 top-0 right-3/4 absolute rounded-lg shadow-md transition-all duration-500 ease-in-out delay-100 h-full w-full backdrop-blur-md hidden lg:block bg-white/30"></div>
                {/* Profile Image */}
                <img
                    src={imagePath}
                    alt="Profile"
                    className="rounded-lg object-cover h-48 md:h-96 w-full" />
            </div>

            {/* Card Content */}
            <div className="mt-2 md:mt-4">
                <h3 className="text-xs md:text-sm font-light text-sky-200">
                    {name}
                </h3>
                <p className="text-xs md:text-sm font-light transition-opacity duration-500">
                    {title}
                </p>
                <p className="mt-1 md:mt-2 text-neutral-400 text-[10px] md:text-xs transition-transform duration-500">
                    {description}
                </p>
                <div className="flex mt-2 md:mt-4 space-x-2 md:space-x-4">
                    <a href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white bg-white-300 h-4 w-4 md:h-5 md:w-5 rounded-[2px] flex justify-center items-center">
                        <span className="[&>svg]:h-3 md:[&>svg]:h-4 [&>svg]:w-3 md:[&>svg]:w-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                viewBox="0 0 448 512">
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </span>
                    </a>

                    <a href={twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-transform duration-500 group-hover:scale-110">
                        <span className="[&>svg]:h-4 [&>svg]:w-4 md:[&>svg]:h-5 md:[&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 512 512">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}