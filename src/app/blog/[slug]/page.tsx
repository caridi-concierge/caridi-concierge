import fs from "fs";
import path from "path";
import BlogPostHeroSection from "@/app/sections/blog/BlogPostHero";
import BlogPostBodySection from "@/app/sections/blog/BlogPostBody";

// Absolute path to your MDX posts
const postsDir = path.join(process.cwd(), "src/content/blog");

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const PostModule = await import(`@/content/blog/${slug}.mdx`);
  const { metadata } = PostModule;
  const PostContent = PostModule.default;

  return (
    <article>
      <BlogPostHeroSection
        title={metadata.title}
        author={metadata.author}
        date={metadata.date}
        coverImage={metadata.coverImage}
      />
      <BlogPostBodySection>
        <PostContent />
      </BlogPostBodySection>
    </article>
  );
}