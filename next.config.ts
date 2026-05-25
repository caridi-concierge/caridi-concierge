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
        source: "/products",      // retired page; preserve SEO equity
        destination: "/treatments",
        permanent: true,          // 301
      },
    ];
  },
};

export default withMDX(nextConfig);
