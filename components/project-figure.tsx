import Image from "next/image";
import { type ProjectImage } from "@/content/projects";

export function ProjectFigure({
  image,
  sizes,
  aspect = "aspect-[16/9]",
  priority = false,
}: {
  image: ProjectImage;
  sizes: string;
  /** Tailwind aspect-ratio class for the frame. */
  aspect?: string;
  priority?: boolean;
}) {
  const isContain = image.fit === "contain";
  return (
    <figure>
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-frame/10 bg-paper`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={isContain ? "object-contain p-3" : "object-cover"}
        />
      </div>
      {image.caption && (
        <figcaption className="mt-3 text-sm text-ink/55">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
