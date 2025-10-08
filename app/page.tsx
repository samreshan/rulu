import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { WorkCard } from "@/components/work-card";
import { SectionHeading } from "@/components/section-heading";
import { getWorkEntries } from "@/lib/mdx";

export const revalidate = 3600;

export default async function HomePage() {
  const works = await getWorkEntries();
  const featured = works.slice(0, 3);

  return (
    <div className="space-y-24">
      <section className="flex flex-col gap-12 pt-12 md:flex-row md:items-end md:justify-between">
        <div className="space-y-6 md:max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-night/50">Prologue</p>
          <h1 className="text-5xl font-semibold leading-[1.1] md:text-6xl">
            I help founders turn ideas into designed clarity.
          </h1>
          <p className="text-xl text-night/70">
            Strategy, product, and brand design — crafted to work. I blend systems thinking with human-centered design to bring
            momentum to teams navigating ambiguity.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center rounded-full bg-night px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ivory transition-transform duration-200 hover:-translate-y-0.5"
            >
              See the work
            </Link>
            <Link href="#contact" className="inline-flex items-center text-sm font-medium text-night/70 hover:text-night">
              Start a project
            </Link>
          </div>
        </div>
        <div className="space-y-4 text-sm text-night/60 md:w-64">
          <p>
            “Design is not just what it looks like and feels like. Design is how it works.” — Steve Jobs. I design how it works.
          </p>
          <p>
            Currently based in Kathmandu, partnering with founders globally to craft products and experiences that earn trust.
          </p>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading title="Featured work" eyebrow="Proof">
          A glimpse at recent engagements where clarity unlocked traction.
        </SectionHeading>
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
        <div className="flex justify-end">
          <Link href="/work" className="inline-flex items-center text-sm font-medium text-night/70 hover:text-night">
            View all case studies
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title="Design thesis" eyebrow="Thesis">
          Principles that guide how I transform ambiguity into designed direction.
        </SectionHeading>
        <div className="flex flex-wrap gap-4 text-sm text-night/60">
          <Link href="/thesis" className="rounded-full border border-night/10 px-4 py-2 transition-colors hover:border-night/40 hover:text-night">
            Read the thesis
          </Link>
          <Link href="/method" className="rounded-full border border-night/10 px-4 py-2 transition-colors hover:border-night/40 hover:text-night">
            Explore the method
          </Link>
        </div>
      </section>
    </div>
  );
}
