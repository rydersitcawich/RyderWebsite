export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-[0.2em] text-navy">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl tracking-tightish text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
