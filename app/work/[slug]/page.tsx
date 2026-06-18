import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ProjectFigure } from "@/components/project-figure";
import { projects, getProject } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <article className="py-16 sm:py-20">
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-1 text-sm text-ink/60 transition-colors hover:text-terracotta"
        >
          <span aria-hidden="true">←</span> Back to work
        </Link>

        <header className="mt-8 border-b border-frame/10 pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-oak">
            {project.period}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight tracking-tightish text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/75">
            {project.summary}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-frame/10 bg-paper px-3 py-1 text-xs text-walnut"
              >
                {tech}
              </li>
            ))}
          </ul>

          {project.links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-4 text-sm">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full bg-walnut px-5 py-2.5 text-paper transition-colors hover:bg-ink"
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Cover image */}
        {project.cover && (
          <div className="py-10">
            <ProjectFigure
              image={project.cover}
              sizes="(min-width: 1024px) 64rem, 100vw"
              aspect="aspect-[16/9]"
              priority
            />
          </div>
        )}

        {/* Highlights */}
        <section className="border-b border-frame/10 py-10">
          <h2 className="sr-only">Highlights</h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {project.highlights.map((highlight, i) => (
              <li
                key={i}
                className="rounded-xl bg-paper p-5 text-sm leading-relaxed text-ink/80"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        {/* Body sections */}
        <div className="py-10">
          {project.sections.map((section) => (
            <section key={section.heading} className="mb-12 last:mb-0">
              <h2 className="font-serif text-2xl tracking-tightish text-ink">
                {section.heading}
              </h2>
              <div className="mt-4 max-w-prose space-y-4 text-lg leading-relaxed text-ink/80">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="border-t border-frame/10 py-10">
            <h2 className="sr-only">Gallery</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.gallery.map((image) => (
                <ProjectFigure
                  key={image.src}
                  image={image}
                  sizes="(min-width: 640px) 32rem, 100vw"
                  aspect="aspect-[4/3]"
                />
              ))}
            </div>
          </section>
        )}

        <div className="border-t border-frame/10 pt-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1 text-sm text-terracotta transition-colors hover:text-walnut"
          >
            <span aria-hidden="true">←</span> Back to all work
          </Link>
        </div>
      </Container>
    </article>
  );
}
