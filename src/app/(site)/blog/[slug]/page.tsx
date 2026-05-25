import { notFound } from "next/navigation";
import BlogPostHeroSection from "@/app/(site)/blog/_sections/BlogPostHero";
import BlogPostBodySection from "@/app/(site)/blog/_sections/BlogPostBody";
import BlogPostRelated from "@/app/(site)/blog/_sections/BlogPostRelated";
import { getAllPosts, getPostBySlug } from "@/lib/blogs/posts";
import { resolveRelatedPosts, resolveRelatedTreatment } from "@/lib/blogs/related";
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
    image: post.metadata.coverImage,
    imageAlt: post.metadata.title,
    keywords: post.metadata.tags,
  })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const { metadata, Content } = post;
  const blogSchema = buildBlogSchema(slug, metadata);

  const currentMeta = { ...metadata, slug };
  const [relatedPosts, relatedTreatment] = await Promise.all([
    resolveRelatedPosts(currentMeta, 3),
    Promise.resolve(resolveRelatedTreatment(currentMeta)),
  ]);

  return (
    <>
      <JsonLd schema={blogSchema} />
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
      <BlogPostRelated treatment={relatedTreatment} posts={relatedPosts} />
    </>
  );
}
