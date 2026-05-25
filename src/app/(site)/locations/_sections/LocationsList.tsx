import { LOCATIONS } from "@/content/locations";
import { LocationCard } from "@/components/LocationCard";

// Editorial display order: studio, clinic, concierge — matches the home page.
const ORDER = ["studio", "gowanus", "concierge"] as const;

export function LocationsListSection() {
  const items = ORDER
    .map((id) => LOCATIONS.find((l) => l.id === id))
    .filter((l): l is (typeof LOCATIONS)[number] => Boolean(l));

  return (
    <section aria-label="Caridi Concierge locations">
      {items.map((loc, i) => (
        <LocationCard key={loc.id} loc={loc} ordinal={i + 1} />
      ))}
    </section>
  );
}
