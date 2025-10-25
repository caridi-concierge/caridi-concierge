import Link from "next/link";
import { ReactNode } from "react";
import { base, variants } from "./ButtonStyles";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "alt"; // add as needed
  className?: string;
  ariaLabel?: string;
  id?: string;
};

export default function PrimaryButton({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
  id,
}: ButtonProps) {

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={[base, variants[variant], className].join(" ")}
      id={id ?? "primary-button"}
    >
      {children}
    </Link>
  );
}
