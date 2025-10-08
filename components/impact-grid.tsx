import type { WorkFrontmatter } from "@/lib/mdx";

export function ImpactGrid({ impact }: { impact?: WorkFrontmatter["impact"] }) {
  if (!impact?.length) return null;

  return (
    <div className="grid gap-6 rounded-2xl border border-night/10 bg-white/70 p-6 md:grid-cols-3">
      {impact.map((item) => (
        <div key={item.label} className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-night/40">{item.label}</p>
          <p className="text-2xl font-semibold text-night">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
