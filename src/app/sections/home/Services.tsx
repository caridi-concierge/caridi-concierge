"use client";

import { Accordion, AccordionItem } from "@/components/Accordion";
import PrimaryButton from "@/components/PrimaryButton";
import Container from "@/components/Container";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="bg-merino py-16">
      <Container className="container mx-auto grid grid-cols-1 gap-12 items-start">
        {/* Heading */}
        <div>
          <h2 className="font-fraunces text-3xl md:text-4xl text-outer-space">
            Signature Aesthetic Services
          </h2>
        </div>

        {/* Accordion with services */}
        <Accordion className="py-5">
          <AccordionItem title="Botox Treatments">
            <p>
              I offer advanced wrinkle-reduction treatments to help you achieve
              a refreshed, natural look. These treatments can smooth frown
              lines, crow’s feet, and more. They can refine the lips (lip flip)
              or correct a gummy smile. Plans are tailored to your facial
              anatomy and goals, in the comfort of your home.
              <br />
              <br />
              Common product options are Botox, Xeomin, and Daxxify.
            </p>
            <PrimaryButton href="/treatments/wrinkle-reduction" variant="primary" className="text-sm px-6 py-1.5">
              Learn More
            </PrimaryButton>
          </AccordionItem>

          <AccordionItem title="Dermal Filler Treatments">
            <p>
              Dermal fillers (hyaluronic acid) enhance contours, restore volume,
              and smooth lines. They work well in dynamic areas like the lips,
              cheeks, and jawline. Results appear right away, look natural, and
              are tailored to your features.
              <br />
              <br />
              Common product options are Juvederm and the RHA Collection.
            </p>
            <PrimaryButton href="/treatments/dermal-fillers" variant="primary" className="text-sm px-6 py-1.5">
              Learn More
            </PrimaryButton>
          </AccordionItem>

          <AccordionItem title="Biostimulatory Filler Treatments">
            <p>
              Biostimulatory fillers stimulate your body to produce its own
              collagen, restoring volume and improving skin texture. They’re
              ideal for cheeks, temples, and jawline. Results build gradually,
              look natural, and last over time.
              <br />
              <br />
              Common product options are Radiesse and Sculptra.
            </p>
            <PrimaryButton href="/treatments/biostimulatory-fillers" variant="primary" className="text-sm px-6 py-1.5">
              Learn More
            </PrimaryButton>
          </AccordionItem>
        </Accordion>
      </Container>
      <div className="w-full flex justify-center py-15">
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
