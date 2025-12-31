import { COMPANY } from "@/lib/constants/company";

export function buildBlogSchema(slug: string, metadata: {
  title: string;
  author: string;
  date: string;
  updatedDate?: string;
  coverImage: string;
  description?: string;
  category?: string;
  tags?: string[];
  authorPage?: string;
}) {
  const canonicalUrl = `${COMPANY.url}/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogpost`, 
    headline: metadata.title,
    description: metadata.description ?? "",
    url: canonicalUrl,
    inLanguage: "en-US",
    author: metadata.author.includes("Caridi")
      ? { "@id": `${COMPANY.url}/#dr-cristina-caridi` }
      : {
          "@type": "Person",
          "name": metadata.author,
          "url": `${COMPANY.url}/${metadata.authorPage}`,
        },
    publisher: { "@id": `${COMPANY.url}/#organization` },
    datePublished: metadata.date,
    dateModified: metadata.updatedDate ?? metadata.date,
    image: `${COMPANY.url}${metadata.coverImage}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    "articleSection": metadata.category ?? "Aesthetics",
    "keywords": metadata.tags ?? [],
    "potentialAction": {
      "@type": "ReadAction",
      "target": canonicalUrl,
    },
  };
}
