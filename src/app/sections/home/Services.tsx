"use client";
import Container from "@/components/Container";
import Image from "next/image";
import { services } from "@/lib/constants/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="bg-merino py-16">
      <Container className="container mx-auto">
        {/* Section Intro */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="font-fraunces text-3xl md:text-4xl text-outer-space mb-5">
            Signature Aesthetic Services
          </h2>
          <p className="text-lg text-outer-space/80 leading-relaxed">
            You&apos;re managing demanding schedules, endless commitments, and a
            life that doesn&apos;t slow down for self-care appointments. But you
            also don&apos;t want to look overdone—you want to look like yourself,
            just more refreshed. Whether you&apos;re seeking to smooth forehead
            wrinkles, enhance your lips with precision, or slim your jawline with
            masseter Botox, you deserve expert care that honors both your time and
            your aesthetic. That&apos;s exactly what Caridi Concierge delivers:
            physician-led treatments in the privacy of your home, tailored to your
            features and your life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>

      <div className="w-full flex justify-center py-15 mt-12">
        <Image
          src="/images/Decor01.svg"
          alt=""
          width={93}
          height={108}
          className="w-auto h-auto"
        />
      </div>
    </section>
  );
}
