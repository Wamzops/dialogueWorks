import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import MDXContent from '@/features/blog/components/mdx-content';
import Image from 'next/image';
import CTASection from '@/components/layout/cta-section';
import { Footer } from '@/components/ui';
import FadeIn from '@/components/FadeIn';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { frontmatter, code } = post;

  return (
  <div className="antialiased bg-[#f7f7f9] text-primary font-body">
      <main className="pt-48 pb-32 md:pb-64">
        <div className="px-6 sm:px-12 md:px-20 lg:px-32 max-w-7xl mx-auto">
          <header className="mb-24 md:mb-48">
            <FadeIn direction="down" className="mb-10 text-center">
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-secondary">
                {frontmatter.date} • {frontmatter.author}
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1} className="text-center">
              <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-medium tracking-tighter leading-[0.9] h-auto italic-none mb-24 max-w-5xl mx-auto">
                  {frontmatter.title}
              </h1>
            </FadeIn>
            
            {frontmatter.image && (
              <FadeIn delay={0.2}>
                <div className="aspect-[21/9] relative rounded-3xl overflow-hidden shadow-2xl mb-24">
                  <Image
                    src={frontmatter.image}
                    alt={frontmatter.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>
            )}
          </header>

          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.3}>
              <article className="prose prose-xl prose-primary prose-headings:font-heading prose-headings:font-medium prose-p:font-body prose-li:font-body prose-p:text-gray-500 prose-p:leading-relaxed">
                <MDXContent code={code} />
              </article>
            </FadeIn>
          </div>
        </div>
      </main>

      <CTASection />
      <Footer companyName="Dialogue Works" />
    </div>
  );
}
