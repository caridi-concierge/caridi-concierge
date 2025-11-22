"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

interface PromoBannerProps {
  text: string;
  linkText: string;
  linkHref: string;
  bgColor?: string;
  textColor?: string;
  dismissible?: boolean;
}

export default function PromoBanner({
  text,
  linkText,
  linkHref,
  bgColor = "bg-outer-space",
  textColor = "text-white",
  dismissible = true,
}: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={`${bgColor} ${textColor} py-2 px-4 relative`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-fraunces md:text-base">
        <span className="text-center">
          {text}{" "}
          <Link
            href={linkHref}
            className="pl-2 underline hover:opacity-80 transition-opacity"
          >
            {linkText}
          </Link>
        </span>
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}