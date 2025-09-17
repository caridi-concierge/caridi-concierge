"use client";

import Image from "next/image";
import Button from "@/components/SecondaryButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-merino text-outer-space py-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left text content */}
        <div className="w-full md:basis-2/3 md:flex-none space-y-6">
          <h1 className="font-fraunces text-4xl md:text-5xl leading-tight">
            Premium In-Home Botox &amp; Filler Treatments Across NYC
          </h1>
          <h2 className="font-fraunces text-lg md:text-xl text-outer-space/80 leading-relaxed">
            Private, physician-led care that blends science with artistry.  
            I tailor every treatment to your features, creating natural results in your own setting.
          </h2>
          <div className="flex justify-center md:justify-center">
            <Button href="/book" variant="secondary">
              Book a Visit
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full md:basis-1/3 md:flex-none flex flex-col items-center text-center">
          <Image
            src="/images/cc_headshot_white_outside_hq_800px.jpg"
            alt="Dr Caridi delivers high-quality aesthetic care in the comfort and privacy of your home. Book your tailored experience today."
            width={256}
            height={256}
            className="rounded-xl shadow-lg"
          />
          <div className="mt-4 font-fraunces text-lg">Dr. Cristina Caridi</div>
        </div>
      </div>
    </section>
  );
}