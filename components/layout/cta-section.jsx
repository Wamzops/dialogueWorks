"use client";
import React from "react";
import FadeIn from "../FadeIn";

const CTASection = () => {
  return (
    <section className="bg-[#2d2f9e] px-6 sm:px-12 md:px-20 lg:px-32 py-8 md:py-12 relative overflow-hidden text-center text-white">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn direction="down" className="mb-12">
          <span className="text-[12px] font-white uppercase tracking-[0.4em] text-secondary">
            COMMUNITY • DIALOGUE • ACTION
          </span>
        </FadeIn>

        <FadeIn delay={0.2} className="mb-16">
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-medium text-yellow-500 tracking-tighter leading-[0.9] h-auto italic-none">
            Ready to build <br />a more <span className="italic">peaceful</span>{" "}
            future?
          </h2>
        </FadeIn>

        <FadeIn delay={0.3} className="mb-20">
          <p className="text-xl md:text-3xl font-light text-white max-w-2xl mx-auto leading-relaxed h-auto">
            Join our mission to strengthen resilience, prevent conflict, and
            foster inclusive dialogue across Africa.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.4}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="/contact"
            className="px-12 py-6 bg-black text-primary font-bold rounded-full hover:bg-secondary hover:text-white transition-all duration-300 uppercase tracking-widest text-[13px] shadow-2xl"
          >
            Share a Perspective
          </a>
          <a
            href="/about"
            className="px-12 py-6 border-2 border-white/20 text-white font-bold rounded-full hover:border-white transition-all duration-300 uppercase tracking-widest text-[13px]"
          >
            The Framework →
          </a>
        </FadeIn>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary opacity-15 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default CTASection;
