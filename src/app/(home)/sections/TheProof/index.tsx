// //
// import { FC } from "react";

// const TheProof: FC = () => {
// 	return (
// 		<section className="tpk-contained"></section>
// 	)
// }

// export default TheProof;
'use client'
import React, { useState, useEffect, useCallback } from 'react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      category: "CASE STUDY",
      title: "WEB DESIGN & DEV FOR MECHANICAL DESIGN ENGINEERING COMPANY",
      quote: "\"I was impressed by the team's tech ability and level of skill.\"",
      author: "CHRIS B.",
      rating: 5
    },
    {
      category: "CASE STUDY",
      title: "WEBSITE DEV & MANAGEMENT FOR PROPERTY MANAGEMENT COMPANY",
      quote: "\"They were punctual, and they communicated well.\"",
      author: "CHRIS H.",
      rating: 5
    },
    {
      category: "CASE STUDY",
      title: "DIGITAL TRANSFORMATION FOR HEALTHCARE PROVIDER",
      quote: "\"Their attention to detail and dedication was outstanding.\"",
      author: "SARAH M.",
      rating: 5
    }
  ];

  // Helper function to get paired testimonials
  const getPairedTestimonials = (index) => {
    const firstIndex = index;
    const secondIndex = (index + 1) % testimonials.length;
    return [testimonials[firstIndex], testimonials[secondIndex]];
  };

  const handleSlideChange = useCallback((newDirection) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(newDirection);
    
    setTimeout(() => {
      setCurrentSlide((prev) => {
        if (newDirection === 'right') {
          return (prev + 1) % Math.ceil(testimonials.length / 2);
        } else {
          return (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2);
        }
      });
      setIsAnimating(false);
    }, 600);
  }, [isAnimating, testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange('right');
    }, 5000);

    return () => clearInterval(timer);
  }, [handleSlideChange]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    const newDirection = index > currentSlide ? 'right' : 'left';
    handleSlideChange(newDirection);
  };

  const getSlidePosition = (index) => {
    const position = index - currentSlide;
    
    let transform = 'translate-x-full';
    let opacity = 'opacity-0';
    let zIndex = 'z-0';
    
    if (!isAnimating) {
      if (position === 0) {
        transform = 'translate-x-0';
        opacity = 'opacity-100';
        zIndex = 'z-20';
      }
    } else {
      if (direction === 'right') {
        if (position === 0) {
          transform = '-translate-x-full';
          opacity = 'opacity-100';
          zIndex = 'z-10';
        } else if (position === 1) {
          transform = 'translate-x-0';
          opacity = 'opacity-100';
          zIndex = 'z-20';
        }
      } else {
        if (position === 0) {
          transform = 'translate-x-full';
          opacity = 'opacity-100';
          zIndex = 'z-10';
        } else if (position === -1) {
          transform = 'translate-x-0';
          opacity = 'opacity-100';
          zIndex = 'z-20';
        }
      }
    }

    return `${transform} ${opacity} ${zIndex}`;
  };

  const renderTestimonialCard = (testimonial) => (
    <div className="border border-gray-800 rounded-lg p-8 min-h-72 min-h-96 flex flex-col justify-between  backdrop-blur">
      <span className="inline-block px-4 py-1 w-fit text-xs border border-muted text-muted rounded-full mb-6">
        {testimonial.category}
      </span>
	  <h3 className="text-4xl text-start font-normal mb-4 ">
		{testimonial.title}
      </h3>
      <p className="text-muted mb-6">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-sky-blue">★</span>
          ))}
        </div>
        <span className="text-sm text-sky-blue">{testimonial.author}</span>
      </div>
    </div>
  );

  return (
	<section className="tpk-contained">
		<div className="w-full text-white px-4 py-16">
		<div className=" mx-auto">
			<h2 className="text-2xl md:text-3xl font-light mb-12">
			CUSTOMER TESTIMONIALS
			</h2>

			<div className="relative overflow-hidden h-[400px] mb-12">
			<div className=" inset-0">
				{Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => {
				const [first, second] = getPairedTestimonials(index * 2);
				return (
					<div
					key={index}
					className={`absolute inset-0 transition-all duration-600 ease-in-out ${getSlidePosition(index)}`}
					>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{renderTestimonialCard(first)}
						{second && renderTestimonialCard(second)}
					</div>
					</div>
				);
				})}
			</div>

			<button 
				onClick={() => handleSlideChange('left')}
				className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-gray-400 hover:text-white"
			>
				←
			</button>
			<button 
				onClick={() => handleSlideChange('right')}
				className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-gray-400 hover:text-white"
			>
				→
			</button>
			</div>

			<div className="flex justify-start gap-2">
			{Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
				<button
				key={index}
				onClick={() => goToSlide(index)}
				className={`w-2 h-2 rounded-full transition-all duration-300 ${
					currentSlide === index 
					? 'bg-white w-8' 
					: 'bg-gray-600 hover:bg-gray-400'
				}`}
				aria-label={`Go to slide ${index + 1}`}
				/>
			))}
			</div>
		</div>
		</div>
	</section>
  );
};

export default TestimonialSlider;