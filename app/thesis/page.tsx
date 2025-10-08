import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { getEssays } from "@/lib/mdx";

export const revalidate = 3600;

export const metadata = {
  title: "Thesis",
  description: "Beliefs that guide Samreshan’s approach to designing clarity.",
};

export default async function ThesisPage() {
  const beliefs = await getEssays("thesis");

  return (
    <div className="space-y-12 pt-12">
      <SectionHeading title="Design Thesis" eyebrow="Thesis">
        Design is direction. These beliefs outline how I approach every engagement — balancing systems thinking with human
        reality.
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        {beliefs.map((belief) => (
          <Link
            key={belief.slug}
            href={`/thesis/${belief.slug}`}
            className="group flex h-full flex-col justify-between rounded-3xl border border-night/10 bg-white/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-night/40">Belief</p>
              <h2 className="text-2xl font-semibold text-night">{belief.title}</h2>
              {belief.summary && <p className="text-night/70">{belief.summary}</p>}
            </div>
            <span className="mt-6 inline-flex items-center text-sm font-medium text-accent">Read the essay →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
