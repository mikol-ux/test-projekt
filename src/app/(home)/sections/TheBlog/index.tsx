"use client";
import GradientBtn from "@/components/Buttons/GradientBtn";
import { ProfileCard } from '../../../../components/BlogCard'



import React from 'react';

const DancingMachines = () => {
  const blogs = [
    {
      number: "01",
      tag: "ARTIFICIAL INTELLIGENCE",
      title: "When Machines Become Gods:",
      subtitle: "How AI Is Reshaping Faith and Forging a New Era of Technocratic Religion",
      image: "/img/home/blog1.jpeg"
    },
    {
      number: "02",
      tag: "ARTIFICIAL INTELLIGENCE",
      title: "Ranking the Machines",
      subtitle: "A Threat Assessment of AI Systems and Their Role in Society",
      image: "/img/home/blog2.png"
    },
    {
      number: "03",
      tag: "CYBERSECURITY",
      title: "The Rise of Agnostic AI:",
      subtitle: "How Businesses Must Prepare for Next-Gen Cyber Threats and Social Engineering Attacks",
      image: "/img/home/blog3.jpeg"
    }
  ];

  return (


    <section className="tpk-container flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					{/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4"> </h2> */}
					<h2 className="tpk-text-2xl font-normal text-center uppercase mb-4">
						Dancing with machines
					</h2>
					<p className="text-muted text-sm sm:text-base lg:text-lg">
					Explore the collaboration between humans, technology & Cybersecurity.
					</p>
				</div>
				<div className="w-full">
				<div className="w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto justify-items-center">
					{blogs.map((profile, index) => (
						<div key={index} className="w-full flex justify-center">
						{/* <div className="w-full max-w-[373px] md:max-w-[426px] lg:max-w-[320px]"> */}
						<div className="w-full ">
							<ProfileCard {...profile} />
						</div>
						</div>
					))}
					</div>
					
			<div className="block w-full mt-32 text-center">
			
				<GradientBtn href="#" className="tpk-text-md">What’s on the edge of tomorrow?</GradientBtn>
			</div>
				</div>
				</div>
			</section>

	
  );
};

export default DancingMachines;