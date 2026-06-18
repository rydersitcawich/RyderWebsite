import Link from "next/link";
import { type Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-line/10 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-navy/40 hover:shadow-[0_12px_40px_-24px_rgba(26,26,26,0.45)] sm:p-8"
    >
      <p className="text-xs uppercase tracking-[0.18em] text-navy">
        {project.period}
      </p>
      <h3 className="mt-3 font-serif text-2xl tracking-tightish text-ink transition-colors group-hover:text-navy">
        {project.title}
      </h3>
      <p className="mt-3 text-ink/75">{project.tagline}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-line/15 bg-paper px-2.5 py-1 text-xs text-ink/65"
          >
            {tech}
          </li>
        ))}
      </ul>

      <span className="mt-6 inline-flex items-center gap-1 pt-2 text-sm font-medium text-navy">
        Read case study
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
