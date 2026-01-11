// app/sections/locations/LocationDetailLayout.tsx
import type { Location } from "@/lib/constants/locations";
import LocationDetailHero from "@/app/sections/locations/LocationDetailHero";

export default function LocationDetailLayout({ loc }: { loc: Location }) {
  return (
    <main className="bg-merino text-outer-space">
      <LocationDetailHero loc={loc} />
    </main>
  );
}
