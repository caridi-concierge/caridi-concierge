import { LocationMapSection } from "@/app/(site)/locations/_sections/LocationsMap";
import { LocationsHeroSection } from "@/app/(site)/locations/_sections/LocationsHero";
import { LocationsListSection } from "@/app/(site)/locations/_sections/LocationsList";
import { ServiceAreaInset } from "@/app/(site)/locations/_sections/ServiceAreaInset";

export default function LocationsLayoutSection() {
  return (
    <main className="bg-ivory text-ink">
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 pt-24 lg:pt-[100px] pb-20 lg:pb-[90px]">
          <div className="grid gap-14 lg:gap-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
            <div>
              <LocationsHeroSection />
              <div className="mt-14 lg:mt-[70px]">
                <LocationsListSection />
              </div>
            </div>

            <aside className="w-full lg:sticky lg:top-24">
              <LocationMapSection mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96835.4251886472!2d-74.07843214373223!3d40.67161048116627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x252431c58addd917%3A0x5a531a6154fdd61d!2sCaridi%20Concierge!5e0!3m2!1sen!2sus!4v1764975945941!5m2!1sen!2sus" />
              <ServiceAreaInset />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
