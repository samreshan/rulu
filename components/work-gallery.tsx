"use client";

import { useState } from "react";
import type { WorkFrontmatter } from "@/lib/mdx";
import { WorkFilter } from "@/components/work-filter";
import { WorkCard } from "@/components/work-card";

export function WorkGallery({ works }: { works: WorkFrontmatter[] }) {
  const [filtered, setFiltered] = useState<WorkFrontmatter[]>(works);

  return (
    <div className="space-y-10">
      <WorkFilter works={works} onFilter={setFiltered} />
      <div className="grid gap-8 md:grid-cols-2">
        {filtered.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </div>
  );
}
