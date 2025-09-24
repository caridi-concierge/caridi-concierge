"use client";

import { MDXProvider } from "@mdx-js/react";
import type { ComponentPropsWithoutRef } from "react";

const components = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-2xl font-bold my-4" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-4 text-outer-space/80" {...props} />
  ),
};

export function Providers({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}