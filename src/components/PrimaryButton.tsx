import Link from "next/link";
import { ReactNode } from "react";
import { base, variants } from "./ButtonStyles";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light"; // add as needed
  className?: string;
  ariaLabel?: string;
};

export default function PrimaryButton({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={[base, variants[variant], className].join(" ")}
    >
      {children}
    </Link>
  );
}
