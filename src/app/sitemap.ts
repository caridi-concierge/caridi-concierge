import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Paths
const blogDir = path.join(process.cwd(), "src/content/blog");

// Static pages
const staticPages = [
  "",
  "about",
  "contact",
  "privacy-policy",
  "products",
  // "book", excluded because it redirects externally
];

// Treatments (index + details)
const treatments = [
  "treatments",
  "treatments/wrinkle-reduction",
  "treatments/dermal-fillers",
  "treatments/biostimulatory-fillers",
];

// Staff (index + known slugs)
const staff = [
  "staff",
  "staff/cristina-caridi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.caridiconcierge.com";

  // Static pages
  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
  }));

  // Treatments
  const treatmentUrls = treatments.map((t) => ({
    url: `${baseUrl}/${t}`,
    lastModified: new Date(),
  }));

  // Staff
  const staffUrls = staff.map((s) => ({
    url: `${baseUrl}/${s}`,
    lastModified: new Date(),
  }));

  // Blog posts
  const blogFiles = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  const blogUrls = blogFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(blogDir, file);
    const source = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(source);

    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: data.date ? new Date(data.date) : new Date(),
    };
  });

  // Blog index
  const blogIndex = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
  ];

  return [...staticUrls, ...treatmentUrls, ...staffUrls, ...blogIndex, ...blogUrls];
}
