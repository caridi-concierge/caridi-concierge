import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "src/content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  author: string;
  date: string;
  updatedDate?: string;
  coverImage?: string;
  description?: string;
  tags?: string[];
  category?: string;
  authorPage?: string;
};

// Get all posts (metadata only)
export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const mod = await import(`@/content/blog/${file}`);
      return {
        slug,
        ...(mod.metadata as Omit<BlogPostMeta, "slug">),
      };
    })
  );

  // Sort newest → oldest
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

// Get a single post by slug (metadata + content)
export async function getPostBySlug(slug: string) {
  const mod = await import(`@/content/blog/${slug}.mdx`);
  return {
    slug,
    metadata: mod.metadata,
    Content: mod.default,
  };
}
