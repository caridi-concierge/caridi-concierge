"use client";

import Button from "@/components/SecondaryButton";

export default function CTA() {
  return (
    <section className="bg-merino py-20">
      <div className="container mx-auto bg-outer-space rounded-2xl px-8 py-16 text-center space-y-6">
        <h2 className="font-fraunces text-7xl md:text-7xl text-alabaster">
          Modern beauty, made effortless.
        </h2>
        <p className="text-alabaster/90 text-lg max-w-xl mx-auto">
          Personalized Botox and filler treatments that restore balance,
          volume, and confidence.
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
