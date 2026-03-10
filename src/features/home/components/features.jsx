"use client";
import FadeIn from "@/components/FadeIn";

const Features = () => {
  const featuresData = [
    {
      title: "Dialogue That Transforms",
      description:
        "Conflict doesn't end with silence — it ends with conversation. We bring divided communities to the same table, turning tension into trust and disagreement into durable peace.",
    },
    {
      title: "Communities Built to Withstand",
      description:
        "We don't just respond to crises — we prevent them. By equipping local leaders, youth, and women with real mediation and resilience skills, we build communities that can weather any storm.",
    },
    {
      title: "Peace Powered by Evidence",
      description:
        "Guesswork has no place in peacebuilding. We harness research, data analytics, and community insights to design programs that don't just feel good — they actually work.",
    },
    {
      title: "No One Left Behind",
      description:
        "True peace cannot be built by a few for the many. We place women, youth, and the most vulnerable at the heart of every dialogue, every decision, and every solution.",
    },
    {
      title: "Women, Peace & Security",
      description:
        "We champion the full and meaningful participation of women in peace and security processes — because societies where women lead are societies that last.",
    },
    {
      title: "Collective Action for Prevention",
      description:
        "Peace is not a solo effort. We unite communities, institutions, and development partners around a shared commitment to prevent conflict before it takes hold.",
    },
  ];

  return (
    <section className="py-32 md:py-64 px-6 sm:px-12 md:px-20 lg:px-32 bg-primary text-white overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-[120px] -mr-32 pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <FadeIn direction="down" className="mb-12">
          <span className="text-[14px] font-black uppercase tracking-[0.4em] text-secondary">
            OUR CAPABILITIES • CORE PILLARS
          </span>
        </FadeIn>

        <FadeIn delay={0.2} className="mb-32">
          <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-medium tracking-tighter leading-[0.95] max-w-4xl h-auto italic-none">
            Building peace <br />
            <span className="italic text-secondary ">one community</span> at a time.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
          {featuresData.map((feature, index) => (
            <FadeIn key={index} delay={0.1 * (index % 2)} className="group">
              <div className="flex items-baseline gap-6 mb-8">
                <span className="text-secondary font-black text-xl italic leading-none">
                  0{index + 1}.
                </span>
                <div className="h-px bg-white/20 flex-grow"></div>
              </div>

              <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 group-hover:italic transition-all duration-300">
                {feature.title}
              </h3>

              <p className="text-xl font-light text-white/70 leading-relaxed max-w-md">
                {feature.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
