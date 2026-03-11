import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';

const workDirectory = path.join(process.cwd(), '/content/work');

export async function getAllWork() {
  const fileNames = fs.readdirSync(workDirectory);
  const projects = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const fullPath = path.join(workDirectory, fileName);
        const source = fs.readFileSync(fullPath, 'utf8');
        const { frontmatter } = await bundleMDX({ source });
        
        return {
          slug: fileName.replace(/\.mdx$/, ''),
          ...frontmatter,
        };
      })
  );

  return projects.sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}

export async function getWorkBySlug(slug: string) {
  const fullPath = path.join(workDirectory, `${slug}.mdx`);
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
