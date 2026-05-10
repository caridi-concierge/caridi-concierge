import Image from "next/image";
import Link from "next/link";
import type { TreatmentMetadata } from "@/model/treatments/Treatment";
import Eyebrow from "@/components/Eyebrow";
import IconArrow from "@/components/icons/IconArrow";

export type TreatmentCardProps = TreatmentMetadata & {
  index?: number;
};

/**
 * Editorial treatment card — image, brass eyebrow ("0N · subtitle"),
 * Cormorant title, copy, "Learn more →".
 * Used in the home Treatments grid (`@/app/sections/home/Treatments.tsx`).
 */
export default function TreatmentCard({
  title,
  description,
  products,
  imgSrc,
  imgAlt,
  ctaHref,
  index,
}: TreatmentCardProps) {
  const number = typeof index === "number" ? `0${index + 1}` : null;

  return (
    <Link
      href={ctaHref}
      aria-label={`Learn more about ${title}`}
      className="group flex h-full flex-col gap-[18px] bg-ivory-2 p-8 pb-9 transition-colors duration-200 hover:bg-ivory-3"
    >
      <div className="relative w-full aspect-[5/4] overflow-hidden bg-bone">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          style={{ filter: "saturate(0.9)" }}
        />
      </div>

      <Eyebrow className="text-brass text-[10px]">
        {number ? <span>{number} · </span> : null}
        {products}
      </Eyebrow>

      <h3 className="font-display font-normal text-3xl leading-[1.1]">
        {title}
      </h3>

      <p className="font-body text-sm leading-[1.7] text-ink/70">
        {description}
      </p>

      <span className="mt-auto pt-2 inline-flex items-center gap-2 font-body text-[10px] font-medium uppercase tracking-[0.32em] text-ink transition-colors duration-200 group-hover:text-brass">
        Learn more <IconArrow className="w-3 h-3" />
      </span>
    </Link>
  );
}
