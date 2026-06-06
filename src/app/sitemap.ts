import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blogs/posts";

const baseUrl = "https://www.caridiconcierge.com";

// Explicit last-significant-change dates (YYYY-MM-DD), maintained by hand.
//
// lastmod is a freshness *hint* that search engines verify against the page.
// Bump a page's date only when its main content, structured data, or meaningful
// links change — never for a deploy, a dependency bump, or a shared-chrome
// (navbar/footer) edit. Stamping every page on every deploy (the old
// `new Date()`) trains search engines to distrust and ignore the field, so keep
// these honest.
//
// Seeded from each page's last git commit; adjust any that don't reflect a real
// content change. Blog posts are intentionally absent — their lastmod is derived
// from each post's `updatedDate ?? date` metadata below.
const pages: { path: string; lastModified: string }[] = [
  // Top-level pages
  { path: "", lastModified: "2026-05-25" },
  { path: "about", lastModified: "2026-05-25" },
  { path: "contact", lastModified: "2026-05-25" },
  { path: "privacy-policy", lastModified: "2026-05-25" },
  // "book" is intentionally excluded — it redirects externally.

  // Locations (index + details)
  { path: "locations", lastModified: "2026-05-25" },
  { path: "locations/gowanus", lastModified: "2026-05-25" },
  { path: "locations/in-home", lastModified: "2026-05-25" },
  { path: "locations/red-hook", lastModified: "2026-05-25" },

  // Treatments (index + details)
  { path: "treatments", lastModified: "2026-05-25" },
  { path: "treatments/wrinkle-reduction", lastModified: "2026-05-25" },
  { path: "treatments/dermal-fillers", lastModified: "2026-05-25" },
  { path: "treatments/biostimulatory-fillers", lastModified: "2026-05-25" },
  { path: "treatments/chemical-peels", lastModified: "2026-05-25" },
  { path: "treatments/consult", lastModified: "2026-05-25" },

  // Staff (index + profiles)
  { path: "staff", lastModified: "2026-05-25" },
  { path: "staff/cristina-caridi", lastModified: "2026-05-24" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls = pages.map(({ path, lastModified }) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(lastModified),
  }));

  // Blog posts carry real dates in their exported metadata: `updatedDate` is the
  // last significant edit, `date` the original publish date. Prefer the edit
  // date. Read via getAllPosts (the canonical reader) — these MDX files export
  // `metadata`, so YAML-frontmatter parsing would find nothing.
  const posts = await getAllPosts();
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate ?? post.date),
  }));

  // The blog index changes when a post is published or updated — use the most
  // recent post date so its lastmod stays accurate without faking freshness.
  const newestPost = blogPosts
    .map((p) => p.lastModified)
    .sort((a, b) => b.getTime() - a.getTime())[0];
  const blogIndex: MetadataRoute.Sitemap[number] = { url: `${baseUrl}/blog` };
  if (newestPost) blogIndex.lastModified = newestPost;

  return [...staticUrls, blogIndex, ...blogPosts];
}
