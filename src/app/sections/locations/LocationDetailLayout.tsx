// app/sections/locations/LocationDetailLayout.tsx
import type { Location } from "@/lib/constants/locations";
import { getLocationContent } from "@/content/locations";
import LocationDetailHero from "@/app/sections/locations/LocationDetailHero";
import LocationStudioExperience from "@/app/sections/locations/LocationStudioExperience";
import LocationOfferings from "@/app/sections/locations/LocationOfferings";
import LocationFAQ from "@/app/sections/locations/LocationFAQ";


export default function LocationDetailLayout({ loc }: { loc: Location }) {
  const content = getLocationContent(loc.slug);
  
  if (!content) {
    // Fallback if no content is found
    return (
      <main className="bg-merino text-outer-space">
        <LocationDetailHero loc={loc} />
      </main>
    );
  }

  return (
    <main className="bg-merino text-outer-space">
      <LocationDetailHero loc={loc} />
      <LocationStudioExperience content={content.studioExperience} />
      <LocationOfferings content={content.offerings} />
      <LocationFAQ content={content.faqs} locationName={loc.name} />
    </main>
  );
}
