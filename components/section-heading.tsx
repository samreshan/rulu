import { ReactNode } from "react";

export function SectionHeading({ title, eyebrow, children }: { title: string; eyebrow?: string; children?: ReactNode }) {
  return (
    <div className="space-y-3">
      {eyebrow && <p className="text-xs uppercase tracking-[0.35em] text-night/50">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold text-night md:text-4xl">{title}</h2>
      {children && <div className="max-w-2xl text-lg text-night/70">{children}</div>}
    </div>
  );
}
