import CTASection from '@/components/layout/cta-section';
import { Footer } from '@/components/ui';
import StatsSection from '@/features/home/components/stats-section';
import CommitmentSection from '@/features/home/components/commitment-section';
import FAQSection from '@/features/home/components/faq-section';
import TestimonialCarousel from '@/features/home/components/testimonial-carousel';
import { Metadata } from 'next';
import Intro_Hero from '@/features/home/components/intro_hero';
import Mission from '@/features/home/components/mission';
import Features from '@/features/home/components/features';
import OfferingsSection from '@/features/home/components/offerings-section';

export const metadata: Metadata = {
  title: 'Dialogue Works • Peace through Perspective',
};

export default function HomePage() {
  return (
  <div className="antialiased font-body">
      <Intro_Hero/>
    </div>
  );
}
