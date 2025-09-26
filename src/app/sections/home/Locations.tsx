"use client";

import { AccordionItem } from "@/components/Accordion";
import Container from "@/components/Container";

export default function LocationsSection() {
  return (
    <section className="bg-champagne py-16">
      <Container className="container mx-auto">
        {/* Title */}
        <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-outer-space mb-10">
          Available in Brooklyn, Manhattan &amp; Queens – Right to Your Door
        </h2>

        {/* Accordions */}
        <div className="space-y-6">
          <AccordionItem title="Brooklyn">
            <p>
              Caridi Concierge provides in-home Botox and filler treatments throughout Brooklyn.{" "}
              <strong>Popular service areas include Red Hook, Carroll Gardens, Dumbo, and Park Slope.</strong>{" "}
              Clients appreciate private, physician-led care without leaving their neighborhood.
            </p>
          </AccordionItem>

          <AccordionItem title="Manhattan">
            <p>
              From uptown to downtown, I bring Botox and dermal filler treatments across Manhattan.{" "}
              <strong>Common areas include the Upper East Side, Murray Hill, Soho, Tribeca, and Chelsea.</strong>{" "}
              Treatments are private, personalized, and delivered with precision.
            </p>
          </AccordionItem>

          <AccordionItem title="Queens">
            <p>
              In Queens, clients enjoy the convenience of Botox and filler treatments without a trip into Manhattan.{" "}
              <strong>I often serve Astoria, Flushing, Long Island City, and nearby neighborhoods.</strong>{" "}
              Each visit blends medical expertise with artistry for natural results.
            </p>
          </AccordionItem>

          <AccordionItem title="Staten Island">
            <p>
              Select clients in Staten Island receive private Botox and filler treatments without the need to travel
              into the city.{" "}
              <strong>Appointments are arranged based on availability, ensuring convenience and discretion.</strong>
            </p>
          </AccordionItem>

          <AccordionItem title="The Bronx">
            <p>
              Botox and filler treatments are also available in the Bronx.{" "}
              <strong>Clients in neighborhoods like Riverdale and Fordham can arrange discreet, physician-led
              appointments tailored to their needs.</strong>
            </p>
          </AccordionItem>

          <AccordionItem title="Long Island">
            <p>
              Caridi Concierge also travels to parts of Long Island for Botox and filler services.{" "}
              <strong>I have served clients in Long Beach and nearby areas, and I may be able to accommodate other
              locations upon request.</strong>
            </p>
          </AccordionItem>
        </div>
      </Container>
    </section>
  );
}
