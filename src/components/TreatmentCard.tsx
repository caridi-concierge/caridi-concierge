import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import type { TreatmentMetadata } from "@/model/treatments/Treatment";

export type TreatmentCardProps = TreatmentMetadata;

export default function TreatmentCard({
  title,
  badge,
  hook,
  bullets,
  products,
  learnMoreHref,
}: TreatmentCardProps) {
  const badgeStyles = {
    popular: "bg-dimgray text-white",
    new: "bg-emerald-600 text-white",
    advanced: "bg-blue-600 text-white",
    gentle: "bg-rose-500 text-white",
    longLasting: "bg-amber-600 text-white",
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative h-full flex flex-col">
      {badge && (
        <span
          className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-semibold ${
            badgeStyles[badge.variant]
          }`}
        >
          {badge.text}
        </span>
      )}

      <h3 className="font-fraunces text-2xl text-outer-space mb-3 pr-24">
        {hook}
      </h3>
      <p className="text-paleviolet/80 italic mb-5">{title}</p>

      {/* Bullet Points */}
        <ul className="mb-6 space-y-2 flex-grow">
        {bullets.map((bullet, index) => (
            <li
            key={index}
            className="flex items-start gap-2 text-outer-space text-[15px]"
            >
            {/* Fixed-size icon wrapper */}
            <span className="flex-shrink-0 w-4 h-4 mt-0.5">
                <Image
                src="/images/CheckIcon.svg"
                alt=""
                width={16}
                height={16}
                className="w-full h-full"
                />
            </span>
            <span dangerouslySetInnerHTML={{ __html: bullet }} />
            </li>
        ))}
        </ul>

      {/* Products */}
      <div className="mb-6 text-sm">
        <p className="text-outer-space/80">
          <span className="font-semibold text-outer-space">Products:</span>{" "}
          {products}
        </p>
      </div>

      {/* Card Actions */}
      <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center gap-3 mt-auto">
        <PrimaryButton
          href={learnMoreHref}
          variant="alt"
          className="text-sm px-6 py-1.5"
          ariaLabel={`Learn more about ${title}`}
        >
          Learn More
        </PrimaryButton>
      </div>
    </div>
  );
}