"use client";

import { CarouselSlide, ImageCarousel } from "@/components/ImageCarousel";
import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";

export default function LocationsSection() {
  const slides: CarouselSlide[] = [
    {
      src: "/images/concierge_nyc_1000px.webp",
      alt: "A view of the Manhattan Bridge from DUMBO. There is an iconic yellow taxi center frame.",
      caption: "Concierge in-home care across NYC",
      hTag: 3,
      link: "/locations/in-home"
    },
    {
      src: "/images/red_hook_1000px.webp",
      alt: "Iconic Brick Artists' building in Red Hook, Brooklyn",
      caption: "Private Studio in Red Hook, Brooklyn",
      hTag: 3,
      link: "/locations/red-hook"
    },
    {
      src: "/images/gowanus_neighborhood_1000px.webp",
      alt: "Brownstone neighborhood in Brooklyn",
      caption: "In-office treatments in Gowanus, Brooklyn",
      hTag: 3,
      link: "/locations/gowanus"
    },
  ];

  return (
    <section className="bg-champagne py-16">
      <Container className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-outer-space">
              Available in Brooklyn, Manhattan &amp; Queens – Right to Your Door
            </h2>
            <p className="mt-4 text-outer-space/80 text-base md:text-lg leading-relaxed">
              Physician-led concierge Botox and dermal filler treatments, delivered privately in your neighborhood.
              Appointments are tailored for discretion, convenience, and natural results.
            </p>
            <p className="mt-4 text-outer-space/80 text-base leading-relaxed">
              Primary service areas include Brooklyn, Manhattan, and Queens, with select appointments available in
              Staten Island, the Bronx, and parts of Long Island.
            </p>
            <div className="mt-6">
              <PrimaryButton
                id="view-locations-button"
                href="/locations"
                variant="light"
              >
                View Our Locations
              </PrimaryButton>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ImageCarousel
              slides={slides}
              ariaLabel="Locations carousel"
              headerText="Concierge Service Locations"
              className="max-w-2xl mx-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
