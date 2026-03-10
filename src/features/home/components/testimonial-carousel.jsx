"use client";

import React, { useState } from "react";
import Image from "next/image";
import testimonialsData from "@/data/home-testimonials.json";
import FadeIn from "@/components/FadeIn";

const TestimonialCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slideCount = testimonialsData.length;

  const goToPrevious = () => {
    setActiveSlide(activeSlide > 1 ? activeSlide - 1 : slideCount);
  };

  const goToNext = () => {
    setActiveSlide(activeSlide < slideCount ? activeSlide + 1 : 1);
  };

  return (
    <section className="py-32 md:py-64 px-6 sm:px-12 md:px-20 lg:px-32 bg-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="down" className="mb-20">
          <span className="text-[12px] font-black uppercase tracking-[0.4em] text-primary">
            VOICES • PERSPECTIVES
          </span>
        </FadeIn>

        <div className="relative">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-32">
                  {/* Image Circle */}
                  <div className="w-48 h-48 md:w-80 md:h-80 relative flex-shrink-0 rounded-full overflow-hidden border-[8px] border-white shadow-2xl">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Quote Content */}
                  <div className="flex-grow">
                    <h4 className="text-[clamp(1.5rem,4vw,3.5rem)] font-medium text-primary tracking-tight leading-loose mb-12 italic">
                      "{testimonial.quote}"
                    </h4>

                    <div className="flex flex-col gap-2">
                      <span className="text-2xl font-bold text-primary">
                        {testimonial.name}
                      </span>
                      <span className="text-[12px] font-black uppercase tracking-[0.3em] text-secondary">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large Navigation Controls */}
          <div className="mt-24 md:mt-32 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-secondary font-black italic text-xl">
                0{activeSlide}.
              </span>
              <div className="w-20 h-px bg-primary/20"></div>
              <span className="text-primary/40 font-black italic text-xl">
                0{slideCount}.
              </span>
            </div>

            <div className="flex gap-6">
              <button
                onClick={goToPrevious}
                className="w-16 h-16 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19L5 12L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="w-16 h-16 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
