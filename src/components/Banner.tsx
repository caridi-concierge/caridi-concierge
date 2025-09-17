"use client";

import Image from "next/image";

interface BannerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Banner({
  src,
  alt,
  width = 1920,
  height = 600,
  className = "",
}: BannerProps) {
  return (
    <section className="bg-merino py-8">
      <div className="mx-auto w-[90%] max-w-7xl">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto object-cover shadow-card ${className}`}
          priority
        />
      </div>
    </section>
  );
}
