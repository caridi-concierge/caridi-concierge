import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/_next/", "/api/"],
        allow: "/",
      },
      {userAgent: "MJ12bot", disallow: "/"},
      {userAgent: "DotBot", disallow: "/"},
      {userAgent: "Baiduspider", disallow: "/"},
      {userAgent: "Sogou", disallow: "/"},
      {userAgent: "MegaIndex", disallow: "/"},
      {userAgent: "BLEXBot", disallow: "/"},
      {userAgent: "UptimeRobot", disallow: "/"},
      {userAgent: "ScreamingFrog", disallow: "/"},
      {userAgent: "HTTrack", disallow: "/"},
      {userAgent: "SiteSucker", disallow: "/"},
    ],
    sitemap: "https://www.caridiconcierge.com/sitemap.xml",
  };
}
