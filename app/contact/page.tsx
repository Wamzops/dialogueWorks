import ContactHero from '@/features/contact/components/contact-hero';
import CTASection from '@/components/layout/cta-section';
import { Footer } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Dialogue Works • Let\'s Talk Peace',
  description: 'Connect with our team to explore peacebuilding initiatives, research, and community dialogue opportunities across Africa.',
};

export default function ContactPage() {
  return (
  <div className="antialiased bg-[#f7f7f9] text-primary font-body">
      <main>
        <ContactHero />
        <CTASection />
        <Footer companyName="Dialogue Works" />
      </main>
    </div>
  );
}