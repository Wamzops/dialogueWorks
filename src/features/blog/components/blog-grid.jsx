import BlogCard from "./blog-card";
import FadeIn from "@/components/FadeIn";

const BlogGrid = ({ posts, showAllContent = false }) => {
  if (!posts || posts.length === 0) return null;

  const displayedPosts = showAllContent ? posts : posts.slice(0, 10);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto space-y-32 md:space-y-64 pb-32">
        {displayedPosts.map((post, i) => (
          <FadeIn key={post.slug || post.id} delay={0.1 * (i % 3)}>
            <BlogCard post={post} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
