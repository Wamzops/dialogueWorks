"use client";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import images from "@/data/commitment-images.json";

const CommitmentSection = () => {
  if (!images || images.length === 0) return null;
  const mainImage = images[0];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 opacity-50 transition-transform duration-[3s] hover:scale-110">
        <Image
          src={mainImage}
          alt="Our Commitment"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40"></div>

      <div className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-32 max-w-7xl mx-auto text-center py-32">
        <FadeIn direction="down" className="mb-12">
          <span className="text-[12px] font-black uppercase tracking-[0.4em] text-secondary">
            OUR PROMISE • THE FUTURE
          </span>
        </FadeIn>

        <FadeIn delay={0.2} className="mb-16">
          <h2 className="text-[clamp(2rem,7vw,6.5rem)] font-medium text-white tracking-tighter leading-[1.0] max-w-5xl mx-auto h-auto">
            Our <span className="italic">commitment</span> is paving{" "}
            <br className="hidden md:block" />
            the path to a{" "}
            <span className="italic text-secondary">resilient</span> future.
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-3xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed mb-16">
            We don't just facilitate dialogue; we build the foundational systems
            that ensure peace is not just a moment, but a permanent state.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <button className="px-12 py-6 bg-white text-primary font-bold rounded-full hover:bg-secondary hover:text-white transition-all duration-300 uppercase tracking-widest text-[13px]">
            Join the Dialogue
          </button>
        </FadeIn>
      </div>

      {/* Bottom Floating Stats / Elements (Midwest subtle touch) */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end lg:flex">
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-secondary font-black italic text-2xl">
              01.
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Community Led
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-secondary font-black italic text-2xl">
              02.
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Evidence Based
            </span>
          </div>
        </div>
        <div className="w-px h-24 bg-white/20"></div>
      </div>
    </section>
  );
};

export default CommitmentSection;
