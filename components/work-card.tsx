import Link from "next/link";
import Image from "next/image";
import type { WorkFrontmatter } from "@/lib/mdx";

export function WorkCard({ work }: { work: WorkFrontmatter }) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="group block overflow-hidden rounded-3xl border border-night/10 bg-white/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={work.cover}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-2 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-night/40">{work.tags.join(" • ")}</p>
        <h3 className="text-2xl font-semibold text-night">{work.title}</h3>
        <p className="text-night/70">{work.summary}</p>
        <span className="inline-flex items-center text-sm font-medium text-accent">Read case study →</span>
      </div>
    </Link>
  );
}
