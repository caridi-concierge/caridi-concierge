import type { Location } from "@/lib/constants/locations";
import { getLocationContent } from "@/content/locations";
import LocationDetailHero from "@/app/sections/locations/LocationDetailHero";
import LocationOverview from "@/app/sections/locations/LocationOverview";
import LocationCoverage from "@/app/sections/locations/LocationCoverage";
import LocationSpace from "@/app/sections/locations/LocationSpace";
import LocationProcess from "@/app/sections/locations/LocationProcess";
import LocationOfferings from "@/app/sections/locations/LocationOfferings";
import LocationDoctorsNoteSection from "@/app/sections/locations/LocationDoctorsNote";
import LocationFAQ from "@/app/sections/locations/LocationFAQ";
import SisterLocationsSection from "@/app/sections/locations/SisterLocations";
import ResultsCarouselSection from "@/app/sections/home/Results";
import CTASection from "@/components/CTA";

export default function LocationDetailLayout({ loc }: { loc: Location }) {
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
