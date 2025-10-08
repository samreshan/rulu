import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { getEssays } from "@/lib/mdx";

export const revalidate = 3600;

export const metadata = {
  title: "Notes",
  description: "Short reflections on design, systems, and learning.",
};

export default async function NotesPage() {
  const notes = await getEssays("notes");

  return (
    <div className="space-y-12 pt-12">
      <SectionHeading title="Notes" eyebrow="Notebook">
        Dispatches from the studio — thoughts on design leadership, systems, and learning in public.
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className="group rounded-3xl border border-night/10 bg-white/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-night/40">Note</p>
            <h2 className="mt-4 text-2xl font-semibold text-night">{note.title}</h2>
            {note.summary && <p className="mt-3 text-night/70">{note.summary}</p>}
            <span className="mt-6 inline-flex items-center text-sm font-medium text-accent">Read note →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
