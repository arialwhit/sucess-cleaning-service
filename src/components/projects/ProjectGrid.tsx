"use client";

import { useMemo, useState } from "react";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { projects } from "@/content/projects";

const chips = ["All", "Office", "Restaurant", "Hotel", "Event", "End of Tenancy", "After Builders"];

export function ProjectGrid() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () =>
      projects.filter((project) => {
        if (filter === "All") return true;
        return project.service.toLowerCase().includes(filter.toLowerCase());
      }),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => setFilter(chip)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              filter === chip ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-line hover:bg-navy-soft"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {visible.map((project) => (
          <article key={project.slug} className="flex flex-col">
            <BeforeAfter before={project.before} after={project.after} alt={project.title} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-teal">
              {project.service} · {project.location}
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold text-ink">{project.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-ink">Challenge</dt>
                <dd className="text-muted">{project.challenge}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Solution</dt>
                <dd className="text-muted">{project.solution}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Result</dt>
                <dd className="text-muted">{project.result}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      {visible.length === 0 ? <p className="mt-10 text-muted">No projects in this category yet.</p> : null}
    </div>
  );
}
