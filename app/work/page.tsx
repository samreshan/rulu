import { SectionHeading } from "@/components/section-heading";
import { WorkGallery } from "@/components/work-gallery";
import { getWorkEntries } from "@/lib/mdx";

export const revalidate = 3600;

export const metadata = {
  title: "Work",
  description: "Case studies demonstrating how design drives clarity and measurable outcomes.",
};

export default async function WorkPage() {
  const works = await getWorkEntries();

  return (
    <div className="space-y-12 pt-12">
      <SectionHeading title="Work" eyebrow="Proof">
        Select collaborations where strategy, systems, and craft brought traction. Filter by focus to explore the breadth of the
        practice.
      </SectionHeading>
      <WorkGallery works={works} />
    </div>
  );
}
