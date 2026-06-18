import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/container";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-frame/10 bg-cream/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg tracking-tightish text-ink transition-colors hover:text-terracotta"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href} className="hidden sm:block">
                <Link
                  href={item.href}
                  className="text-ink/70 transition-colors hover:text-terracotta"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={site.resumeHref}
                className="rounded-full border border-frame/20 px-4 py-1.5 text-ink transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Résumé
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
