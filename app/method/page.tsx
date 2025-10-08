import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

const phases = [
  {
    title: "Discover",
    description:
      "We begin by immersing in the reality of your customers and business. Research, listening sessions, and systems mapping uncover the friction beneath the brief.",
    artifact: {
      src: "/method/discover.svg",
      alt: "Journey map sketch",
    },
  },
  {
    title: "Decide",
    description:
      "Together we define the strategic spine: what matters most, which bets unlock momentum, and the design principles that focus the work.",
    artifact: {
      src: "/method/decide.svg",
      alt: "Strategy priorities",
    },
  },
  {
    title: "Design",
    description:
      "We translate strategy into tangible expressions — from service blueprints to product flows and brand systems — prototyping quickly to gather feedback.",
    artifact: {
      src: "/method/design.svg",
      alt: "Prototype screens",
    },
  },
  {
    title: "Deliver",
    description:
      "Launch with confidence. I collaborate with teams to operationalize design decisions, document systems, and ensure the experience continues to evolve.",
    artifact: {
      src: "/method/deliver.svg",
      alt: "Delivery checklist",
    },
  },
];

export const metadata = {
  title: "Method",
  description: "The operating system behind every engagement: Discover, Decide, Design, Deliver.",
};

export default function MethodPage() {
  return (
    <div className="space-y-12 pt-12">
      <SectionHeading title="How I work" eyebrow="Method">
        Design is a verb. This four-part cadence keeps teams aligned, momentum high, and outcomes measurable.
      </SectionHeading>
      <div className="space-y-12">
        {phases.map((phase) => (
          <section
            key={phase.title}
            className="grid gap-8 rounded-3xl border border-night/10 bg-white/70 p-8 md:grid-cols-[1.2fr_1fr]"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-night">{phase.title}</h2>
              <p className="text-lg text-night/70">{phase.description}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-night/10">
              <Image src={phase.artifact.src} alt={phase.artifact.alt} fill className="object-cover" />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
