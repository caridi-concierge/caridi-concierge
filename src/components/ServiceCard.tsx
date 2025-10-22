import PrimaryButton from "@/components/PrimaryButton";

interface ServiceCardProps {
  id: string;
  title: string;
  badge?: {
    text: string;
    variant: "popular" | "new" | "advanced" | "gentle" | "longLasting";
  };
  hook: string;
  bullets: string[];
  products: string;
  bookHref: string;
  learnMoreHref: string;
}

export default function ServiceCard({
  title,
  badge,
  hook,
  bullets,
  products,
  bookHref,
  learnMoreHref,
}: ServiceCardProps) {
  const badgeStyles = {
    popular: "bg-outer-space text-white",
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
        {title}
      </h3>
      <p className="text-outer-space/70 italic mb-5">{hook}</p>

      {/* Bullet Points */}
      <ul className="mb-6 space-y-2 flex-grow">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="flex items-start text-outer-space/80 text-[15px]"
          >
            <span className="text-outer-space font-bold mr-2 mt-0.5">✓</span>
            <span dangerouslySetInnerHTML={{ __html: bullet }} />
          </li>
        ))}
      </ul>

      {/* Products */}
      <div className="mb-6 text-sm">
        <p className="text-outer-space/60">
          <span className="font-semibold text-outer-space">Products:</span>{" "}
          {products}
        </p>
      </div>

      {/* Card Actions */}
      <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center gap-3 mt-auto">
        {/* <PrimaryButton
          href={bookHref}
          variant="primary"
          className="text-sm px-6 py-2 w-full sm:w-auto sm:flex-1"
          ariaLabel={`Book ${title}`}
        >
          Book Now
        </PrimaryButton> */}
        <PrimaryButton
          href={learnMoreHref}
          variant="primary"
          className="text-sm px-6 py-1.5"
          ariaLabel={`Learn more about ${title}`}
        >
          Learn More
        </PrimaryButton>
      </div>
    </div>
  );
}