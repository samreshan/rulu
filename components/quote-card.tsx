import type { WorkFrontmatter } from "@/lib/mdx";

export function QuoteCard({ quote }: { quote?: WorkFrontmatter["quote"] }) {
  if (!quote?.text) return null;

  return (
    <figure className="rounded-3xl border border-night/10 bg-white/70 p-8">
      <blockquote className="text-2xl font-serif text-night/80">“{quote.text}”</blockquote>
      {quote.author && <figcaption className="mt-4 text-sm uppercase tracking-[0.25em] text-night/40">{quote.author}</figcaption>}
    </figure>
  );
}
