import { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  /**
   * Editorial wayfinding mark: a leading "—" before the label.
   */
  withDash?: boolean;
  as?: "div" | "span" | "p" | "h2" | "h3";
};

/**
 * Small caps editorial eyebrow. Inter 500 / 11px / 0.32em tracking / uppercase.
 * Default color is brass on light surfaces; override via className for dark.
 */
export default function Eyebrow({
  children,
  className = "text-brass",
  withDash = false,
  as: Tag = "div",
}: EyebrowProps) {
  return (
    <Tag
      className={`font-body text-[11px] font-medium tracking-[0.32em] uppercase ${className}`}
    >
      {withDash ? <span aria-hidden="true">— </span> : null}
      {children}
    </Tag>
  );
}
