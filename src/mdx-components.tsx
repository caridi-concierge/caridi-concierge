import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

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
      <p className="mb-6 text-outer-space/80" {...props} />
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
    table: (props: ComponentPropsWithoutRef<"table">) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-gray-300" {...props} />
      </div>
    ),
    thead: (props: ComponentPropsWithoutRef<"thead">) => (
      <thead className="bg-gray-50" {...props} />
    ),
    tbody: (props: ComponentPropsWithoutRef<"tbody">) => (
      <tbody {...props} />
    ),
    tr: (props: ComponentPropsWithoutRef<"tr">) => (
      <tr className="border-b border-gray-200 hover:bg-gray-50" {...props} />
    ),
    th: (props: ComponentPropsWithoutRef<"th">) => (
      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-r border-gray-300 last:border-r-0" {...props} />
    ),
    td: (props: ComponentPropsWithoutRef<"td">) => (
      <td className="px-4 py-3 text-outer-space/80 border-r border-gray-300 last:border-r-0" {...props} />
    ),
    figure: (props: ComponentPropsWithoutRef<"figure">) => (
      <figure className="my-8" {...props} />
    ),
    figcaption: (props: ComponentPropsWithoutRef<"figcaption">) => (
      <figcaption className="text-center text-sm text-gray-600 mt-3 italic px-4" {...props} />
    ),
    a: (props: ComponentPropsWithoutRef<"a">) => (
      <a
        className="text-blue-600 hover:text-carnation underline underline-offset-2 transition-colors"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      />
    ),
    img: (props: ComponentPropsWithoutRef<"img">) => {
      const { src, alt, width, height, ...rest } = props;
      
      return (
        <Image 
          src={src as string} 
          alt={alt || ''}
          width={typeof width === 'number' ? width : 800}
          height={typeof height === 'number' ? height : 600}
          className="w-full rounded-lg shadow-sm"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          {...rest}
        />
      );
    },
    ...components,
  };
}