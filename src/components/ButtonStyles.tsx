export const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border px-10 py-2.5 font-body text-base font-medium transition-colors";

export const variants = {
  primary:
    "bg-teal border-teal text-ivory hover:bg-teal-deep hover:border-teal-deep",
  secondary:
    "bg-brass border-brass text-ivory hover:bg-brass-soft hover:border-brass-soft",
  light:
    "bg-ivory border-ink text-ink hover:bg-bone hover:border-ink hover:text-ink",
  alt:
    "bg-ivory-2 border-line text-ink hover:bg-bone hover:text-ink hover:border-line",
  // Zocdoc retains its brand palette intentionally.
  zocdoc:
    "bg-gorse text-prussian-blue border-prussian-blue/30 hover:bg-hawkes-blue",
};
