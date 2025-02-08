'use client';

import React from 'react';
import Image from 'next/image';
import cafe from '../../../../../public/img/home/Casual Office or Café Gathering 1.png'
import hoodie from '../../../../../public/img/home/Person in Red Hoodie Coding copy 1.png'
import Link from 'next/link';
import GradientBtn from '@/components/Buttons/GradientBtn';
const ForgeSection = () => {
	return (
	<section className='min-h-screen'>
	  <div className="relative w-full min-h-screen bg-black flex items-center justify-center px-6 py">
		{/* Background Image */}
		<div className="absolute inset-0">
		  <Image 
			src={cafe} 
			alt="The Forge Background" 
			layout="fill" 
			objectFit="cover" 
			className="opacity-80 w-full"
		  />
		</div>
		
		{/* Content */}
		<div className='tpk-contained flex flex-col justify-center items-center'>
			<div className='flex flex-col lg:flex-row justify-between items-center w-full relative'>
			<h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-[100px] 2xl:text-[170px] font-normal text-white">THE FORGE</h1>
			<h1 className='uppercase text-base 2xl:text-2xl text-black dark:text-white'>community Channel</h1>
			</div>
			<div className='flex flex-col  lg:flex-row justify-between items-center'>
		<div className="2xl:basis-1/2 relative tpk-contained">
		  <p className="text-left text-3xl sm:text-4xl lg:text-[26px] 2xl:text-6xl mb-8 md:mb-0">
			JOIN THE PRIVATE NETWORK FOR DREAMERS TURNED HIGH-PERFORMING UPCOMING FOUNDERS.
		  </p>
		  
		  <GradientBtn href="/" className="mt-12 inline-flex" isAnimated={true}>
      JOIN THE PROJEKT
    </GradientBtn>

		</div>
		
		{/* Community Channel Section */}
		<div className="2xl:basis-1/2 p-4 backdrop-blur-[60px] rounded-lg flex w-full flex-col md:flex-row">
		  <p className="mb-4 md:mb-0 2xl:text-2xl font-light mt-2 basis-1/2 dark:text-white text-black ">
		  A private network for dreamers who become high-performing founders. Applicants face a tough interview process, leading to an acceptance rate under 10%. This guarantees that only committed individuals join The Forge, enhancing connections and experiences.
		  </p>
		
		  <div className="mt-4 basis-1/2">
			<Image 
			  src={hoodie} 
			  alt="Community Channel" 
			//   width={288} 
			//   height={221} 
			  className="rounded-lg w-full"
			  objectFit='cover'
			/>
		  </div>
		</div>
		</div>
		</div>
		</div>
		</section>
	);
  };
  
  export default ForgeSection;
  
