import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "classnames";
import { ImpactGrid } from "@/components/impact-grid";
import { QuoteCard } from "@/components/quote-card";
import { getWorkBySlug, getWorkEntries } from "@/lib/mdx";
import type { WorkFrontmatter } from "@/lib/mdx";

export const revalidate = 3600;

export async function generateStaticParams() {
  const works = await getWorkEntries();
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const work = (await getWorkEntries()).find((item) => item.slug === params.slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.summary,
    openGraph: {
      title: work.title,
      description: work.summary,
      images: [{ url: work.cover }],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = await getWorkBySlug(params.slug).catch(() => ({ frontmatter: null, content: null } as any));

  if (!frontmatter || !content) {
    notFound();
  }

  const gallery = (frontmatter.gallery ?? []) as NonNullable<WorkFrontmatter["gallery"]>;

  return (
    <article className="space-y-16 pt-12">
      <header className="space-y-6">
        <Link href="/work" className="text-sm text-night/60 hover:text-night">
          ← Back to work
        </Link>
        <p className="text-xs uppercase tracking-[0.35em] text-night/40">Case Study</p>
        <h1 className="text-4xl font-semibold md:text-5xl">{frontmatter.title}</h1>
        <p className="text-xl text-night/70">{frontmatter.logline}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-night/50">
          <span>{frontmatter.timeline}</span>
          <span>•</span>
          <span>{frontmatter.role.join(" / ")}</span>
        </div>
      </header>

      <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-night/10 bg-white/60 shadow-lg">
        <Image src={frontmatter.cover} alt={frontmatter.title} fill className="object-cover" />
      </div>

      <section className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-night">Context</h2>
          <p className="text-lg text-night/70">{frontmatter.context}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-night">Strategy</h2>
          <p className="text-lg text-night/70">{frontmatter.strategy}</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-night">Making</h2>
        <div className="prose max-w-none">{content}</div>
      </section>

      {gallery.length ? (
        <section className="grid gap-6 md:grid-cols-2">
          {gallery.map((item: (typeof gallery)[number]) => (
            <figure key={item.src} className="space-y-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-night/10 bg-white/60">
                <Image src={item.src} alt={item.caption ?? frontmatter.title} fill className="object-cover" />
              </div>
              {item.caption && <figcaption className="text-sm text-night/60">{item.caption}</figcaption>}
            </figure>
          ))}
        </section>
      ) : null}

      <ImpactGrid impact={frontmatter.impact} />
      <QuoteCard quote={frontmatter.quote} />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-night">Reflection</h2>
        <p className="text-lg text-night/70">{frontmatter.reflection}</p>
      </section>

      <div className="rounded-3xl border border-night/10 bg-night px-8 py-10 text-ivory">
        <h3 className="text-2xl font-semibold">Want a similar result?</h3>
        <p className="mt-3 text-lg text-ivory/80">
          Every engagement begins with listening. Share your challenge and we’ll map the design moves that bring clarity.
        </p>
        <Link
          href="#contact"
          className={clsx(
            "mt-6 inline-flex rounded-full border border-ivory px-5 py-2 text-sm uppercase tracking-[0.25em] text-ivory",
            "transition-transform duration-200 hover:-translate-y-0.5"
          )}
        >
          Start a project
        </Link>
      </div>
    </article>
  );
}
