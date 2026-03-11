"use client";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

const TeamSection = () => {
  return (
    <section
      data-nav-theme="light"
      className="bg-yellow-50 text-black px-6 sm:px-12 md:px-20 lg:px-32 py-16 md:py-24 overflow-hidden relative"
    >
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-[120px] -mr-32 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-20">
        <div className="lg:w-1/2">
          <FadeIn direction="down" className="mb-4">
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-secondary">
              OUR HUMANITY • THE COLLECTIVE
            </span>
          </FadeIn>
          <FadeIn delay={0.2} className="mb-6">
            <h2 className="font-heading fs-xl font-medium tracking-tighter leading-[0.95] h-auto italic-none max-w-xl">
              Fuelled by <br />
              <span className="italic font-light text-yellow-500">
                collective
              </span>{" "}
              <br /> brilliance.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl font-light text-black/60 leading-relaxed max-w-xl italic h-auto">
              We're a team of mediators, researchers, and community leaders
              united by the belief that dialogue is the only path to sustainable
              peace.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="mt-8">
            <a href="/team">
              <button className="px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-secondary hover:text-white transition-all duration-300 uppercase tracking-widest text-[13px]">
                Meet the team →
              </button>
            </a>
          </FadeIn>
        </div>
        <div className="lg:w-1/2">
          <FadeIn direction="right">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-black/5">
              <Image
                src="/images/abt (3).jpeg"
                alt="Core Collective"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
