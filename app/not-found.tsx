import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="py-28">
      <Container>
        <p className="text-xs uppercase tracking-[0.2em] text-navy">404</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tightish text-ink">
          Nothing here
        </h1>
        <p className="mt-4 max-w-prose text-lg text-ink/70">
          That page doesn&apos;t exist (or moved). Let&apos;s get you back.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-navy px-5 py-2.5 text-sm text-surface transition-colors hover:bg-ink"
        >
          Back home
        </Link>
      </Container>
    </section>
  );
}
