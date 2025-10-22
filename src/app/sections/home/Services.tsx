"use client";
import Container from "@/components/Container";
import Image from "next/image";
import { services } from "@/lib/constants/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="bg-outer-space pb-16 pt-12">
      <Container className="container mx-auto">
        {/* Section Intro */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="font-fraunces text-3xl md:text-4xl text-merino mb-5">
            Signature Aesthetic Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="w-full flex justify-center pt-12 mt-12">
        <Image
          src="/images/Decor02.svg"
          alt=""
          width={93}
          height={108}
          className="h-auto w-12 sm:w-25 md:w-[93px]"
        />
      </div>
      </Container>
    </section>
  );
}
