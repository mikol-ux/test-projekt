'use client'
import React, { useState, useEffect, useCallback } from 'react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      category: "CASE STUDY1",
      title: "WEB DESIGN & DEV FOR MECHANICAL DESIGN ENGINEERING COMPANY",
      quote: "\"I was impressed by the team's tech ability and level of skill.\"",
      author: "CHRIS B.",
      rating: 5
    },
    {
      category: "CASE STUDY2",
      title: "WEBSITE DEV & MANAGEMENT FOR PROPERTY MANAGEMENT COMPANY",
      quote: "\"They were punctual, and they communicated well.\"",
      author: "CHRIS H.",
      rating: 5
    },
    {
      category: "CASE STUDY3",
      title: "DIGITAL TRANSFORMATION FOR HEALTHCARE PROVIDER",
      quote: "\"Their attention to detail and dedication was outstanding.\"",
      author: "SARAH M.",
      rating: 5
    },
    {
      category: "CASE STUDY4",
      title: "ANOTHER TESTIMONIAL",
      quote: "\"This is another example testimonial.\"",
      author: "JOHN D.",
      rating: 5
    },
    {
      category: "CASE STUDY5",
      title: "ANOTHER TESTIMONIAL",
      quote: "\"This is another example testimonial.\"",
      author: "JOHN D.",
      rating: 5
    }
  ];

  // Handle window resize to detect mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for 'md' in Tailwind
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSlideChange = useCallback((direction: 'left' | 'right') => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setCurrentSlide((prev) => {
        if (direction === 'right') {
          return (prev + 1) % (isMobile ? testimonials.length : Math.ceil(testimonials.length / 2));
        } else {
          return (prev - 1 + (isMobile ? testimonials.length : Math.ceil(testimonials.length / 2))) % (isMobile ? testimonials.length : Math.ceil(testimonials.length / 2));
        }
      });
      setIsAnimating(false);
    }, 600);
  }, [isAnimating, isMobile, testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange('right');
    }, 5000);

    return () => clearInterval(timer);
  }, [handleSlideChange]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    const direction = index > currentSlide ? 'right' : 'left';
    handleSlideChange(direction);
  };

  return (
    <section className="tpk-contained">
      <div className="w-full text-white px-4">
        <div className="mx-auto">
          {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-7">
            CUSTOMER TESTIMONIALS
          </h2> */}
			<h2 className="tpk-text-2xl font-normal uppercase mb-7">
				CUSTOMER TESTIMONIALS
				</h2>

          <div className="relative overflow-hidden mb-12">
            {/* Slider Container */}
            <div
              className="flex transition-all duration-600 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (isMobile ? 100 : 100)}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 p-2"
                >
                  <div className="border border-gray-800 rounded-lg p-8 flex h-full flex-col justify-between backdrop-blur after:content-[''] after:absolute after:top-1 after:left-1 after:right-1 after:bottom-1 after:bg-transparent after:rounded-sm after:z-[2] before:content-[''] before:absolute before:inset-0 before:p-[1px] before:rounded-md before:-z-[1] before:mask-content-box relative">
                    <span className="inline-block px-4 py-1 w-fit text-xs border border-muted text-muted rounded-full mb-6">
                      {testimonial.category}
                    </span>
                    <h3 className="step-title tpk-text-lg font-normal mb-7 text-black dark:text-white transition-colors duration-300">
                      {testimonial.title}
                    </h3>
                    <p className="step-description tpk-text-sm text-muted font-normal mb-6 transition-colors duration-300">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-sky-blue">★</span>
                        ))}
                      </div>
                      <span className="text-sm text-white">{testimonial.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
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

          {/* Pagination Dots */}
          <div className="flex justify-start gap-2">
            {Array.from({ length: isMobile ? testimonials.length : Math.ceil(testimonials.length / 2) }).map((_, index) => (
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