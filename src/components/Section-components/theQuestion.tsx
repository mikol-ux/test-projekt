"use client";

import { useState } from "react";

const faqs = [
	{
		question: "WHAT SEPARATES THE PROJEKT FROM OTHER COMPANIES?",
		answer:
			"We provide a unique approach tailored to each client, ensuring quality, efficiency, and innovation.",
	},
	{
		question: "DO YOU WORK WITH CLIENTS IN DIFFERENT TIMEZONES?",
		answer: (
			<>
				<p>
					Yes, we work with clients globally and adjust our schedules to ensure
					seamless collaboration.
				</p>
				<p>
					In a saturated market of excellent design and branding agencies, it's
					challenging to stand out. However, we are not a branding or design
					agency. We are a software development and cyber security first
					company. We don’t just blindly build a good-looking website for our
					clients. We dive deep into market research to test whether their idea
					even makes sense. Everyone thinks their idea is brilliant—until we
					poke holes in it, find the weaknesses, and help fortify it. If it
					survives? We give it a name and go from there.
				</p>
				<ul className="list-disc list-inside mt-2">
					<li>
						When you choose us, you collaborate directly with our dedicated
						team, get access to founders who have worked with us and genuinely
						care about your success.
					</li>
					<li>
						Our cofounders oversee every project, while a design director leads
						the way, ensuring thorough design reviews and involvement in project
						details.
					</li>
					<li>
						We have a hiring division that allows our clients (partners) who
						have remote-friendly businesses to hire vetted and qualified
						off-shore employees.
					</li>
					<li>
						Communication and transparency drive all our interactions,
						guaranteeing a premium client experience from start to finish. Our
						agility stems from working with a diverse set of businesses, and our
						refined project management approach comes from years of experience.
					</li>
				</ul>
			</>
		),
	},
	{
		question: "HOW MUCH DOES HIRING YOU FOR A CUSTOM PROJEKT COST?",
		answer: (
			<>
				<p>
					In a saturated market of excellent design and branding agencies, it's
					challenging to stand out. However, we are not a branding or design
					agency. We are a software development and cyber security first
					company. We don’t just blindly build a good-looking website for our
					clients. We dive deep into market research to test whether their idea
					even makes sense. Everyone thinks their idea is brilliant—until we
					poke holes in it, find the weaknesses, and help fortify it. If it
					survives? We give it a name and go from there.
				</p>
				<ul className="list-disc list-inside mt-2">
					<li>
						When you choose us, you collaborate directly with our dedicated
						team, get access to founders who have worked with us and genuinely
						care about your success.
					</li>
					<li>
						Our cofounders oversee every project, while a design director leads
						the way, ensuring thorough design reviews and involvement in project
						details.
					</li>
					<li>
						We have a hiring division that allows our clients (partners) who
						have remote-friendly businesses to hire vetted and qualified
						off-shore employees.
					</li>
					<li>
						Communication and transparency drive all our interactions,
						guaranteeing a premium client experience from start to finish. Our
						agility stems from working with a diverse set of businesses, and our
						refined project management approach comes from years of experience.
					</li>
				</ul>
			</>
		),
	},
];

const ClientFAQ = () => {
	const [openIndexes, setOpenIndexes] = useState<number[]>([]);

	const toggleFAQ = (index: number) => {
		setOpenIndexes((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
		);
	};

	return (
		<div className="mt-8 w-full">
			{faqs.map((faq, index) => (
				<div
					key={index}
					className={`group bg-linear-to-r from-pitch-dark-blue from-[-4.81%] via-deep-blue via-[27%] to-sky-blue to-100% p-[1px]
              rounded-[4px] cursor-pointer `}
				>
					<div className={`py-2 text-black dark:text-white transition-colors rounded-[4px] ${openIndexes.includes(index)
								? "bg-gradient-to-r from-black to-deep-blue"
								: "bg-black"
							}`}>
						<button
							className="w-full flex gap-8 justify-start items-center px-6 py-4 transition-all"
							onClick={() => toggleFAQ(index)}>
							<span className="tpk-text-lg">
								{openIndexes.includes(index) ? "−" : "+"}
							</span>
							<span className="text-left tpk-text-lg font-normal">
								{faq.question}
							</span>
						</button>
						{openIndexes.includes(index) && (
							<div className="px-6 py-4 tpx-text-sm text-black dark:text-white font-light">
								{faq.answer}
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default ClientFAQ;
