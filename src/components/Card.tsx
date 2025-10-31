import { ReactNode } from "react";

export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card transition-transform duration-300 hover:-translate-y-0.5 ${className}`}>{children}</div>;
}


