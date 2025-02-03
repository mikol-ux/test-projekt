"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;
    
    const firstCard = document.querySelector<HTMLDivElement>(".timeline-card");
    const firstDot = document.querySelector<HTMLDivElement>(".timeline-dot");
    const firstStepNumber = firstCard?.querySelector<HTMLParagraphElement>(".step-number");
    const firstStepTitle = firstCard?.querySelector<HTMLHeadingElement>(".step-title");

    if (firstStepNumber && firstStepTitle && firstDot) {
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
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.utils.toArray<HTMLDivElement>(".timeline-card").forEach((card, index) => {
      if (index === 0) return;
      const xOffset = index % 2 === 0 ? -50 : 50;
      const stepTitle = card.querySelector<HTMLHeadingElement>(".step-title");
      const stepNumber = card.querySelector<HTMLParagraphElement>(".step-number");

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

      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      })
        .to(stepNumber, { color: "#BEE8FF", duration: 0.3 })
        .to(stepTitle, { color: "#ffffff", duration: 0.3 }, "-=0.2");
    });

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
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
	<section className="tpk-contained">
    <div ref={sectionRef} className="min-h-screen text-white p-8">
      <p className='border border-sky-blue rounded-full w-fit mx-auto mb-10 py-1 px-10'>HOW IT WORKS</p>

      <h1 className="text-4xl font-normal text-center mb-24">
        LET'S TRANSFORM YOUR DREAM <br /> TO A REMARKABLE BUSINESS
      </h1>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-800">
          <div 
            ref={timelineRef} 
            className="w-full bg-sky-blue origin-top"
          />
        </div>

        {/* Timeline Items */}
        {steps.map((step, index) => (
          <div key={index} className="relative mb-16">
            <div className={`flex ${index % 2 !== 0 ? 'justify-start pl-5 md:justify-end md:pr-20' : 'justify-start pl-5 md:pl-20'} relative`}>
              {/* Timeline Dot */}
              <div className="timeline-dot absolute -left-1.5 md:left-1/2 top-0 transform md:-translate-x-1/2 w-4 h-4 rounded-full border border-gray-800 bg-gray-800" />

              {/* Content Card */}
              <div className="timeline-card w-96">
                <p className="text-sky-blue step-number font-normal mb-2 transition-colors duration-300">
                  {step.step}
                </p>
                <h3 className="step-title text-xl font-normal mb-3 text-black dark:text-white transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="step-description text-muted-8 font-normal mb-6 transition-colors duration-300">
                  {step.description}
                </p>
                <GradientBtn href="#" className="inline-flex text-sm" isAnimated={true}>{step.buttonText}</GradientBtn>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
	</section>
  );
};

export default ProcessSteps;