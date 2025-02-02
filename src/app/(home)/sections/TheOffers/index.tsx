'use client';

import React from 'react';
import Image from 'next/image';
import dashboardIcon from '../../../../../public/OfferIcon/dashboard.png';
import marketReadyIcon from '../../../../../public/OfferIcon/load.png';
import connectIcon from '../../../../../public/OfferIcon/option.png';
import secureIcon from '../../../../../public/OfferIcon/mark.png';
import qualityIcon from '../../../../../public/OfferIcon/bars.png';
import synchronousIcon from '../../../../../public/OfferIcon/txt.png';
import Link from 'next/link';

const benefits = [
  { icon: dashboardIcon, title: 'DASHBOARD', description: 'Ensure your goals are achieved efficiently, with maximum impact and minimal risk.' },
  { icon: marketReadyIcon, title: 'MARKET READY', description: 'Market-ready identity that attracts your audience.' },
  { icon: connectIcon, title: 'CONNECT', description: 'Learn from and connect with other founders and share your experiences.' },
  { icon: secureIcon, title: 'SECURE', description: 'We comply with security protocols (CIA) throughout the cycle of development.' },
  { icon: qualityIcon, title: 'TOP NOTCH QUALITY', description: 'Get high-quality premium results with web, software, media for your business.' },
  { icon: synchronousIcon, title: 'SYNCHRONOUS', description: 'We love meetings as essential moments to connect and brainstorm as a team.' },
];

const BenefitsSection = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center gap-6 2xl:gap-14 tpk-contained">
      <div className="text-center">
        <h2 className=" text-base md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-normal leading-tight text-black dark:text-white">
          BUILDING DREAMS, <br /> NAVIGATING THE UNKNOWN
        </h2>
        <p className="mt-4 text-sm md:text-base xl:text-xl 2xl:text-4xl font-light text-muted-4 dark:text-muted-5">
          We exist to help founders launch & test demand for their idea(s) without investing large amounts of money with designers, devs, or manufacturers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-start space-x-4">
            <div className='p-4 flex justify-between items-center gap-4 text-xl 2xl:text-4xl font-light'>
            <Image src={benefit.icon} alt={benefit.title} width={28} height={28} />
            <h3 className="text-[--sky-blue] dark:text-[--sky-blue]">{benefit.title}</h3>
            </div>
            <div  className='p-1'>
              <p className="text-black dark:text-white text-base font-light 2xl:text-3xl">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" rounded bg-gradient-to-r from-[#BEE8FF] via-[#438DB5] to-[#202A30] border-none p-[1px] mt-14">
      <Link href="#" className="rounded transition-all tpk-btn-fade px-6  xl:py-[18px] 2xl:p-10">
	  <span className="text-black dark:text-white  text-sm 2xl:text-2xl font-medium">
    I WANT TO BEGIN MY PROJEKT
		</span>
      </Link>
	  </div>
    </section>
  );
};

export default BenefitsSection;
