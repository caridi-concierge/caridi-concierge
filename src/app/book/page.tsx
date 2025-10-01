"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { COMPANY } from "@/lib/constants/company";
import PrimaryButton from "@/components/PrimaryButton";

export default function BookingRedirectPage() {
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (!hasRedirected.current) {
      hasRedirected.current = true;
      window.location.replace(COMPANY.bookingUrl);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-merino px-4 text-center">
      <Image
        src={COMPANY.logo}
        alt="Caridi Concierge. Concierge botox and filler across NYC."
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
