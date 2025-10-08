import Link from "next/link";
import { notFound } from "next/navigation";
import { getEssayBySlug, getEssays } from "@/lib/mdx";

export const revalidate = 3600;

export async function generateStaticParams() {
  const beliefs = await getEssays("thesis");
  return beliefs.map((belief) => ({ slug: belief.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const beliefs = await getEssays("thesis");
  const belief = beliefs.find((item) => item.slug === params.slug);
  if (!belief) return {};
  return {
    title: belief.title,
    description: belief.summary,
  };
}

export default async function ThesisEssayPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = await getEssayBySlug("thesis", params.slug).catch(
    () => ({ frontmatter: null, content: null } as any)
  );

  if (!frontmatter || !content) {
    notFound();
  }

  return (
    <article className="space-y-12 pt-12">
      <Link href="/thesis" className="text-sm text-night/60 hover:text-night">
        ← Back to thesis
      </Link>
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-night/40">Belief</p>
        <h1 className="text-4xl font-semibold text-night md:text-5xl">{frontmatter.title}</h1>
        {frontmatter.summary && <p className="text-lg text-night/70">{frontmatter.summary}</p>}
      </header>
      <div className="prose max-w-3xl text-night">{content}</div>
    </article>
  );
}
