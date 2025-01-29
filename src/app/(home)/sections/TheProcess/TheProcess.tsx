"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientBtn from "@/components/Buttons/GradientBtn";

gsap.registerPlugin(ScrollTrigger);

const ProcessSteps = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const steps = [
    {
      step: "STEP 01",
      title: "SELECT A PROGRAM/FILL OUT THE QUESTIONNAIRE",
      description: "Pick a program that fits your goals and complete a short questionnaire. This helps us tailor the perfect solution for you.",
      buttonText: "CHECK PROGRAM"
    },
    {
      step: "STEP 02",
      title: "LOG IN/MAKE A REFUNDABLE DEPOSIT",
      description: "Create an account and make a refundable deposit to confirm your commitment. This ensures we're ready to dive in.",
      buttonText: "LOG IN / SIGN UP"
    },
    {
      step: "STEP 03",
      title: "SCHEDULE A CALL",
      description: "Book a quick call with our team to align on your needs, goals, and expectations before starting.",
      buttonText: "BOOK A CALL"
    },
    {
      step: "STEP 04",
      title: "PROJECT KICK OFF",
      description: "Once everything is set, we'll kick off the project and bring your vision to life.",
      buttonText: "START THE PROJECT"
    }
  ];

  useEffect(() => {
    // Set first step as active by default
    const firstCard = document.querySelector('.timeline-card');
    const firstDot = document.querySelector('.timeline-dot');
    const firstStepNumber = firstCard.querySelector('.step-number');
    const firstStepTitle = firstCard.querySelector('.step-title');

    gsap.set(firstStepNumber, { color: "#BEE8FF" });
    gsap.set(firstStepTitle, { color: "#ffffff" });
    gsap.set(firstDot, { 
      backgroundColor: "#BEE8FF",
      scale: 1.2
    });

    // Progress line animation
    const progressLine = gsap.fromTo(
      timelineRef.current,
      { height: "0%" },
      { 
        height: "100%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );

    // Animate cards and content (skip first card)
    gsap.utils.toArray('.timeline-card').forEach((card, index) => {
      if (index === 0) return; // Skip first card animation since it's active by default

      const xOffset = index % 2 === 0 ? -50 : 50;
      const stepTitle = card.querySelector('.step-title');
      const stepNumber = card.querySelector('.step-number');
      
      // Initial card animation
      gsap.fromTo(card,
        { 
          opacity: 0, 
          x: xOffset 
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Create a timeline for text color animations
      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          toggleActions: "play reverse play reverse"
        }
      })
      .to(stepNumber, {
        color: "#BEE8FF",
        duration: 0.3
      })
      .to(stepTitle, {
        color: "#ffffff",
        duration: 0.3
      }, "-=0.2");
    });

    // Animate timeline dots (skip first dot)
    gsap.utils.toArray('.timeline-dot').forEach((dot, index) => {
      if (index === 0) return; // Skip first dot animation since it's active by default

      gsap.fromTo(dot,
        { 
          scale: 1,
          backgroundColor: '#1f2937' 
        },
        {
          scale: 1.2,
          backgroundColor: '#BEE8FF',
          scrollTrigger: {
            trigger: dot,
            start: "top 75%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-white p-8">
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
                <p className="text-muted-4 step-number font-normal mb-2 transition-colors duration-300">
                  {step.step}
                </p>
                <h3 className="step-title text-xl font-normal mb-3 text-muted-4 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="step-description text-muted-4 font-normal mb-6 transition-colors duration-300">
                  {step.description}
                </p>
                <GradientBtn href="#" className="inline-flex" isAnimated={true}>{step.buttonText}</GradientBtn>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;