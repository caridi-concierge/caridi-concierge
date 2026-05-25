import Eyebrow from "@/components/Eyebrow";

export function LocationsHeroSection() {
  return (
    <section>
      <Eyebrow className="text-brass mb-9 flex items-center gap-3.5">
        <span aria-hidden="true" className="inline-block w-6 h-px bg-brass" />
        Locations · Where we visit
      </Eyebrow>
      <h1 className="font-display font-light text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.0] tracking-[-0.015em]">
        Clinic in Gowanus.{" "}
        <em className="not-italic italic font-light text-brass">
          Concierge across NYC.
        </em>
      </h1>
      <p className="mt-8 max-w-[520px] text-[17px] leading-[1.7] font-light text-ink/70">
        A dedicated clinic in Gowanus, a private studio in Red Hook, and
        physician-led in-home visits across New York City. Whether you come to
        us or we come to you, every treatment is calibrated to your face, your
        downtime, your calendar.
      </p>
    </section>
  );
}
