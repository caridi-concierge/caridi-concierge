import type { NextConfig } from "next";
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/, // support .md and .mdx
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],

  async redirects() {
    return [
      {
        source: "/post/:slug*",        // old Webflow-style URL
        destination: "/blog/:slug*",   // new clean URL
        permanent: true,               // 301
      },
      {
        source: "/doctors/:slug*",        // old Webflow-style URL
        destination: "/staff/:slug*",   // new clean URL
        permanent: true,               // 301
      },
    ];
  },
};

export default withMDX(nextConfig);
