import React, { useEffect, useRef, useState } from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Create an infinite loop of testimonials
    const totalTestimonials = [...testimonials, ...testimonials, ...testimonials];
    setDisplayedTestimonials(totalTestimonials);

    const container = containerRef.current;
    const marquee = marqueeRef.current;

    if (!container || !marquee) return;

    let animationFrameId;
    let xPosition = 0;

    const animate = () => {
      // Move testimonials from right to left
      xPosition -= 1;
      
      // Reset position when testimonials completely move out
      if (Math.abs(xPosition) >= marquee.scrollWidth / 2) {
        xPosition = 0;
      }

      // Apply the translation
      marquee.style.transform = `translateX(${xPosition}px)`;

      // Continue the animation
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(animate);

    // Clean up the animation when component unmounts
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          What Our Students Say
        </h2>

        {/* Testimonials Container */}
        <div 
          ref={containerRef} 
          className="overflow-hidden w-full"
        >
          <div 
            ref={marqueeRef}
            className="flex transition-transform duration-0 ease-linear"
          >
            {displayedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 md:w-72 p-4 mx-2 md:mx-4 bg-white shadow rounded-lg text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-3"
                />
                <h3 className="font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;