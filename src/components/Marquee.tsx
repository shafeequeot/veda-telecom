import { ReactNode } from "react";

export default function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-8 animate-marquee whitespace-nowrap will-change-transform">
        {children}
        {children}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>
    </div>
  );
}



