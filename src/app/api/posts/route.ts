import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

function parseFrontmatter(content: string) {
  const fmMatch = content.match(/---\s*([\s\S]*?)\s*---/);
  if (!fmMatch) return {};
  const fm = fmMatch[1];
  const lines = fm.split(/\r?\n/);
  const result: Record<string, string> = {};
  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    // strip surrounding quotes if present
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    result[key] = val;
  }
  return result;
}

export async function GET(request: Request) {
  try {
    const limitParam = new URL(request.url).searchParams.get('limit');
    const limit = limitParam ? parseInt(limitParam, 10) : undefined;
    const contentDir = path.join(process.cwd(), 'content', 'blog');
    if (!fs.existsSync(contentDir)) {
      return NextResponse.json({ posts: [] });
    }
    const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'));
    const posts = files.map((file) => {
      const slug = file.replace(/\.mdx?$/, '');
      const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');
      const fm = parseFrontmatter(raw);
      return {
        slug,
        title: fm.title || slug,
        date: fm.date || null,
        excerpt: fm.excerpt || null,
        client: fm.client || null,
      };
    });

    // sort by date desc when possible
    posts.sort((a, b) => {
      if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (a.date) return -1;
      if (b.date) return 1;
      return 0;
    });

    const result = limit ? posts.slice(0, limit) : posts;
    return NextResponse.json({ posts: result });
  } catch (err) {
    return NextResponse.json({ posts: [], error: String(err) }, { status: 500 });
  }
}
