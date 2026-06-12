"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects, ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters: Array<"All" | ProjectStatus> = ["All", "Ongoing", "Completed", "Upcoming"];

export function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.status === filter);

  return (
    <>
      <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={cn(
              "shrink-0 rounded-xl border px-5 py-3 text-sm font-semibold transition",
              filter === item ? "border-navy bg-navy text-white" : "border-[#dddddd] text-navy hover:border-navy",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </>
  );
}
