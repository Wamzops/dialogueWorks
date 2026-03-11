"use client";
import React from "react";
import FadeIn from "@/components/FadeIn";

const programs = [
  {
    title: "Peacebuilding & Conflict Prevention",
    description:
      "Strategies and social cohesion efforts designed to turn regional tensions into durable, community-owned peace.",
    color: "#1f229c",
  },
  {
    title: "Electoral Support",
    description:
      "Peacebuilding and violence prevention initiatives conducted before, during, and after elections.",
    color: "#abdef5",
    light: true,
  },
  {
    title: "Inclusive Governance",
    description:
      "Promoting meaningful public participation and dialogue between communities and institutions.",
    color: "#1d1d1d",
  },
  {
    title: "Security & Community Safety",
    description:
      "Implementing community policing and safety initiatives to strengthen resilience.",
    color: "#f0f0f0",
    light: true,
  },
  {
    title: "Resilience & PCVE",
    description:
      "Strengthening community resilience and Preventing/Countering Violent Extremism (PCVE).",
    color: "#151761",
  },
  {
    title: "Gender-Focused Advocacy",
    description:
      "Advancing Women, Peace & Security (WPS) and Gender-Based Violence (GBV) prevention.",
    color: "#ffffff",
    light: true,
    border: true,
  },
];

const capacities = [
  {
    title: "Dialogue Facilitation",
    description:
      "Promoting inclusive dialogue to bridge gaps between communities and institutions.",
  },
  {
    title: "Capacity Building",
    description:
      "Strengthening mediation and safety skills for grassroots leaders, youth, and women.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Applying research to create evidence-based governance and peace programming.",
  },
];

const ProgramCard = ({ item, index }) => (
  <FadeIn delay={0.1 * (index % 3)} className="h-full">
    <div
      className={`p-10 md:p-14 h-full flex flex-col justify-between group transition-all duration-700 hover:scale-[1.02] ${
        item.light ? "text-primary" : "text-white"
      } ${item.border ? "border border-gray-100" : ""}`}
      style={{ backgroundColor: item.color }}
    >
      <div>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 block opacity-60">
          PROGRAM AREA 0{index + 1}
        </span>
        <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.1] mb-8 group-hover:italic transition-all duration-500">
          {item.title}
        </h3>
      </div>
      <p
        className={`text-lg font-light leading-relaxed ${item.light ? "text-primary/70" : "text-white/70"}`}
      >
        {item.description}
      </p>
    </div>
  </FadeIn>
);

const OfferingsSection = () => {
  return (
    <section className="bg-white">
      {/* Programs Hero */}
      <div className="px-6 sm:px-12 md:px-20 lg:px-32 pt-32 md:pt-64 pb-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="down" className="mb-12">
            <span className="text-[14px] font-black uppercase tracking-[0.4em] text-secondary">
              WHAT WE DO • PROGRAM AREAS
            </span>
          </FadeIn>

          <FadeIn delay={0.2} className="mb-24">
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-medium tracking-tighter leading-[0.9] max-w-4xl h-auto">
              Our <span className="italic text-secondary">primary</span> <br /> commitment
              areas.
            </h2>
          </FadeIn>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {programs.map((p, i) => (
          <ProgramCard key={i} item={p} index={i} />
        ))}
      </div>

      {/* Core Capacity Split */}
      <div className="px-6 sm:px-12 md:px-14 lg:px-32 pt-24 md:pt-24 pb-14 flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 bg-primary text-white p-12 md:p-32 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative Blur */}
          <div className="absolute top-0 left-0 w-full h-full bg-secondary/10 blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <FadeIn direction="left">
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-secondary mb-12 block">
              INTELLIGENCE • FACILITATION
            </span>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-tighter mb-12 italic italic-none">
              Our <span className="italic font-light">core</span> <br />{" "}
              capacity.
            </h2>
          </FadeIn>

          <FadeIn direction="left" delay={0.3}>
            <p className="text-xl md:text-3xl font-light text-white/70 leading-relaxed max-w-xl">
              We provide the framework, the data, and the facilitation needed to
              turn complex regional tensions into sustainable, community-owned
              peace.
            </p>
          </FadeIn>
        </div>

        <div className="lg:w-1/2 bg-blue-50 p-12 md:p-32 flex flex-col justify-center border-l border-gray-100">
          <div className="space-y-24">
            {capacities.map((c, i) => (
              <FadeIn
                key={i}
                direction="right"
                delay={0.1 * i}
                className="group"
              >
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-secondary font-black text-sm italic">
                    0{i + 1}.
                  </span>
                  <h4 className="text-3xl md:text-4xl font-medium tracking-tight group-hover:italic transition-all duration-300">
                    {c.title}
                  </h4>
                </div>
                <p className="text-xl font-light text-gray-500 leading-relaxed ml-12">
                  {c.description}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.4} className="mt-24 ml-12">
            <button className="text-[13px] font-bold uppercase tracking-[0.3em] text-primary border-b-2 border-primary pb-2 hover:text-secondary hover:border-secondary transition-all">
              Discover All Services →
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
