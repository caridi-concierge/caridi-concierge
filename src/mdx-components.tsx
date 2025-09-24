import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';

// This file is required when using @next/mdx in the app directory
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: ComponentPropsWithoutRef<"h1">) => (
      <h1 className="text-3xl font-bold my-6" {...props} />
    ),
    h2: (props: ComponentPropsWithoutRef<"h2">) => (
      <h2 className="text-2xl font-bold my-4" {...props} />
    ),
    h3: (props: ComponentPropsWithoutRef<"h3">) => (
      <h3 className="text-xl font-semibold my-3" {...props} />
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
      <p className="mb-4 text-outer-space/80" {...props} />
    ),
    ul: (props: ComponentPropsWithoutRef<"ul">) => (
      <ul className="list-disc ml-6 mb-4 space-y-1" {...props} />
    ),
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
      <ol className="list-decimal ml-6 mb-4 space-y-1" {...props} />
    ),
    li: (props: ComponentPropsWithoutRef<"li">) => (
      <li className="text-outer-space/80" {...props} />
    ),
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600" {...props} />
    ),
    code: (props: ComponentPropsWithoutRef<"code">) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props} />
    ),
    pre: (props: ComponentPropsWithoutRef<"pre">) => (
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-4" {...props} />
    ),
    ...components,
  };
}