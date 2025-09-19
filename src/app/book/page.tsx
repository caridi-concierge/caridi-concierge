// src/app/book/page.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import PrimaryButton from "@/components/PrimaryButton";

export default function BookingRedirectPage() {
  useEffect(() => {
    // redirect immediately
    window.location.href = COMPANY.bookingUrl;
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-merino px-4 text-center">
      <Image
        src={COMPANY.logo}
        alt="Caridi Concierge logo. Overlapping C's in dark text."
        width={280}
        height={80}
        priority
      />

      <h2 className="mt-6 text-2xl font-semibold">
        Redirecting to our booking page…
      </h2>

      <p className="mt-4 text-gray-600">
        If you are not redirected automatically, click below:
      </p>
      <br />
      <PrimaryButton
        href={COMPANY.bookingUrl}
        variant="primary"
      >
        Book
      </PrimaryButton>
    </div>
  );
}
