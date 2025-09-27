import { COMPANY } from "@/lib/constants/company";

export function buildBlogSchema(slug: string, metadata: {
  title: string;
  author: string;
  date: string;
  coverImage: string;
  description?: string;
  category?: string;
  tags?: string[];
  authorPage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.description ?? "",
    author: {
      "@type": "Person",
      name: metadata.author,
      url: `${COMPANY.url}/doctors/${metadata.authorPage}`,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.url}/${COMPANY.logoWebclip}`,
      },
    },
    datePublished: metadata.date,
    dateModified: metadata.date,
    image: `${COMPANY.url}${metadata.coverImage}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.url}/blog/${slug}`,
    },
    "articleSection": metadata.category,
    "keywords": metadata.tags
  };
}
