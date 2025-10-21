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

        <div>
          <p className="text-lg text-outer-space/80">
            You&apos;re managing demanding schedules, endless commitments, and a life that doesn&apos;t slow down for self-care appointments. 
            But you also don&apos;t want to look overdone, you want to look like yourself, just more refreshed. 
            Whether you&apos;re seeking to smooth forehead wrinkles, enhance your lips with precision, or slim your jawline with masseter Botox, you deserve expert care that honors both your time and your aesthetic. 
            That&apos;s exactly what Caridi Concierge delivers: physician-led treatments in the privacy of your home, tailored to your features and your life.
          </p>
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
            <PrimaryButton href="/treatments/wrinkle-reduction" variant="primary" className="text-sm px-6 py-1.5" ariaLabel="Learn more about botox treatments and wrinkle reduction">
              Learn More <span className="sr-only">about Botox treatments and wrinkle reduction</span>
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
            <PrimaryButton href="/treatments/dermal-fillers" variant="primary" className="text-sm px-6 py-1.5" ariaLabel="Learn more about dermal fillers and volume enhancers">
              Learn More <span className="sr-only">about dermal fillers and volume enhancers</span>
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
            <PrimaryButton href="/treatments/biostimulatory-fillers" variant="primary" className="text-sm px-6 py-1.5" ariaLabel="Learn more about biostimulatory fillers and collagen builders">
              Learn More <span className="sr-only">about biostimulatory fillers and collagen builders</span>
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
