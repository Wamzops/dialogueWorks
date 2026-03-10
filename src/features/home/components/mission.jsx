"use client";
import FadeIn from "@/components/FadeIn";

const Mission = () => {
  return (
    <section className="bg-blue-50 px-6 sm:px-12 md:px-20 lg:px-32 py-32 sm:py-48 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <FadeIn direction="down">
          <span className="text-[14px] font-black uppercase tracking-[0.4em] text-secondary mb-10 block">
            HOW WE WORK • OUR MISSION
          </span>
        </FadeIn>

        <FadeIn delay={0.2} className="relative z-10 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-[clamp(2.5rem,8vw,6.5rem)] font-heading font-medium text-primary leading-[0.95] tracking-tight italic-none mb-20 italic">
            Building
            <span className="italic text-secondary"> safe,</span>
            <span className="italic text-secondary"> peaceful</span> and 
            <span className="italic text-secondary"> resilient</span> societies through 
             <span className="font-bold"> dialogue </span> and
            <span className="font-bold"> research</span> and
            <span className="font-bold"> collective action.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-[28px] font-light leading-relaxed text-primary/80 max-w-3xl">
            We are a non-profit organization dedicated to fostering peace,
            security, and sustainable development through community-driven
            initiatives and collaborative partnerships.
          </p>
        </FadeIn>
      </div>
      <div className="absolute top-[20%] left-[-5%] w-[40%] h-[40%] bg-accent-midwest opacity-[0.08] blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Mission;
