import Link from "next/link";
import IconArrow from "@/components/icons/IconArrow";

type BadgeVariant = "new" | "private" | "popular";

export type LocationServiceCardProps = {
  title: string;
  subtitle?: string;
  whyHere: string;
  bullets: string[];
  ctaHref: string;
  ctaText?: string;
  badge?: { text: string; variant?: BadgeVariant };
};

export default function LocationServiceCard({
  title,
  subtitle,
  whyHere,
  bullets,
  ctaHref,
  ctaText = "Learn more",
  badge,
}: LocationServiceCardProps) {
  return (
    <article className="relative flex h-full flex-col gap-5 p-7 sm:p-9">
      {badge && (
        <span className="absolute top-7 right-7 font-body text-[9px] font-medium tracking-[0.32em] uppercase text-brass">
          — {badge.text}
        </span>
      )}

      <div>
        <h3 className="font-display font-normal text-[26px] sm:text-[30px] leading-[1.1] text-ink">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 font-body text-[13px] leading-[1.55] text-ink/55">
            {subtitle}
          </p>
        )}
      </div>

      <p className="font-body text-[14px] leading-[1.7] text-ink/70">
        {whyHere}
      </p>

      <ul className="flex-1 space-y-2.5 font-body text-[14px] leading-[1.6] text-ink/70">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2.5">
            <span aria-hidden="true" className="text-brass">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className="mt-2 inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 hover:text-brass"
        aria-label={`Learn more about ${title}`}
        id={`learn-more-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {ctaText} <IconArrow className="w-3 h-3" />
      </Link>
    </article>
  );
}
