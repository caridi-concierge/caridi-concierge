import Container from "@/components/Container";

export function LocationMapSection({ mapSource }: { mapSource: string }) {
  return (
    <section aria-label="Caridi Concierge location map">
      <Container>
      <div className="rounded-2xl overflow-hidden border border-outer-space/10 bg-white/60 backdrop-blur-sm shadow-sm">
        <div className="p-4 border-b border-outer-space/10">
          <h2 className="font-fraunces text-sm text-outer-space/80">
            Caridi Concierge Service Area
          </h2>
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
      </Container>
    </section>
  );
}