import Link from "next/link";
import { ReactNode } from "react";

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function PrimaryButton({ href, children, className = "" }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={[
        // layout
        "inline-flex items-center justify-center",
        // visual
        "rounded-full border px-10 py-2.5 font-satoshi text-base font-medium transition-colors",
        // brand
        "bg-outer-space border-outer-space text-merino hover:bg-peach-puff hover:border-outer-space hover:text-outer-space",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
