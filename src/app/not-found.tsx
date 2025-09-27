"use client";

import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";

export const metadata = {
    title: "Page Not Found | Caridi Concierge",
    description: "Caridi Concierge - Page Not Found.",
    robots: "noindex, nofollow",
  };

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-merino text-outer-space px-6 text-center">
      <Image
        src="/images/caridi_concierge_flat_logo.svg"
        alt="Caridi Concierge logo"
        width={200}
        height={60}
        className="mb-6"
      />
      <h1 className="font-fraunces text-3xl md:text-4xl mb-4">
        Page Not Found
      </h1>
      <p className="text-sm md:text-base mb-8 max-w-md">
        The page you are looking for doesn&apos;t exist or may have been moved.
      </p>
      <PrimaryButton 
        href="/"
        className="transition"
        variant="primary"
      >
        Back Home
      </PrimaryButton>
    </main>
  );
}