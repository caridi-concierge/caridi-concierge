import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

const neighborhoods = [
  {
    name: "Manhattan",
    label: "In-home concierge service",
    img: "/images/concierge_nyc_1000px.webp",
    imgAlt: "Manhattan skyline — concierge service area",
    copy: "Lower East Side, SoHo, Tribeca, FiDi, West Village & more. Discreet appointments at your residence or hotel.",
    href: "/locations/in-home",
  },
  {
    name: "Brooklyn",
    label: "In-home & private studio",
    img: "/images/gowanus_neighborhood_1000px.webp",
    imgAlt: "Brooklyn brownstone neighborhood",
    copy: "Red Hook, Cobble Hill, Carroll Gardens, Park Slope, DUMBO, Prospect Heights. Private studio in Gowanus opens January 2026.",
    href: "/locations/gowanus",
  },
  {
    name: "Queens & beyond",
    label: "Concierge service area",
    img: "/images/concierge_nyc_1000px.webp",
    imgAlt: "NYC concierge service area",
    copy: "Select appointments across Queens, Staten Island, the Bronx, and parts of Long Island—on request.",
    href: "/locations",
  },
];

export default function LocationsSection() {
  return (
    <section className="bg-teal-deep text-ivory">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-20 lg:py-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">
          {/* Sticky-left intro */}
          <div className="lg:sticky lg:top-10">
            <Eyebrow withDash className="text-brass-soft mb-4">
              Where we visit
            </Eyebrow>
            <h2 className="font-display font-light text-[40px] sm:text-5xl lg:text-[52px] leading-[1.05]">
              Brooklyn, Manhattan,{" "}
              <em className="not-italic italic font-light text-brass-soft">
                and Queens.
              </em>
            </h2>
            <p className="mt-7 text-[15px] leading-[1.7] text-ivory/75 max-w-[380px]">
              Concierge appointments at your residence, hotel, or our private
              studio in Gowanus, opening January 2026. Select visits available
              in Staten Island, the Bronx, and parts of Long Island, on
              request.
            </p>
            <Link
              href="/locations"
              id="view-locations-button"
              className="mt-9 inline-flex items-center gap-3 pb-2 border-b border-brass-soft font-body text-[11px] font-medium uppercase tracking-[0.32em] text-brass-soft transition-colors duration-200 hover:text-ivory hover:border-ivory"
            >
              View all locations <IconArrow />
            </Link>
          </div>

          {/* Neighborhood rows (hairline-divided) */}
          <div className="flex flex-col gap-px bg-line-on-teal">
            {neighborhoods.map((loc, i) => (
              <Link
                key={loc.name}
                href={loc.href}
                aria-label={`Explore ${loc.name}`}
                className="group bg-teal-deep grid grid-cols-[88px_1fr] sm:grid-cols-[120px_1fr_auto] gap-6 sm:gap-8 items-center py-8 transition-colors duration-200 hover:bg-teal"
              >
                <div className="relative w-[88px] sm:w-[120px] h-[64px] sm:h-[88px] overflow-hidden bg-black/20">
                  <Image
                    src={loc.img}
                    alt={loc.imgAlt}
                    fill
                    sizes="120px"
                    className="object-cover"
                    style={{ filter: "grayscale(0.2) saturate(0.85)" }}
                  />
                </div>
                <div className="min-w-0">
                  <Eyebrow className="text-brass-soft text-[10px] mb-2">
                    {`0${i + 1}`} — {loc.label}
                  </Eyebrow>
                  <h3 className="font-display font-normal text-2xl sm:text-3xl leading-[1.1] mb-2">
                    {loc.name}
                  </h3>
                  <p className="font-body text-sm leading-[1.6] text-ivory/70 max-w-[520px]">
                    {loc.copy}
                  </p>
                </div>
                <div className="hidden sm:block text-right col-start-3">
                  <span className="inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition-colors duration-200 group-hover:text-brass-soft">
                    Explore <IconArrow className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
