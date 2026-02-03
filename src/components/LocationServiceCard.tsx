// components/LocationServiceCard.tsx
import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";

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
  const badgeStyles: Record<BadgeVariant, string> = {
    popular: "bg-dimgray text-white",
    new: "bg-emerald-600 text-white",
    private: "bg-outer-space text-alabaster",
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative h-full flex flex-col">
      {badge && (
        <span
          className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-semibold ${
            badgeStyles[badge.variant ?? "popular"]
          }`}
        >
          {badge.text}
        </span>
      )}

      <div className="mb-5 pr-20">
        <h3 className="font-fraunces text-2xl text-outer-space">{title}</h3>
        {subtitle ? (
          <p className="text-outer-space/70 mt-1">{subtitle}</p>
        ) : null}
      </div>

      <p className="text-outer-space/80 leading-relaxed mb-6">{whyHere}</p>

      <ul className="space-y-2 mb-8 text-[15px] text-outer-space flex-grow">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-outer-space/50 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col items-center justify-center">
        <PrimaryButton
          ariaLabel={`Learn more about ${title}`}
          id={`learn-more-${title.toLowerCase().replace(/\s+/g, "-")}`}
          href={ctaHref} 
          variant="alt" 
          className="text-sm px-6 py-1.5"
        >
          {ctaText}
        </PrimaryButton>
      </div>
    </div>
  );
}
