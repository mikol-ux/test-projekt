//
"use client";
// import Link from "next/link";
// import { FC, Fragment, useState } from "react";

// const TheBlog: FC = () => {
// 	const [openIndex, setOpenIndex] = useState<number | null>(null);
// 	const accordions = [
// 		{ title: "AI can take your job? LOL!", category: "Tech", img: "https://picsum.photos/200/300/?blur=1", createdAt: "2024", content: "Artificial Intelligence (AI) has been a topic of great interest and debate for many years. With advancements in technology, AI has become more sophisticated and capable of performing tasks that were once thought to be exclusive to humans. However, the question remains: can AI take your job? While AI can automate certain tasks and improve efficiency, it is unlikely to completely replace human jobs. Instead, AI is more likely to augment human capabilities and create new opportunities for growth and innovation." },
// 		{ title: "You can predit who wins the next cup", category: "Sports", img: "https://picsum.photos/200/300/?blur=4", createdAt: "2024", content: "Predicting the winner of the next major sports event has always been a topic of great interest among fans and analysts alike. With the advent of advanced data analytics and machine learning algorithms, it is now possible to analyze vast amounts of data to make more accurate predictions. Factors such as team performance, player statistics, historical data, and even weather conditions can be taken into account to forecast the outcome of a game. While no prediction can be 100% accurate, these technologies have significantly improved the chances of making correct predictions, adding a new dimension to the excitement of sports." },
// 		{ title: "Is real estate a good business to go into?", category: "Real Estate", img: "https://picsum.photos/200/300/?blur=3", createdAt: "2024", content: "Real estate has long been considered a solid investment and a lucrative business opportunity. The real estate market offers various avenues for profit, including residential, commercial, and industrial properties. Investing in real estate can provide a steady income stream through rental properties and the potential for significant appreciation over time. However, it is essential to conduct thorough research and understand market trends, property values, and economic factors that can impact the real estate market. While real estate can be a profitable venture, it also requires careful planning, management, and a willingness to take on risks." },
// 		{ title: "The future of work: remote or in-office?", category: "Business", img: "https://picsum.photos/200/300/?blur=1", createdAt: "2024", content: "The COVID-19 pandemic has accelerated the shift towards remote work, with many companies adopting work-from-home policies to ensure employee safety and business continuity. While remote work offers flexibility and cost savings, it also presents challenges such as communication barriers, work-life balance issues, and cybersecurity risks. On the other hand, in-office work provides a collaborative environment, social interaction, and a structured routine. The future of work is likely to be a hybrid model that combines the best of both worlds, allowing employees to work remotely or in the office based on their preferences and job requirements." },
// 		{ title: "The rise of e-commerce: what's next?", category: "E-commerce", img: "https://picsum.photos/200/300/?blur=2", createdAt: "2024", content: "E-commerce has experienced tremendous growth in recent years, driven by changing consumer preferences, technological advancements, and the COVID-19 pandemic. Online shopping offers convenience, variety, and competitive prices, making it an attractive option for consumers worldwide. The rise of e-commerce has also created new opportunities for businesses to reach a global audience, expand their market share, and improve customer engagement. As e-commerce continues to evolve, we can expect to see innovations in areas such as augmented reality, voice commerce, and sustainable practices that will shape the future of online retail." },
// 		{ title: "The power of social media: connecting people worldwide", category: "Social Media", img: "https://picsum.photos/200/300/?blur=3", createdAt: "2024", content: "Social media has revolutionized the way we communicate, share information, and connect with others around the world. Platforms such as Facebook, Twitter, Instagram, and LinkedIn have become essential tools for personal and professional networking, marketing, and entertainment. Social media enables users to stay informed, express their opinions, and engage with diverse communities in real-time. While social media offers many benefits, it also raises concerns about privacy, misinformation, and online harassment. As social media continues to evolve, it is essential to use these platforms responsibly and ethically to foster positive interactions and build meaningful relationships." }
// 	];

// 	const toggleAccordion = (index: number) => {
// 		setOpenIndex(openIndex === index ? null : index);
// 	};

// 	return (
// 		<section className="tpk-contained">
// 			<div className="mb-12">
// 				<div className="flex items-start justify-start gap-3 mb-12 md:mb-auto">
// 					<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
// 						<path d="M22.5 10.1639V11.8361C22.5 12.0229 22.348 12.1749 22.1612 12.1793C19.7505 12.2618 17.5701 13.2043 15.9109 14.7246C15.8544 14.7724 15.7979 14.8245 15.7458 14.8766C15.698 14.92 15.6502 14.9635 15.6068 15.0113C15.5764 15.0417 15.546 15.0721 15.5113 15.1068C15.4678 15.1502 15.4244 15.198 15.3766 15.2458C13.7738 16.9224 12.7661 19.168 12.6793 21.6612C12.6749 21.848 12.5229 22 12.3361 22H10.6639C10.4771 22 10.3251 21.848 10.3207 21.6612C10.2425 19.2592 9.29566 17.0831 7.78845 15.4239C7.6842 15.3066 7.57562 15.1937 7.46703 15.0851C7.44965 15.0677 7.43662 15.0547 7.41925 15.0373C7.31066 14.9287 7.19339 14.8201 7.08045 14.7159C7.01965 14.6638 6.96318 14.6116 6.90237 14.5639C5.26486 13.1435 3.15824 12.2618 0.834452 12.1836C0.64768 12.1793 0.5 12.0316 0.5 11.8448V10.1682C0.5 9.98144 0.652024 9.82942 0.838796 9.82507C3.32764 9.7382 5.57759 8.7305 7.25419 7.12774C7.30197 7.0843 7.34541 7.04087 7.39319 6.99309C7.42359 6.96269 7.454 6.93228 7.48875 6.89753C7.53218 6.8541 7.57562 6.80632 7.6234 6.75854C9.22616 5.07759 10.2382 2.83198 10.3207 0.343139C10.3251 0.152024 10.4771 0 10.6639 0H12.3361C12.5229 0 12.6749 0.152024 12.6793 0.338796C12.7661 2.82764 13.7695 5.0689 15.3679 6.74551C15.4939 6.87581 15.6198 7.00612 15.7501 7.12774C15.8023 7.17552 15.8544 7.22764 15.9109 7.27108C15.9673 7.3232 16.0238 7.37532 16.0803 7.4231C17.7178 8.85212 19.8331 9.7382 22.1612 9.81639C22.348 9.82073 22.4957 9.96841 22.4957 10.1552L22.5 10.1639Z" fill="#808080" />
// 					</svg>
// 					<h4 className="text-muted-4 dark:text-muted text-normal uppercase">Blog</h4>
// 				</div>
// 				<h2 className="text-xl md:text-2xl font-normal mt-4 uppercase tpk-text-muted">Keep up with interesting topic, Join in on the conversactions and Grow with the community</h2>
// 			</div>
// 			<div className="w-full border-muted-2 dark:border-[#404040] border-b-[0.5px]">
// 				{accordions.map((accordion, index) => (
// 					<Fragment key={index}>
// 						<button onClick={() => toggleAccordion(index)} className={`${openIndex === index && "hidden"} hover:border-black dark:hover:border-white hover:border-b-[0.5px] gap-2 border-x-[0.5px] border-t-[0.5px] dark:border-[#404040] border-muted-2 w-full flex flex-col-reverse md:flex-row items-start justify-start py-4 px-6`}>
// 							<h4 className="md:basis-8/12 text-start">{accordion.title}</h4>
// 							<div className="md:basis-4/12 flex items-center justify-between w-full">
// 								<span className="tpk-text-muted md:text-start">{accordion.category}</span>
// 								<span className="tpk-text-muted md:text-end">{accordion.createdAt}</span>
// 							</div>
// 						</button>
// 						{openIndex === index && <div className="relative pt-36 px-6 border-x-[0.5px] border-[#404040] p-8 bg-gray-800 bg-center bg-no-repeat bg-cover bg-blend-overlay" style={{ backgroundImage: `url(${accordion.img})` }}>
// 							<button onClick={() => toggleAccordion(index)} className="absolute left-0 top-0 px-6 py-4 gap-2 w-full flex flex-col-reverse md:flex-row items-start justify-start">
// 								<h4 className="md:basis-8/12 text-white text-start">{accordion.title}</h4>
// 								<div className="md:basis-4/12 flex items-center justify-between w-full">
// 									<span className="tpk-text-muted md:text-start">{accordion.category}</span>
// 									<span className="tpk-text-muted md:text-end">{accordion.createdAt}</span>
// 								</div>
// 							</button>
// 							<p className="tpk-text-muted text-xl md:text-2xl">{accordion.content}</p>
// 						</div>}
// 					</Fragment>
// 				))}
// 			</div>
// 			<div className="flex flex-col lg:flex-row mt-12">
// 				<div className="basis-5/12"></div>
// 				<div className="basis-7/12">
// 					<Link href="#x"
// 						className="tpk-btn-muted">
// 						EXPLORE ALL BLOGS
// 					</Link>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default TheBlog;


import React from 'react';

const DancingMachines = () => {
  const blogs = [
    {
      number: "01",
      tag: "ARTIFICIAL INTELLIGENCE",
      title: "When Machines Become Gods:",
      subtitle: "How AI Is Reshaping Faith and Forging a New Era of Technocratic Religion",
      image: "/api/placeholder/400/400"
    },
    {
      number: "02",
      tag: "ARTIFICIAL INTELLIGENCE",
      title: "Ranking the Machines",
      subtitle: "A Threat Assessment of AI Systems and Their Role in Society",
      image: "/api/placeholder/400/400"
    },
    {
      number: "03",
      tag: "CYBERSECURITY",
      title: "The Rise of Agnostic AI:",
      subtitle: "How Businesses Must Prepare for Next-Gen Cyber Threats and Social Engineering Attacks",
      image: "/api/placeholder/400/400"
    }
  ];

  return (


    <div className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-light text-center mb-4">
          DANCING WITH MACHINES
        </h1>
        <p className="text-gray-400 text-center mb-16">
          Explore the collaboration between humans, technology & Cybersecurity.
        </p>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className="group relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Card Background */}
              <div className="relative h-[400px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 text-xs border border-gray-500 rounded-full mb-4">
                      {blog.tag}
                    </span>
                    <span className="block text-6xl font-light mb-4 text-gray-400">
                      {blog.number}
                    </span>
                  </div>
                  
                  <div>
                    <span className="inline-block px-2 py-1 text-xs bg-gray-800 text-gray-300 mb-2">
                      BLOG
                    </span>
                    <h3 className="text-lg font-light mb-1">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {blog.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center">
          <button className="px-6 py-3 border border-gray-700 rounded-full text-sm hover:bg-gray-800 transition-colors duration-300">
            WHAT'S ON THE EDGE OF TOMORROW?
          </button>
        </div>
      </div>
    </div>

	
  );
};

export default DancingMachines;