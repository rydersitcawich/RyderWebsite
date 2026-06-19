import { site } from "@/content/site";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-24 border-t border-line/10 py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-prose">
          <h2 className="font-serif text-xl text-ink">Get in touch</h2>
          <p className="mt-2 text-sm text-ink/70">
            Open to conversations about systems, ethics, and cool opportunities.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-block text-navy underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </div>
        <nav aria-label="Social">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {site.socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="text-ink/70 transition-colors hover:text-navy"
                  {...(s.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="mt-10">
        <p className="text-xs text-ink/40">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </Container>
    </footer>
  );
}
