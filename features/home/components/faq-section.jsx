"use client";

import React, { useState, useRef, useEffect } from "react";
import faqData from "@/data/home-faq.json";
import FadeIn from "@/components/FadeIn";

const FAQItem = ({ faq, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [faq.answer]);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="flex w-full py-10 items-center justify-between text-left group"
        onClick={onToggle}
      >
        <div className="flex items-baseline gap-6">
          <span className="text-secondary font-black text-xs italic opacity-40">
            0{index + 1}.
          </span>
          <h5 className="text-2xl md:text-3xl font-medium text-primary tracking-tight group-hover:italic transition-all duration-300">
            {faq.question}
          </h5>
        </div>
        <span
          className={`flex-shrink-0 ml-4 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5V19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-700 ease-in-out"
        style={{ height: isOpen ? `${contentHeight}px` : "0px" }}
      >
        <div className="pb-10 pl-16">
          <p className="text-xl font-light text-gray-500 leading-relaxed max-w-3xl">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-32 md:py-64 px-6 sm:px-12 md:px-20 lg:px-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24">
          <FadeIn direction="down" className="mb-12">
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-secondary">
              QUESTIONS • PERSPECTIVES
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-medium text-primary tracking-tighter leading-[0.9] h-auto italic-none">
              Common <span className="italic">curiosities</span> <br /> about
              our approach.
            </h2>
          </FadeIn>
        </header>

        <div className="w-full">
          {faqData.map((faq, index) => (
            <FadeIn key={faq.id} delay={0.05 * index}>
              <FAQItem
                faq={faq}
                index={index}
                isOpen={openItems[faq.id] || false}
                onToggle={() => toggleItem(faq.id)}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-32">
          <div className="p-12 md:p-20 bg-primary text-white rounded-[3rem] text-center relative overflow-hidden">
            {/* Accent Blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 blur-[100px] -mr-32 -mt-32"></div>

            <h3 className="text-3xl md:text-5xl font-medium mb-10 tracking-tight">
              Still seeking clarity?
            </h3>
            <p className="text-xl font-light text-white/70 max-w-2xl mx-auto mb-12">
              Our team is ready to provide specific insights into how dialogue
              can transform your unique community challenge.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-10 py-5 bg-white text-primary font-bold rounded-full hover:bg-secondary hover:text-white transition-all uppercase tracking-widest text-[12px]">
                Contact Support
              </button>
              <button className="px-10 py-5 border-2 border-white/30 text-white font-bold rounded-full hover:border-white transition-all uppercase tracking-widest text-[12px]">
                Our Hotline
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQSection;
