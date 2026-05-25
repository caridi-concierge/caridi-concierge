"use client";

import { useState, ReactNode, useEffect } from "react";
import IconPlus from "@/components/icons/IconPlus";

type AccordionProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Editorial accordion. Hairline-divided rows; Cormorant title; brass plus icon.
 * The first item gets a top hairline; every item gets a bottom hairline.
 */
export function Accordion({ children, className = "" }: AccordionProps) {
  return (
    <div
      className={`border-t border-line [&>*]:border-b [&>*]:border-line ${className}`}
    >
      {children}
    </div>
  );
}

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors duration-200 hover:text-brass"
      >
        <h3 className="font-display font-normal text-xl sm:text-[22px] leading-[1.2] text-ink">
          {title}
        </h3>
        <IconPlus open={open} className="w-4 h-4 shrink-0 text-brass" />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[600px] opacity-100 pb-7" : "max-h-0 opacity-0"
        }`}
      >
        <div className="font-body text-[14px] leading-[1.8] text-ink/70 max-w-[640px]">
          {children}
        </div>
      </div>
    </div>
  );
}
