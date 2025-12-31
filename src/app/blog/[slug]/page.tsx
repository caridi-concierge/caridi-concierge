import { notFound } from "next/navigation";
import BlogPostHeroSection from "@/app/sections/blog/BlogPostHero";
import BlogPostBodySection from "@/app/sections/blog/BlogPostBody";
import { getAllPosts, getPostBySlug } from "@/lib/blogs/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLD";
import { buildBlogSchema } from "@/lib/blogs/schema";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug)
  
  return createPageMetadata({
    title: post.metadata.title,
    description: post.metadata.description,
    path: `/blog/${slug}`,
    keywords: post.metadata.tags,
  })
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const { metadata, Content } = post;
  const blogSchema = buildBlogSchema(slug, metadata);

  return (
    <>
      <JsonLd schema={blogSchema} />
      <Navbar />  
      <BlogPostHeroSection
        title={metadata.title}
        author={metadata.author}
        date={new Date(metadata.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        updatedDate={metadata.updatedDate ? new Date(metadata.updatedDate).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        }) : undefined}
        coverImage={metadata.coverImage}
      />
      <BlogPostBodySection>
        <Content />
      </BlogPostBodySection>
      <Footer />
    </>
  );
}
