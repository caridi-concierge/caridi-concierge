// src/components/AboutMissionSection.tsx
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import IconArrow from "@/components/icons/IconArrow";

export default function AboutMissionSection() {
  return (
    <section className="py-16 bg-ivory-2">
      <Container className="container mx-auto px-4 max-w-3xl text-start">
        {/* Heading */}
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
          My mission to you
        </h2>

        {/* Paragraphs */}
        <div className="space-y-4 text-sm md:text-base text-ink/70 leading-relaxed mb-8">
          <p>
            Your health and beauty are as unique as you are, and I believe your
            care should reflect that. At Caridi Concierge, I&apos;m dedicated to
            helping you look and feel your best through personalized,
            evidence-based treatments delivered directly to your door.
          </p>
          <p>
            My mission is simple: to provide private, customized care that
            enhances your natural beauty and supports your overall well-being.
            Whether it&apos;s wrinkle reduction, HA dermal fillers, or biostimulatory
            fillers, I tailor each treatment to your individual needs, without
            wait times or distractions.
          </p>
          <p>
            Your comfort, privacy, and satisfaction are my top priorities. Let
            me bring the spa experience to you, so you can focus on becoming the
            most confident version of yourself.
          </p>
        </div>

        {/* CTA */}
        <div className="mb-12">
          <Link
            href="/book"
            id="about-mission-book-cta"
            className="inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition-colors duration-200 hover:bg-teal-deep"
          >
            Book a visit <IconArrow />
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/cc_headshot_white_outside_hq_800px.webp"
            alt="Dr Cristina Caridi is driven to help you look and feel your best. At Caridi Concierge, we provide private, tailored care that enhances your natural beauty and supports your overall well-being."
            width={466}
            height={600}
            className="w-auto h-auto rounded-lg object-cover shadow-[4px_6px_12px_rgba(0,0,0,0.25)]"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
