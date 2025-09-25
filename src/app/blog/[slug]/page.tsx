import { notFound } from "next/navigation";
import BlogPostHeroSection from "@/app/sections/blog/BlogPostHero";
import BlogPostBodySection from "@/app/sections/blog/BlogPostBody";
import { getAllPosts, getPostBySlug } from "@/lib/blogs/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const { metadata, Content } = post;

  return (
    <>
      <Navbar />  
      <BlogPostHeroSection
        title={metadata.title}
        author={metadata.author}
        date={metadata.date}
        coverImage={metadata.coverImage}
      />
      <BlogPostBodySection>
        <Content />
      </BlogPostBodySection>
      <Footer />
    </>
  );
}
