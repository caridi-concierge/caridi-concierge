"use client";

import { useState, ReactNode, useEffect } from "react";
import { ChevronRight } from "lucide-react";

type AccordionProps = {
  children: ReactNode;
  className?: string;
};

export function Accordion({ children, className = "" }: AccordionProps) {
  return <div className={`${className}`}>{children}</div>;
}

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
    const [open, setOpen] = useState(defaultOpen);
    
    useEffect(() => {
        setOpen(defaultOpen);
    }, [defaultOpen]);
    
    return (
      <div className="border-b border-gray-300 pb-6 pt-4">
        {/* Header */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="flex w-full items-center justify-between text-left"
        >
          <h3 className="font-fraunces text-lg font-semibold text-outer-space">
            {title}
          </h3>
          <ChevronRight
            className={`w-5 h-5 text-outer-space transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
          />
        </button>
  
        {/* Animated content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-[500px] opacity-100 translate-y-0 mt-3" : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="space-y-4 text-sm text-outer-space/80">
            {children}
          </div>
        </div>
      </div>
    );
  }