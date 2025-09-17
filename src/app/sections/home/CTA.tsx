"use client";

import Button from "@/components/SecondaryButton";

export default function CTA() {
  return (
    <section className="bg-outer-space py-20">
      <div className="container mx-auto text-center space-y-6">
        <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-alabaster">
          Modern beauty, made effortless.
        </h2>
        <p className="text-alabaster/90 max-w-xl mx-auto">
          Personalized Botox and filler treatments that restore balance, volume,
          and confidence.
        </p>
        <div className="pt-6">
          <Button
            href="/book"
            variant="secondary"
          >
            Book a Visit
          </Button>
        </div>
      </div>
    </section>
  );
}
