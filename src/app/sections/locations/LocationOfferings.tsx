// app/sections/locations/LocationOfferings.tsx
import Container from "@/components/Container";
import type { LocationContent } from "@/content/locations/types";
import LocationServiceCard from "@/components/LocationServiceCard";

interface LocationOfferingsProps {
  content: LocationContent['offerings'];
}

export default function LocationOfferings({ content }: LocationOfferingsProps) {
  return (
    <section className="py-16 bg-merino">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-fraunces text-4xl md:text-5xl text-outer-space mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-outer-space/80 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {content.services.map((svc) => (
            <LocationServiceCard key={svc.title} {...svc} />
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-fraunces text-3xl pb-10 text-outer-space mb-4">
            Why Caridi Concierge?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="font-fraunces text-xl text-outer-space mb-4">
                  {feature.title}
                </h3>
                <p className="text-outer-space/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}