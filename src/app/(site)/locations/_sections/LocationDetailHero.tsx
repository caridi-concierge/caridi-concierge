import Image from "next/image";
import Link from "next/link";
import type { LocationFacts } from "@/content/locations/types";
import type { LocationContent } from "@/content/locations/types";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

type Props = {
  loc: LocationFacts;
  content?: LocationContent;
};

export default function LocationDetailHero({ loc, content }: Props) {
  const hero = content?.hero;
  const eyebrow = hero?.eyebrow ?? loc.type;
  const title = hero?.title ?? loc.name;
  const italicTail = hero?.italicTail;

  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 pt-16 lg:pt-[80px] pb-12 lg:pb-[80px]">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 font-body text-[10px] font-medium tracking-[0.32em] uppercase">
            <li>
              <Link href="/" className="text-ink/55 transition-colors duration-200 hover:text-brass">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink/30">/</li>
            <li>
              <Link href="/locations" className="text-ink/55 transition-colors duration-200 hover:text-brass">
                Locations
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink/30">/</li>
            <li className="text-brass" aria-current="page">
              {loc.name}
            </li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div>
            <Eyebrow className="text-brass mb-6" withDash>
              {eyebrow}
            </Eyebrow>
            <h1 className="font-display font-light text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.0] tracking-[-0.015em] text-ink max-w-[620px]">
              {title}
              {italicTail && (
                <>
                  {" "}
                  <em className="not-italic italic font-light text-brass">
                    {italicTail}
                  </em>
                </>
              )}
            </h1>

            <dl className="mt-10 space-y-3 max-w-[520px]">
              {loc.address.complete && (
                <ContactRow label="Address">
                  {loc.ctaSecondaryHref ? (
                    <a
                      href={loc.ctaSecondaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 hover:text-brass"
                    >
                      {loc.address.complete}
                    </a>
                  ) : (
                    loc.address.complete
                  )}
                </ContactRow>
              )}
              {loc.phoneDisplay && (
                <ContactRow label="Phone">
                  <a
                    href={loc.phoneHref}
                    className="transition-colors duration-200 hover:text-brass"
                  >
                    {loc.phoneDisplay}
                  </a>
                </ContactRow>
              )}
              {loc.email && (
                <ContactRow label="Email">
                  <a
                    href={loc.emailHref}
                    className="transition-colors duration-200 hover:text-brass"
                  >
                    {loc.email}
                  </a>
                </ContactRow>
              )}
              {loc.hours && loc.hours.length > 0 && (
                <div className="grid grid-cols-[110px_1fr] gap-4 py-1">
                  <dt className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55 self-baseline">
                    Hours
                  </dt>
                  <dd className="m-0 font-body text-[14px] leading-[1.6] text-ink">
                    {loc.hours.map((h, i) => (
                      <div key={i}>
                        <span className="text-ink/55">{h.label}:</span> {h.value}
                      </div>
                    ))}
                  </dd>
                </div>
              )}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              {loc.ctaPrimaryLabel && loc.ctaPrimaryHref && (
                <Link
                  href={loc.ctaPrimaryHref}
                  id={`${loc.slug}-primary-cta`}
                  className="inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ivory transition-colors duration-200 hover:bg-teal-deep"
                >
                  {loc.ctaPrimaryLabel} <IconArrow />
                </Link>
              )}
              {loc.ctaTertiaryLabel && loc.ctaTertiaryHref && (
                <Link
                  href={loc.ctaTertiaryHref}
                  id={`${loc.slug}-zocdoc-cta`}
                  className="inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-brass transition-colors duration-200 hover:text-ink"
                >
                  {loc.ctaTertiaryLabel} <IconArrow className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>

          <div className="w-full">
            <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto lg:ml-auto bg-bone overflow-hidden">
              <Image
                src={loc.heroImage?.src || "/images/home-banner-edit.webp"}
                alt={loc.heroImage?.alt || loc.name}
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
                style={{ filter: "saturate(0.85) brightness(0.97)" }}
                priority
              />
            </div>
          </div>
        </div>

        {content?.spec && content.spec.length > 0 && (
          <div className="mt-12 lg:mt-16 grid gap-px bg-line border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {content.spec.map((item) => (
              <div key={item.label} className="bg-ivory p-5 sm:p-6">
                <div className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55">
                  {item.label}
                </div>
                <div className="mt-2 font-display font-light text-[18px] sm:text-[20px] leading-[1.3] text-ink">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 py-1">
      <dt className="font-body text-[10px] font-medium tracking-[0.32em] uppercase text-ink/55 self-baseline">
        {label}
      </dt>
      <dd className="m-0 font-body text-[14px] leading-[1.6] text-ink">
        {children}
      </dd>
    </div>
  );
}
