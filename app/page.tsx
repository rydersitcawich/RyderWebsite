import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <Container>
          <p className="text-sm uppercase tracking-[0.2em] text-oak">
            {site.role}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.1] tracking-tightish text-ink sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/75">
            {site.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <Link
              href="#work"
              className="rounded-full bg-walnut px-5 py-2.5 text-paper transition-colors hover:bg-ink"
            >
              See selected work
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-frame/20 px-5 py-2.5 text-ink transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section id="work" className="scroll-mt-20 py-16">
        <Container>
          <SectionHeading eyebrow="Selected work" title="Things I've built" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 py-16">
        <Container>
          <SectionHeading eyebrow="Experience" title="Where I've worked" />
          <ol className="space-y-10">
            {experience.map((job) => (
              <li
                key={`${job.company}-${job.role}`}
                className="grid gap-2 border-t border-frame/10 pt-8 sm:grid-cols-[1fr_2fr] sm:gap-8"
              >
                <div>
                  <h3 className="font-serif text-xl text-ink">{job.company}</h3>
                  <p className="mt-1 text-sm text-ink/70">{job.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-oak">
                    {job.period}
                  </p>
                  <p className="text-xs text-ink/50">{job.location}</p>
                </div>
                <ul className="space-y-3">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="relative pl-5 text-ink/80 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-olive"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 py-16">
        <Container>
          <SectionHeading eyebrow="About" title="A little more" />
          <div className="grid gap-10 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] sm:items-start sm:gap-12">
            <div className="order-2 max-w-prose space-y-5 text-lg leading-relaxed text-ink/80 sm:order-1">
              {site.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {site.portrait && (
              <div className="order-1 sm:order-2">
                <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-frame/10 bg-paper">
                  <Image
                    src={site.portrait.src}
                    alt={site.portrait.alt}
                    fill
                    sizes="(min-width: 640px) 20rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
