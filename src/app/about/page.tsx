import AboutHero from "@/features/about/components/about-hero";
import AboutDetails from "@/features/about/components/about-details";
import ImageGallery from "@/features/about/components/image-gallery";
import TeamSection from "@/features/about/components/team-section";
import CTASection from "@/components/layout/cta-section";
import { Footer } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dialogue Works • Our History & Mission",
  description: "Learn about our 10+ year commitment to building peace, resilience, and inclusive governance across Africa through community-driven dialogue.",
};

export default function AboutPage() {
  return (
    <div className="antialiased bg-[#f7f7f9] text-primary font-body overflow-hidden">
      <main>
        <AboutHero />
        <AboutDetails />
        <TeamSection />
        <CTASection />
      </main>
      <div className="-mt-[var(--footer-gap,0px)] [&>footer]:mt-0">
        <Footer companyName="Dialogue Works" />
      </div>
    </div>
  );
}