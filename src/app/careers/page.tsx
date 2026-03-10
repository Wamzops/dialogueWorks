"use client";
import FadeIn from "@/components/FadeIn";
import { Footer } from "@/components/ui";
import CTASection from "@/components/layout/cta-section";
import JobListings from "@/features/about/components/job-listings";
import jobsData from "@/data/jobs.json";

export default function CareersPage() {
  return (
    <div className="antialiased font-body bg-white text-[#1a1a1a]">

      {/* ── HERO — dark teal bg, dot texture top-right ── */}
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden px-6 sm:px-12 md:px-20 lg:px-32 pt-40 md:pt-52 pb-16 md:pb-24"
        style={{ backgroundColor: "#c2410c" }}
      >
        {/* Dot/blob texture — top right */}
        <div
          className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none select-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`,
            backgroundSize: "18px 18px",
            maskImage: "radial-gradient(ellipse 80% 80% at 80% 20%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 80% 20%, black 40%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        {/* Decorative teal blob — top right accent */}
        <div
          className="absolute -top-10 -right-10 w-48 h-48 md:w-72 md:h-72 rounded-full pointer-events-none"
          style={{ backgroundColor: "#ea580c", opacity: 0.5, filter: "blur(40px)" }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <FadeIn direction="down" className="mb-6">
            <p className="text-xs tracking-widest uppercase text-white/50 font-medium">
              <a href="/" className="hover:text-white/80 transition-colors">Dialogue Works</a>
              {" › "}
              <span>Careers</span>
            </p>
          </FadeIn>

          {/* H1 */}
          <FadeIn delay={0.1} className="mb-8">
            <h1
              className="font-heading font-bold leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", color: "#ffffff" }}
            >
              Dialogue Works <br />Careers
            </h1>
          </FadeIn>

          {/* Intro paragraph */}
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
              Dialogue Works is a place where dedicated peacebuilders, researchers,
              mediators, and community leaders collaborate to do the most meaningful
              work of their careers.
            </p>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
  <div className="w-full overflow-hidden" style={{ height: "640px" }}>
    <img
      src="/images/CR6.jpeg"
      alt="Dialogue Works team"
      className="w-full h-full object-cover object-center"
      style={{ display: "block" }}
    />
  </div>
</FadeIn>

      {/* ── BODY COPY — white bg ── */}
      <section
        data-nav-theme="light"
        className="px-6 sm:px-12 md:px-20 lg:px-32 py-16 md:py-24 bg-white"
      >
        <div className="max-w-3xl mx-auto">

          <FadeIn>
            <h2
              className="font-heading font-bold tracking-tight leading-[1.1] mb-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}
            >
              The right people make all the difference.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-base md:text-lg font-light leading-relaxed mb-5" style={{ color: "#444" }}>
              We're a team that cares deeply about our work and does it with rigour.
              We're all leaders, and we're always learning. We're personally invested
              in our craft, our team, our partners, and our communities.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-base md:text-lg font-light leading-relaxed mb-12" style={{ color: "#444" }}>
              We work across Africa and beyond with large institutions, grassroots
              organisations, and governments. We work collaboratively with each other
              and our partners, and seek to cultivate a culture of trust. Dialogue,
              camaraderie, and togetherness is at the heart of everything we do.
            </p>
          </FadeIn>

          {/* 2×2 photo grid */}
          <FadeIn delay={0.1} className="mb-12">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src="/images/CR5.jpeg" alt="Team collaboration" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src="/images/CR3.jpeg" alt="Workshop session" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src="/images/CR2.jpeg" alt="Community work" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src="/images/CR4.jpeg" alt="Team gathering" className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-base md:text-lg font-light leading-relaxed mb-10" style={{ color: "#444" }}>
              We keep grounded and stay purposeful. Dialogue Works fosters a spirit
              of internal leadership and empowers its team members to make decisions,
              lead initiatives, and grow within their discipline. And we take care of
              our people, including the following notable benefits:
            </p>
          </FadeIn>

          {/* Benefits */}
          <FadeIn delay={0.15}>
            <p
              className="text-[10px] font-black uppercase tracking-[0.35em] mb-5"
              style={{ color: "#c2410c" }}
            >
              Dialogue Works Benefits
            </p>
            <ul className="space-y-2">
              {[
                "Generous leave including a full end-of-year winter break",
                "2+ weeks of additional public holiday paid time off",
                "Flexible, hybrid working arrangements",
                "100% covered health insurance including vision & dental",
                "Up to 12 weeks of paid parental leave with flexible return",
                "Wellness budget — fitness, mental health, yoga, and more",
                "Home office setup budget for equipment and furniture",
                "Professional development and learning stipend",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm md:text-base font-light" style={{ color: "#333" }}>
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#c2410c]" />
                  {b}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── "DO YOU ASPIRE?" — dark teal, two-column ── */}
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden px-6 sm:px-12 md:px-20 lg:px-32 py-24 md:py-40"
        style={{ backgroundColor: "#c2410c" }}
      >
        {/* Dot texture bottom-right */}
        <div
          className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
            maskImage: "radial-gradient(ellipse 70% 70% at 90% 90%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 90% 90%, black 30%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row md:items-start gap-12 md:gap-24">
          {/* Left: heading */}
          <div className="md:w-1/2">
            <FadeIn>
              <h2
                className="font-heading font-bold tracking-tight leading-[1.0]"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#ffffff" }}
              >
                Do you aspire <br />
                to build <span className="italic font-light">peace</span>?
              </h2>
            </FadeIn>
          </div>

          {/* Right: copy + CTA */}
          <div className="md:w-1/2 bg-yellow">
            <FadeIn delay={0.15}>
              <p className="text-base md:text-lg font-light leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
                Say hello and tell us about yourself! We've always grown strategically
                to bring on the right people at the right time. If you think you'd be
                a great fit, tell us why.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <a
                href="/contact"
                className="inline-block px-8 py-4 font-bold rounded-full uppercase tracking-widest text-[12px] transition-all duration-300 bg-white text-[#c2410c] hover:bg-amber-400 hover:text-[#1a1a1a]"
              >
                Contact Us
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section
        data-nav-theme="light"
        className="px-6 sm:px-12 md:px-20 lg:px-32 py-24 md:py-40 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-16">
            <h2
              className="font-heading font-bold tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Current Openings
            </h2>
          </FadeIn>
          <JobListings jobs={jobsData} />
        </div>
      </section>
      <CTASection />
      <Footer companyName="Dialogue Works" />
    </div>
  );
}