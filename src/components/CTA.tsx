import Link from "next/link";
import { ctaVariants } from "@/lib/constants/ctas";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

export type CTASectionProps = {
  title: string;
  subtitle?: string;
  ctaHref: string;
  ctaText: string;
  ariaLabel?: string;
  variant?: "primary" | "secondary" | "light";
  bgColor?: string;
  textColor?: string;
  id?: string;
  /**
   * Editorial small-caps eyebrow rendered above the headline. Defaults to "— Begin".
   * Pass null to suppress.
   */
  eyebrow?: string | null;
};

type CTASectionWrapperProps = {
  variantKey?: keyof typeof ctaVariants;
  id?: string;
} & Partial<CTASectionProps>;

/**
 * Editorial full-width CTA band. Default surface is teal with brass-soft eyebrow,
 * Cormorant headline (use `<em>` in title for the italic brass-soft accent),
 * and an ivory pill button.
 */
export default function CTASection({
  variantKey = "default",
  id = "primary-cta",
  ...overrides
}: CTASectionWrapperProps) {
  const config: CTASectionProps & { eyebrow?: string | null } = {
    ...ctaVariants[variantKey],
    ...overrides,
  };

  const bg = config.bgColor ?? "bg-teal";
  const text = config.textColor ?? "text-ivory";
  const eyebrow = config.eyebrow === undefined ? "— Begin" : config.eyebrow;

  // Attribute booking source by the rendered CTA id so begin_booking (fired on
  // /book) knows which CTA drove the click.
  const resolvedId = id ?? config.id;
  const ctaHref =
    config.ctaHref.startsWith("/book") && !config.ctaHref.includes("?")
      ? `/book?source=${resolvedId ?? "cta"}`
      : config.ctaHref;

  return (
    <section className={`${bg} ${text}`}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-20 py-24 lg:py-[140px] text-center">
        {eyebrow ? (
          <Eyebrow className="text-brass-soft mb-7">{eyebrow}</Eyebrow>
        ) : null}

        <h2
          className="font-display font-light text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.08] max-w-[880px] mx-auto text-balance [&_em]:not-italic [&_em]:italic [&_em]:font-light [&_em]:text-brass-soft"
          dangerouslySetInnerHTML={{ __html: config.title }}
        />

        {config.subtitle ? (
          <p className="mt-6 text-[15px] leading-[1.7] opacity-80 max-w-xl mx-auto">
            {config.subtitle}
          </p>
        ) : null}

        <div className="mt-12">
          <Link
            href={ctaHref}
            id={resolvedId}
            aria-label={config.ariaLabel}
            className="inline-flex items-center gap-2.5 rounded-full bg-ivory px-9 py-[18px] font-body text-[11px] font-medium uppercase tracking-[0.32em] text-teal-deep transition-colors duration-200 hover:bg-brass-soft"
          >
            {config.ctaText} <IconArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
