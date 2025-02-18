"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolidBtn from "@/components/Buttons/SolidBtn";
import GradientBtn from "@/components/Buttons/GradientBtn";

gsap.registerPlugin(ScrollTrigger);

interface Step {
	step: string;
	title: string;
	description: string;
	buttonText: string;
}

const ProcessSteps: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const timelineRef = useRef<HTMLDivElement | null>(null);

	const steps: Step[] = [
		{
			step: "STEP 01",
			title: "SELECT A PROGRAM/FILL OUT THE QUESTIONNAIRE",
			description:
				"Pick a program that fits your goals and complete a short questionnaire. This helps us tailor the perfect solution for you.",
			buttonText: "CHECK PROGRAM",
		},
		{
			step: "STEP 02",
			title: "LOG IN/MAKE A REFUNDABLE DEPOSIT",
			description:
				"Create an account and make a refundable deposit to confirm your commitment. This ensures we're ready to dive in.",
			buttonText: "LOG IN / SIGN UP",
		},
		{
			step: "STEP 03",
			title: "SCHEDULE A CALL",
			description:
				"Book a quick call with our team to align on your needs, goals, and expectations before starting.",
			buttonText: "BOOK A CALL",
		},
		{
			step: "STEP 04",
			title: "PROJECT KICK OFF",
			description: "Once everything is set, we'll kick off the project and bring your vision to life.",
			buttonText: "START THE PROJECT",
		},
	];

	useGSAP(() => {
		if (!sectionRef.current || !timelineRef.current) return;

		const firstCard = document.querySelector<HTMLDivElement>(".timeline-card");
		const firstDot = document.querySelector<HTMLDivElement>(".timeline-dot");
		const firstStepNumber = firstCard?.querySelector<HTMLParagraphElement>(".step-number");
		const firstStepTitle = firstCard?.querySelector<HTMLHeadingElement>(".step-title");

		if (firstStepNumber && firstStepTitle && firstDot) {
			// console.log("first step", firstStepNumber, firstStepTitle, firstDot);
			gsap.set(firstStepNumber, { color: "#BEE8FF" });
			gsap.set(firstStepTitle, { color: "#ffffff" });
			gsap.set(firstDot, { backgroundColor: "#BEE8FF", scale: 1.2 });
		}

		gsap.fromTo(
			timelineRef.current,
			{ height: "0%" },
			{
				height: "100%",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "center-=200 bottom",
					end: "bottom center",
					scrub: true
				},
			}
		);

		gsap.utils.toArray<HTMLDivElement>(".timeline-card").forEach((card, index) => {
			if (index === 0) return;
			const xOffset = index % 2 === 0 ? -50 : 50;
			const stepTitle = card.querySelector<HTMLHeadingElement>(".step-title");
			const stepNumber = card.querySelector<HTMLParagraphElement>(".step-number");

			// Animate the card
			gsap.fromTo(
				card,
				{ opacity: 0, x: xOffset },
				{
					opacity: 1,
					x: 0,
					duration: 0.8,
					scrollTrigger: {
						trigger: card,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
				}
			);

			// Animate the card's step number and title
			gsap.timeline({
				scrollTrigger: {
					trigger: card,
					start: "top 75%",
					// toggleActions: "play reverse play reverse",
				},
			})
				.to(stepNumber, { color: "#BEE8FF", duration: 0.3 })
				.to(stepTitle, { color: "#ffffff", duration: 0.3 }, "-=0.2");
		});

		// Animate Timeline Dots
		// Make the dot blink once it comes on
		gsap.utils.toArray<HTMLDivElement>(".timeline-dot").forEach((dot, index) => {
			if (index === 0) return;
			gsap.fromTo(
				dot,
				{ scale: 1, backgroundColor: "#1f2937" },
				{
					scale: 1.2,
					backgroundColor: "#BEE8FF",
					scrollTrigger: {
						trigger: dot,
						start: "center-=150 center+=200",
						end: "bottom center",
						// toggleActions: "play reverse"
					},
				}
			);
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section className="tpk-contained overflow-hidden">
			<div ref={sectionRef}>
				<div className="w-full text-center">
					<SolidBtn href="#x" className="block w-fit mx-auto mb-10 uppercase cursor-default tpk-text-sm font-light">How It Works</SolidBtn>
					<h2 className="tpk-text-2xl font-normal text-center mb-24">
						LET&apos;S TRANSFORM YOUR DREAM <br /> TO A REMARKABLE BUSINESS
					</h2>
				</div>

				<div className="relative mx-auto">
					{/* Vertical Timeline Line */}
					<div className="absolute md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-[#666666]">
						<div
							ref={timelineRef}
							className="w-full bg-gradient-to-r from-pitch-dark-blue via-deep-blue to-sky-blue origin-top"
						/>
					</div>

					{/* Timeline Items */}
					{steps.map((step, index) => (
						<div key={index} className="relative mb-16">
							<div className={`flex flex-col justify-center items-center md:gap-16 ps-8 md:ps-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} relative`}>
								{/* Timeline Dot */}
								<div className="timeline-dot absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full border border-[#666666] bg-[#666666]" />

								{/* Content Card */}
								<div className="timeline-card basis-6/12 2xl:basis-4/12">
									<p className="text-[#666666] tpk-text-md step-number font-normal mb-2 transition-colors duration-300">
										{step.step}
									</p>
									<h3 className="step-title tpk-text-lg font-normal mb-3 text-black dark:text-[#666666] transition-colors duration-300">
										{step.title}
									</h3>
									<p className="step-description tpk-text-sm text-muted-8 font-normal mb-6 transition-colors duration-300">
										{step.description}
									</p>
									<GradientBtn href="#x" className="inline-flex text-sm" isAnimated={true}>{step.buttonText}</GradientBtn>
								</div>
								<div className="basis-6/12 2xl:basis-4/12"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProcessSteps;