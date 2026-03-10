"use client";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

const stats = [
  { label: "Founded", value: "2013" },
  { label: "Headquarters", value: "Nairobi, Kenya" },
  { label: "Years of Impact", value: "10+" },
  { label: "Communities Served", value: "50+" },
];

// Masonry grid of images — replace src values with your own
const photos = [
  { src: "/images/abt (1).jpeg", alt: "Team dialogue session", span: "col-span-2 row-span-2" },
  { src: "/images/abt (12).jpeg", alt: "Community workshop" },
  { src: "/images/abt (4).jpeg", alt: "Field work" },
  { src: "/images/abt (5).jpeg", alt: "Youth programme" },
    { src: "/images/abt (13).jpeg", alt: "Field work" },
  { src: "/images/abt (6).jpeg", alt: "Partner gathering", span: "col-span-2" },
  { src: "/images/abt (7).jpeg", alt: "Conflict resolution circle" },
  { src: "/images/abt (8).jpeg", alt: "Women leaders forum" },
  { src: "/images/abt (11).jpeg", alt: "Our Commitment In Action", span: "col-span-2 row-span-2" },
  { src: "/images/abt (9).jpeg", alt: "Community celebration" },
  { src: "/images/abt (10).jpeg", alt: "Training session" },
];

const AboutDetails = () => {
  return (
    <>
      {/* ── Hero text section ── */}
      <section className="py-20 md:py-32 px-6 sm:px-12 md:px-20 lg:px-32 bg-white text-primary">
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumb-style label */}
          <FadeIn direction="up">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-primary/40 mb-8">
              About Us
            </p>
          </FadeIn>

          {/* Large editorial headline */}
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-heading fs-xxl font-semibold leading-[1.05] tracking-tight text-primary max-w-5xl mb-12">
              Perspectives lead to permanent peace.
            </h1>
          </FadeIn>

          {/* Body copy + stats side by side */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 border-t border-primary/10 pt-12">

            {/* Body copy */}
            <FadeIn direction="up" delay={0.2} className="lg:w-2/3">
              <p className="text-lg md:text-xl font-light text-primary/70 leading-relaxed max-w-2xl">
                At Dialogue Works Initiative, we are committed to a more peaceful
                world. With over ten years of experience, we have been at the
                forefront of conflict prevention and resilience building across
                communities.
              </p>
              <p className="text-lg md:text-xl font-light text-primary/70 leading-relaxed max-w-2xl mt-6">
                Our mission is simple yet profound: to create societies where
                people feel safe, heard, and empowered to shape their own peace.
                We invest in communities, and communities invest in each other —
                in dialogue, in trust, and in a shared future.
              </p>
            </FadeIn>

            {/* Stats block */}
            <FadeIn direction="up" delay={0.3} className="lg:w-1/3 flex flex-col gap-6">
              {stats.map(({ label, value }) => (
                <div key={label} className="border-b border-primary/10 pb-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.35em] text-primary/40 mb-1">
                    {label}
                  </p>
                  <p className="text-xl font-semibold text-primary">{value}</p>
                </div>
              ))}
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Photo masonry grid ── */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3 md:gap-4">
              {photos.map(({ src, alt, span }, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden bg-primary/5 ${span ?? ""}`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA section ── */}
      <section className="py-24 md:py-40 px-6 sm:px-12 md:px-20 lg:px-32 bg-yellow-500 text-black ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <FadeIn direction="up">
            <h2 className="font-heading fs-xl font-semibold leading-[1.05] tracking-tight max-w-2xl">
              This feels like the start of something good.
            </h2>
            <p className="text-lg font-light text-black max-w-xl mt-6 leading-relaxed">
              Our favourite partners treat us as part of their community — and
              vice versa. If you are ready to build lasting peace together,
              we would love to hear from you.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="shrink-0">
            <a href="/contact">
              <button className="inline-block underline font-bold uppercase tracking-widest text-[13px] transition-colors duration-300 hover:text-white">
                Let's Connect →
              </button>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default AboutDetails;