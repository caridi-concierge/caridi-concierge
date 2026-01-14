// app/sections/locations/LocationStudioExperience.tsx
import Container from "@/components/Container";
import type { LocationContent } from "@/content/locations/types";

interface LocationStudioExperienceProps {
  content: LocationContent['studioExperience'];
}

export default function LocationStudioExperience({ content }: LocationStudioExperienceProps) {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-fraunces text-4xl md:text-5xl text-outer-space mb-8">
            {content.title}
          </h2>
          
          <p className="text-lg md:text-xl text-outer-space/80 leading-relaxed">
            {content.description}
          </p>
        </div>
      </Container>
    </section>
  );
}