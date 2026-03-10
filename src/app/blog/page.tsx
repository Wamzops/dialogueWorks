import { getAllPosts } from '@/lib/blog';
import BlogGrid from '@/features/blog/components/blog-grid';
import CTASection from '@/components/layout/cta-section';
import { Footer } from '@/components/ui';
import FadeIn from '@/components/FadeIn';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
  <div className="antialiased bg-[#f7f7f9] text-primary font-body pt-32 md:pt-64">
      <section className="px-6 sm:px-12 md:px-20 lg:px-32 mb-32 md:mb-64">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="down" className="mb-12">
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-secondary">
              PERSPECTIVES • WORK • CASE STUDIES
            </span>
          </FadeIn>
          
          <FadeIn delay={0.2} className="mb-24">
            <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-medium tracking-tighter leading-[0.85] h-auto italic-none">
              Explore <br /> 
              our <span className="italic font-light">latest</span> projects.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-xl md:text-xl font-light text-primary/60 max-w-2xl leading-relaxed italic">
                From electoral support to inclusive governance, we bring perspective to every challenge through our extensive experience and expertise.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Large Scale Blog Grid */}
      <section className="px-6 md:px-12 lg:px-24">
        <BlogGrid posts={posts} showAllContent={true} />
      </section>

      <CTASection />
      <Footer companyName="Dialogue Works" />
    </div>
  );
}