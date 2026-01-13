// app/sections/locations/LocationOfferings.tsx
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import type { LocationContent } from "@/content/locations/types";

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
          {content.treatments.map((treatment, index) => {
            const CardContent = (
              <>
                <div className="aspect-square relative mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <h3 className="font-fraunces text-xl text-outer-space mb-3">
                  {treatment.title}
                </h3>
                
                <p className="text-outer-space/70 leading-relaxed">
                  {treatment.description}
                </p>
              </>
            );

            if (treatment.href) {
              return (
                <Link
                  key={index}
                  href={treatment.href}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 block group"
                >
                  {CardContent}
                  <div className="mt-4 text-outer-space/60 group-hover:text-outer-space transition-colors text-sm">
                    Learn more →
                  </div>
                </Link>
              );
            }

            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
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