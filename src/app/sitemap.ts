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
  "book",
];

// Treatments (index + details)
const treatments = [
  "treatments",
  "treatments/wrinkle-reduction",
  "treatments/dermal-fillers",
  "treatments/biostimulatory-fillers",
];

// Doctors (index + known slugs)
const doctors = [
  "doctors",
  "doctors/cristina-caridi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://caridiconcierge.com";

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

  // Doctors
  const doctorUrls = doctors.map((d) => ({
    url: `${baseUrl}/${d}`,
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

  return [...staticUrls, ...treatmentUrls, ...doctorUrls, ...blogIndex, ...blogUrls];
}
