import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

const milestones = [
  {
    year: "2016",
    title: "Began designing interfaces",
    description: "Started translating community ideas into simple mobile products while studying engineering.",
  },
  {
    year: "2018",
    title: "Joined a startup as founding designer",
    description: "Built the product design practice from zero — shipping the first MVP in eight weeks.",
  },
  {
    year: "2020",
    title: "Expanded into strategy and systems",
    description: "Led cross-functional squads aligning brand, product, and service touchpoints across channels.",
  },
  {
    year: "2023",
    title: "Independent studio",
    description: "Partnering with founders and teams to design clarity across product, brand, and operations.",
  },
];

const principles = [
  "Design reveals the system behind the surface.",
  "Momentum beats perfection — ship to learn.",
  "Every interaction should earn trust.",
  "Clarity is an act of empathy.",
];

export const metadata = {
  title: "About",
  description: "Meet Samreshan Sahani — a designer blending systems thinking with human-centered craft.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pt-12">
      <SectionHeading title="Epilogue" eyebrow="About">
        I design clarity — not as decoration, but direction. My work braids design, strategy, and systems thinking to help
        teams move from ambiguity to momentum.
      </SectionHeading>

      <section className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-night/10 bg-white/60">
          <Image src="/portrait.svg" alt="Samreshan Sahani" fill className="object-cover" />
        </div>
        <div className="space-y-6 text-lg text-night/70">
          <p>
            I grew up deconstructing products to understand how they worked — radios, interfaces, organizations. That curiosity
            led me to design, where the job is to make sense of complexity and translate it into experiences people trust.
          </p>
          <p>
            Over the last decade I’ve led design across early-stage startups and growth teams, guiding founders through brand
            positioning, product strategy, and service design. I thrive at the intersection of systems and storytelling.
          </p>
          <p>
            When not designing, you’ll find me sketching service ecosystems, teaching design thinking, or exploring the hills
            around Kathmandu.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-night">Journey</h2>
        <div className="space-y-6">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="grid gap-4 rounded-2xl border border-night/10 bg-white/70 p-6 md:grid-cols-[120px_1fr]">
              <p className="text-xs uppercase tracking-[0.3em] text-night/40">{milestone.year}</p>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-night">{milestone.title}</h3>
                <p className="text-night/70">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-night">Principles</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {principles.map((principle) => (
            <li key={principle} className="rounded-2xl border border-night/10 bg-white/70 p-6 text-night/80">
              {principle}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-night/10 bg-white/80 p-8 text-night">
        <h2 className="text-2xl font-semibold">Let’s collaborate</h2>
        <p className="mt-3 text-lg text-night/70">
          I partner with founders, product teams, and leaders navigating pivotal moments — new ventures, rebrands, platform
          redesigns, or service overhauls. If you need clarity, I can help.
        </p>
        <a href="#contact" className="mt-6 inline-flex rounded-full border border-night/20 px-5 py-2 text-sm uppercase tracking-[0.25em] text-night/80 transition-colors hover:border-night/40 hover:text-night">
          Start a project
        </a>
      </section>
    </div>
  );
}
