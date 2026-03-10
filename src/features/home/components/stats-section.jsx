"use client";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

const StatsSection = () => {
  return (
    <section className="bg-white px-6 sm:px-12 md:px-20 lg:px-32 py-32 sm:py-32 border-y border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <FadeIn direction="down">
          <span className="text-[14px] font-black uppercase tracking-[0.4em] text-secondary mb-12 block">
            OUR SCALE • GLOBAL IMPACT
          </span>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-12 w-full mt-12">
          {/* Stat 1 */}
          <FadeIn
            delay={0.1}
            className="flex flex-col items-center text-center group"
          >
            <Image
              src="/images/f1 (1).svg"
              alt=""
              width={120}
              height={120}
              className="mb-6"
            />
            <span className="text-[clamp(4rem,10vw,8rem)] font-medium text-primary tracking-tighter leading-none mb-4 group-hover:italic transition-all duration-500">
              2.5k+
            </span>
            <div className="w-8 h-[2px] bg-secondary mb-6"></div>
            <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-primary/60 max-w-[200px] leading-relaxed">
              Mediators & leaders trained across Africa
            </p>
          </FadeIn>

          {/* Stat 2 */}
          <FadeIn
            delay={0.2}
            className="flex flex-col items-center text-center group"
          >
            <Image
              src="/images/f1 (2).svg"
              alt=""
              width={120}
              height={120}
              className="mb-6"
            />
            <span className="text-[clamp(4rem,10vw,8rem)] font-medium text-primary tracking-tighter leading-none mb-4 group-hover:italic transition-all duration-500">
              47
            </span>
            <div className="w-8 h-[2px] bg-secondary mb-6"></div>
            <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-primary/60 max-w-[200px] leading-relaxed">
              Communities actively served
            </p>
          </FadeIn>

          {/* Stat 3 */}
          <FadeIn
            delay={0.3}
            className="flex flex-col items-center text-center group"
          >
            <Image
              src="/images/f1 (3).svg"
              alt=""
              width={120}
              height={120}
              className="mb-6"
            />
            <span className="text-[clamp(4rem,10vw,8rem)] font-medium text-primary tracking-tighter leading-none mb-4 group-hover:italic transition-all duration-500">
              30+
            </span>
            <div className="w-8 h-[2px] bg-secondary mb-6"></div>
            <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-primary/60 max-w-[200px] leading-relaxed">
              Peacebuilding projects completed
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
