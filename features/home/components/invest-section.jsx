"use client";

import React from "react";

const InvestSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[600px] bg-[#81D690]">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 py-20">
        <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#010204] font-black leading-none tracking-tight mb-8">
          Invest in conversations about peace in Sub-Saharan Africa.
        </h2>

        <p className="text-[#010204] text-[18px] sm:text-[22px] font-bold leading-snug max-w-[500px]">
          Dialogue Works is a non-profit organization based in Nairobi, Kenya,
          working to promote peace and understanding in Sub-Saharan Africa. Your
          donation helps us deliver services all around the year.
        </p>

        <a
          href="#"
          className="mt-12 self-start bg-[#FCCF3F] text-[#010204] px-10 py-4 font-black text-xl hover:bg-black hover:text-white rounded-none"
        >
          DONATE NOW
        </a>
      </div>

      <div className="w-full md:w-1/2 relative overflow-hidden hidden md:block border-l-[3px] border-[#010204]">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale contrast-125 mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=1600')`,
          }}
        />
      </div>
    </section>
  );
};

export default InvestSection;
