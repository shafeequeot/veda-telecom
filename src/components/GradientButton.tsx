import { ReactNode } from "react";

export default function GradientButton({ children, href, className = "" }: { children: ReactNode; href: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 font-semibold text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-sky-300 bg-linear-to-r from-sky-400 to-blue-900 hover:opacity-95 ${className}`}
    >
      {children}
    </a>
  );
}







