import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/PrimaryButton';
import { InstagramEmbed } from '@/components/SocialEmbed';

// This file is required when using @next/mdx in the app directory
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: ComponentPropsWithoutRef<"h1">) => (
      <h1
        className="font-display font-light text-[34px] sm:text-[38px] leading-[1.1] tracking-[-0.01em] text-ink mt-14 mb-6"
        {...props}
      />
    ),
    h2: (props: ComponentPropsWithoutRef<"h2">) => (
      <h2
        className="font-display font-light text-[28px] sm:text-[32px] leading-[1.15] tracking-[-0.005em] text-ink mt-14 mb-5"
        {...props}
      />
    ),
    h3: (props: ComponentPropsWithoutRef<"h3">) => (
      <h3
        className="font-display font-normal text-[22px] sm:text-[24px] leading-[1.2] text-ink mt-10 mb-4"
        {...props}
      />
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
      <p
        className="font-body text-[16px] sm:text-[17px] leading-[1.75] font-light text-ink/80 mb-6"
        {...props}
      />
    ),
    ul: (props: ComponentPropsWithoutRef<"ul">) => (
      <ul
        className="my-6 space-y-3 pl-0 list-none [&>li]:relative [&>li]:pl-7 [&>li]:before:content-[''] [&>li]:before:absolute [&>li]:before:left-1.5 [&>li]:before:top-[0.72em] [&>li]:before:w-2 [&>li]:before:h-2 [&>li]:before:rounded-full [&>li]:before:bg-brass"
        {...props}
      />
    ),
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
      <ol
        className="my-6 space-y-3 list-decimal list-outside pl-6 marker:text-brass marker:font-body marker:text-[14px] marker:font-medium"
        {...props}
      />
    ),
    li: (props: ComponentPropsWithoutRef<"li">) => (
      <li
        className="font-body text-[16px] sm:text-[17px] leading-[1.75] font-light text-ink/80"
        {...props}
      />
    ),
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className="my-10 border-l-2 border-brass pl-6 font-display font-light italic text-[20px] sm:text-[22px] leading-[1.5] text-ink"
        {...props}
      />
    ),
    code: (props: ComponentPropsWithoutRef<"code">) => (
      <code
        className="px-1.5 py-0.5 bg-ivory-2 text-ink font-mono text-[14px] border border-line"
        {...props}
      />
    ),
    pre: (props: ComponentPropsWithoutRef<"pre">) => (
      <pre
        className="my-8 p-5 bg-teal-deep text-ivory font-mono text-[13px] leading-[1.6] overflow-x-auto"
        {...props}
      />
    ),
    table: (props: ComponentPropsWithoutRef<"table">) => (
      <div className="my-10 overflow-x-auto">
        <table className="min-w-full border-collapse" {...props} />
      </div>
    ),
    thead: (props: ComponentPropsWithoutRef<"thead">) => (
      <thead className="border-y border-line" {...props} />
    ),
    tbody: (props: ComponentPropsWithoutRef<"tbody">) => <tbody {...props} />,
    tr: (props: ComponentPropsWithoutRef<"tr">) => (
      <tr className="border-b border-line" {...props} />
    ),
    th: (props: ComponentPropsWithoutRef<"th">) => (
      <th
        className="px-4 py-3 text-left font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55"
        {...props}
      />
    ),
    td: (props: ComponentPropsWithoutRef<"td">) => (
      <td
        className="px-4 py-3 font-body text-[15px] leading-[1.6] text-ink/80 font-light"
        {...props}
      />
    ),
    figure: (props: ComponentPropsWithoutRef<"figure">) => (
      <figure className="my-10" {...props} />
    ),
    figcaption: (props: ComponentPropsWithoutRef<"figcaption">) => (
      <figcaption
        className="mt-3 text-center font-body text-[12px] leading-[1.6] text-ink/55 italic px-4"
        {...props}
      />
    ),
    strong: (props: ComponentPropsWithoutRef<"strong">) => (
      <strong className="text-ink font-medium" {...props} />
    ),
    em: (props: ComponentPropsWithoutRef<"em">) => (
      <em className="italic" {...props} />
    ),
    a: (props: ComponentPropsWithoutRef<"a">) => (
      <a
        className="text-brass underline underline-offset-2 decoration-brass/40 hover:decoration-brass hover:text-ink transition-colors duration-200"
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
          alt={alt || ""}
          width={typeof width === "number" ? width : 800}
          height={typeof height === "number" ? height : 600}
          className="w-full my-10 bg-bone"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 720px"
          style={{ filter: "saturate(0.9)" }}
          {...rest}
        />
      );
    },
    PrimaryButton: (props: ComponentPropsWithoutRef<typeof PrimaryButton>) => (
      <PrimaryButton {...props} />
    ),
    InstagramEmbed: (props: ComponentPropsWithoutRef<typeof InstagramEmbed>) => (
      <InstagramEmbed {...(props)} />
    ),
    ...components,
  };
}
