import type { LocationFacts } from "@/content/locations/types";
import { getLocationContent } from "@/content/locations";
import LocationDetailHero from "@/app/locations/_sections/LocationDetailHero";
import LocationOverview from "@/app/locations/_sections/LocationOverview";
import LocationCoverage from "@/app/locations/_sections/LocationCoverage";
import LocationSpace from "@/app/locations/_sections/LocationSpace";
import LocationProcess from "@/app/locations/_sections/LocationProcess";
import LocationOfferings from "@/app/locations/_sections/LocationOfferings";
import LocationDoctorsNoteSection from "@/app/locations/_sections/LocationDoctorsNote";
import LocationFAQ from "@/app/locations/_sections/LocationFAQ";
import SisterLocationsSection from "@/app/locations/_sections/SisterLocations";
import ResultsCarouselSection from "@/components/Results";
import CTASection from "@/components/CTA";

export default function LocationDetailLayout({ loc }: { loc: LocationFacts }) {
  const content = getLocationContent(loc.slug);

  if (!content) {
    return (
      <main className="bg-ivory text-ink">
        <LocationDetailHero loc={loc} />
        <SisterLocationsSection currentSlug={loc.slug} />
        <CTASection variantKey="default" />
      </main>
    );
  }

  return (
    <main className="bg-ivory text-ink">
      <LocationDetailHero loc={loc} content={content} />
      <LocationOverview
        studioExperience={content.studioExperience}
        overview={content.overview}
        whatWeBring={content.whatWeBring}
      />
      {content.coverage && content.coverage.length > 0 && (
        <LocationCoverage coverage={content.coverage} />
      )}
      {content.space && content.space.length > 0 && (
        <LocationSpace space={content.space} />
      )}
      {content.process && content.process.length > 0 && (
        <LocationProcess process={content.process} />
      )}
      <LocationOfferings content={content.offerings} />
      <ResultsCarouselSection />
      <LocationFAQ content={content.faqs} locationName={loc.name} />
      <LocationDoctorsNoteSection note={content.doctorsNote} />
      <SisterLocationsSection currentSlug={loc.slug} />
      <CTASection variantKey="default" />
    </main>
  );
}
