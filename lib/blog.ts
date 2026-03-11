import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';

const postsDirectory = path.join(process.cwd(), '/content/blog');

export async function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const source = fs.readFileSync(fullPath, 'utf8');
        const { frontmatter } = await bundleMDX({ source });
        
        return {
          slug: fileName.replace(/\.mdx$/, ''),
          ...frontmatter,
        };
      })
  );

  return posts.sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const source = fs.readFileSync(fullPath, 'utf8');
  
  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      return options;
    },
  });

  return {
    slug,
    frontmatter,
    code,
  };
}
