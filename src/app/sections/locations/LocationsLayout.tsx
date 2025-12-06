import Container from "@/components/Container";
import { LocationMapSection } from "@/app/sections/locations/LocationsMap";
import { LocationsHeroSection } from "@/app/sections/locations/LocationsHero";
import { LocationsListSection } from "@/app/sections/locations/LocationsList";

export default function LocationsLayoutSection() {
  return (
    <main className="bg-merino text-outer-space">
      <section className="py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* Left column: hero + cards + blurb */}
          <div className="space-y-10">
            <LocationsHeroSection />
            <LocationsListSection />
          </div>

          {/* Right column: map */}
          <aside className="w-full lg:sticky lg:top-24">
            <LocationMapSection mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96835.4251886472!2d-74.07843214373223!3d40.67161048116627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x252431c58addd917%3A0x5a531a6154fdd61d!2sCaridi%20Concierge!5e0!3m2!1sen!2sus!4v1764975945941!5m2!1sen!2sus" />
          </aside>
        </Container>
      </section>
    </main>
  );
}