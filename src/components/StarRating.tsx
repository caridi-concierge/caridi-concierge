import Star from "./icons/Star";

type StarRatingProps = {
  count?: number; // default to 5
  className?: string; // e.g., size/color control
};

export default function StarRating({ count = 5, className = "w-5 h-5 text-carnation" }: StarRatingProps) {
  return (
    <div className="flex">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <Star key={i} className={className} />
        ))}
    </div>
  );
}
