
import Container from "@/components/Container";

export function LocationsHeroSection() {
  return (
    <section>
        <Container>
            <header className="space-y-4">
            <h1 className="font-fraunces text-sm uppercase tracking-[0.18em] text-outer-space/70">
                Locations
            </h1>
            <h2 className="font-fraunces text-3xl md:text-4xl leading-tight">
                Clinic in Gowanus. Concierge care across NYC.
            </h2>
            <p className="text-base md:text-lg text-outer-space/80 max-w-xl">
                Caridi Concierge offers a dedicated clinic in Gowanus, and private in-home visits across New York City.
                Whether you come to us or we come to you, every treatment is physician-led, evidence-based, and tailored to your goals.
            </p>
            </header>
        </Container>
    </section>
  );
}