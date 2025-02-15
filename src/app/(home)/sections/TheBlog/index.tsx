import BlogCard from "@/components/BlogCard";
import GradientBtn from "@/components/Buttons/GradientBtn";

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
		<section className="flex flex-col items-center py-12">
			<div className="tpk-contained text-center mb-16 md:mb-24">
				<h2 className="tpk-text-2xl font-normal text-center uppercase mb-4">
					Dancing with machines
				</h2>
				<p className="tpk-text-md text-muted">
					Explore the collaboration between humans, technology & Cybersecurity.
				</p>
			</div>

			<div className="flex gap-4 w-full xl:justify-center overflow-x-auto ps-4 xl:ps-0">
				{blogs.map((profile, index) => <BlogCard key={index} {...profile} />)}
			</div>

			<div className="tpk-contained w-full mt-32 text-center">
				<GradientBtn href="#" className="block md:inline tpk-text-md">What’s on the edge of tomorrow?</GradientBtn>
			</div>
		</section>
	);
};

export default DancingMachines;