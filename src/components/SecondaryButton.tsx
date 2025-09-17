import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light"; // add as needed
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full border px-10 py-2.5 font-satoshi text-base font-medium transition-colors";

  const variants = {
    primary:
      "bg-outer-space border-outer-space text-merino hover:bg-midnight hover:border-midnight hover:text-merino",
    secondary:
      "bg-carnation border-carnation text-peach-puff hover:bg-peach-puff hover:text-carnation",
    light:
      "bg-white border-outer-space text-outer-space hover:bg-carnation hover:text-merino",
  };

  return (
    <Link
      href={href}
      className={[base, variants[variant], className].join(" ")}
    >
      {children}
    </Link>
  );
}
