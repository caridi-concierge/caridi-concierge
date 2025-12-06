import { LOCATIONS } from "@/lib/constants/locations";
import { LocationCard } from "@/components/LocationCard";

export function LocationsListSection() {
  return (
    <section aria-label="Caridi Concierge locations" className="space-y-4">
      {LOCATIONS.map((loc) => (
        <LocationCard key={loc.id} loc={loc} />
      ))}
    </section>
  );
}