"use client";

import { useEffect, useMemo, useState } from "react";
import clsx from "classnames";
import type { WorkFrontmatter } from "@/lib/mdx";

const FILTERS = ["All", "Brand", "Product", "Strategy", "Systems"] as const;
type Filter = (typeof FILTERS)[number];

export function WorkFilter({ works, onFilter }: { works: WorkFrontmatter[]; onFilter: (filtered: WorkFrontmatter[]) => void }) {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return works;
    return works.filter((work) => work.tags.includes(active));
  }, [active, works]);

  useEffect(() => {
    onFilter(filtered);
  }, [filtered, onFilter]);

  return (
    <div className="flex flex-wrap gap-3">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={clsx(
            "rounded-full border px-4 py-2 text-sm transition-colors",
            active === filter
              ? "border-night bg-night text-ivory"
              : "border-night/20 text-night/60 hover:border-night/40 hover:text-night"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
