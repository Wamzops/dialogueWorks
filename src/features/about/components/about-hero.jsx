"use client";
import FadeIn from "@/components/FadeIn";

const AboutHero = () => {
  return (
    <section className="bg-blue-100 px-6 sm:px-12 md:px-20 lg:px-32 pt-48 pb-32 md:pb-64 relative overflow-hidden text-center">
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn direction="down" className="mb-12">
          <span className="text-[12px] font-black uppercase tracking-[0.4em] text-secondary">
            DWI • OUR GENESIS
          </span>
        </FadeIn>

        <FadeIn delay={0.2} className="mb-24">
          <h1 className="font-heading fs-xxl font-medium tracking-tighter leading-[0.85] h-auto italic-none">
            Because <span className="italic">dialogue</span> <br /> actually
            works.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl font-light text-primary leading-relaxed max-w-4xl mx-auto h-auto">
            Dialogue Works Initiative (DWI) is a community-based peacebuilding
            organization dedicated to building safe, peaceful, and resilient
            societies. We believe that lasting peace begins with conversation.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-20">
          <div className="w-16 h-16 rounded-full border border-black mx-auto flex items-center justify-center animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5V19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 12L12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </FadeIn>
      </div>

      {/* Background Subtle Accent */}
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-accent-midwest opacity-10 blur-[150px] rounded-full"></div>
    </section>
  );
};

export default AboutHero;
