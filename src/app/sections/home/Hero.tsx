"use client";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import Container from "@/components/Container";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-outer-space flex-shrink-0 mt-1"
    fill="none"
    strokeWidth="2"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default function HeroSection() {
  return (
    <section id="home" className="bg-merino text-outer-space py-16">
      <Container className="container mx-auto space-y-8">
        {/* Top Row: Text + Image */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left text content */}
          <div className="w-full md:basis-2/3 md:flex-none space-y-6">
            <p className="font-fraunces text-lg md:text-xl text-outer-space/80 leading-relaxed">
              For Busy New Yorkers Who Value Privacy & Results
            </p>
            <h1 className="font-fraunces text-4xl md:text-5xl leading-tight">
              Premium In-Home Botox &amp; Filler Treatments Across NYC
            </h1>
            <h2 className="font-fraunces text-lg md:text-xl text-outer-space/80 leading-relaxed">
              Physician-led aesthetic care delivered to your door. Get natural,
              refreshed results without the clinical wait. Private appointments
              across all five boroughs.
            </h2>
            <div className="flex gap-4 justify-center md:justify-center">
              <PrimaryButton href="/book" variant="secondary" id="hero-booking-cta">
                Schedule a Consult
              </PrimaryButton>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full md:basis-1/3 md:flex-none flex flex-col items-center text-center">
            <Image
              src="/images/cc_headshot_white_outside_hq_800px.webp"
              alt="Dr Caridi delivers high-quality aesthetic care in the comfort and privacy of your home. Book your tailored experience today."
              width={800}
              height={800}
              className="rounded-xl shadow-lg sm:w-[150px] md:w-[256px] h-auto"
            />
            <div className="mt-4 font-fraunces text-lg">Dr. Cristina Caridi</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-md pt-5 text-outer-space/70 font-fraunces">
          <span>Private & Convenient</span>
          <span className="hidden md:inline">•</span>
          <span>Natural-Looking Results</span>
          <span className="hidden md:inline">•</span>
          <span>Same-Day Available</span>
        </div>
      </Container>
    </section>
  );
}