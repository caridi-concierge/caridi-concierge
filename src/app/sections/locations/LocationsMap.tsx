import Eyebrow from "@/components/Eyebrow";

export function LocationMapSection({ mapSource }: { mapSource: string }) {
  return (
    <section aria-label="Caridi Concierge location map">
      <div className="border border-line bg-ivory">
        <div className="px-5 py-4 border-b border-line">
          <Eyebrow className="text-brass">Service area</Eyebrow>
        </div>
        <div className="aspect-[4/3] w-full">
          <iframe
            title="Caridi Concierge Location Map"
            src={mapSource}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
