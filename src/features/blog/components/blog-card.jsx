import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const BlogCard = ({ post }) => {
  if (!post) return null;

  return (
    <div className="w-full mb-32 md:mb-48 group">
      <Link
        href={`/blog/${post.slug}`}
        className="block overflow-hidden relative rounded-2xl md:rounded-3xl shadow-2xl shadow-black/5 hover:shadow-black/15 transition-all duration-700 aspect-[16/9]"
      >
        <Image
          className="block w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          src={post.image}
          alt={post.title}
          fill
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[20px] scale-[0.8] mix-blend-overlay"></div>
      </Link>

      <div className="mt-12 md:mt-20 max-w-4xl mx-auto text-center px-4">
        {post.category && (
          <FadeIn direction="down" className="mb-6">
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-secondary">
              {post.category}
            </span>
          </FadeIn>
        )}

        <Link href={`/blog/${post.slug}`} className="inline-block relative">
          <h3 className="text-3xl md:text-5xl lg:text-7xl font-medium text-primary-dark tracking-tighter leading-none mb-8 hover:italic transition-all duration-300">
            {post.title}
          </h3>
          <div className="w-0 h-[3px] bg-secondary absolute -bottom-2 left-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
        </Link>

        {post.excerpt && (
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto mt-6">
              {post.excerpt.length > 150
                ? `${post.excerpt.substring(0, 150)}...`
                : post.excerpt}
            </p>
          </FadeIn>
        )}

        <FadeIn delay={0.3} className="mt-12">
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-bold uppercase tracking-[0.2em] text-primary border-b-2 border-primary pb-2 hover:text-secondary hover:border-secondary transition-all"
          >
            Read Perspective →
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};

export default BlogCard;
