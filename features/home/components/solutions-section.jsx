"use client";

import React, { useMemo } from "react";
import solutionsData from "@/data/home-solutions.json";

const images = [
  "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1600",
];

// Alternating accent colors from the requested palette
const accents = [
  {
    text: "text-accent",
    border: "border-accent",
    hoverBg: "hover:bg-accent",
  },
  {
    text: "text-secondary",
    border: "border-secondary",
    hoverBg: "hover:bg-secondary",
  },
  {
    text: "text-secondary-light",
    border: "border-secondary-light",
    hoverBg: "hover:bg-secondary-light",
  },
  {
    text: "text-accent-blue",
    border: "border-accent-blue",
    hoverBg: "hover:bg-accent-blue",
  },
];

const SolutionsSection = () => {
  const solutions = useMemo(() => solutionsData, []);

  return (
    <section id="solutions" className="bg-primary w-full">
      {solutions.map((solution, index) => {
        const isReversed = index % 2 !== 0;
        const accent = accents[index % accents.length];

        return (
          <div
            key={solution.id}
            className={`flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""} w-full min-h-[600px]`}
          >
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 py-20 bg-primary border-b border-neutral-light/5 md:border-none">
              <span
                className={`text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-4 ${accent.text}`}
              >
                {solution.tagline}
              </span>

              <h2 className="text-[40px] sm:text-[50px] lg:text-[60px] text-neutral-light font-heading font-normal leading-[1.1] mb-6">
                {solution.title}
              </h2>

              <div className="w-full h-[1px] bg-neutral-light/20 mb-8" />

              <p className="text-[16px] sm:text-[18px] text-neutral-light leading-relaxed mb-10 max-w-xl">
                {solution.description}
              </p>

              <div>
                <a
                  href={solution.link}
                  className={`inline-block px-8 py-3.5 border text-[14px] sm:text-[15px] font-bold rounded-[30px] transition-colors duration-300 ${accent.text} ${accent.border} ${accent.hoverBg} hover:text-primary-dark`}
                >
                  View More
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2 min-h-[400px] md:min-h-full relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] hover:scale-105"
                style={{ backgroundImage: `url(${images[index]})` }}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SolutionsSection;
