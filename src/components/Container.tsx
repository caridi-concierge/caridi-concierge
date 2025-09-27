import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-screen-2xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}