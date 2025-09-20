import { ReactNode } from "react";
import { base, variants } from "./ButtonStyles";

type FormButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function FormButton({
  children,
  variant = "primary",
  className = "",
  type = "submit",
}: FormButtonProps) {
  return (
    <button
      type={type}
      className={[base, variants[variant], className].join(" ")}
    >
      {children}
    </button>
  );
}