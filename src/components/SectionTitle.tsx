import { ReactNode } from "react";

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: ReactNode }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center">
      <h2 className="headline">{title}</h2>
      {subtitle ? <p className="mt-3 subhead">{subtitle}</p> : null}
    </div>
  );
}



