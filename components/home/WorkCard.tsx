import Link from "next/link";
import Image from "next/image";
import type { Accent, Project } from "@/types";
import { Tag } from "@/components/ui/Tag";

/**
 * Tag-pill fill per tile: white on saturated tiles, dark on light tiles.
 * (The tile art itself — gradient + device — is a designer-exported SVG that
 * fills the card; only the tags are HTML, for accessibility.)
 */
const pillClass: Record<Accent, string> = {
  green: "bg-white/20",
  blue: "bg-white/20",
  orange: "bg-white/20",
  indigo: "bg-black/20",
  yellow: "bg-black/[0.08]",
};

type Props = { project: Project };

/** A single Works-grid tile linking to its case study. */
export function WorkCard({ project }: Props) {
  const { slug, tags, accent, thumb, thumbAlt } = project;

  return (
    <Link
      href={`/work/${slug}`}
      className="group relative block aspect-[686/420] overflow-hidden"
      aria-label={project.title}
    >
      {/* full-bleed card art (686×420 SVG exported from Figma) */}
      <Image
        src={thumb}
        alt={thumbAlt}
        fill
        unoptimized
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        sizes="(max-width: 768px) 100vw, 45vw"
      />

      {/* tags — absolute top-left; on card hover they morph smoothly into full pills */}
      <div className="absolute left-5 top-5 z-10 flex flex-wrap gap-[11px]">
        {tags.map((tag) => (
          <Tag
            key={tag}
            className={`${pillClass[accent]} transition-[border-radius] duration-500 ease-in-out group-hover:rounded-[var(--radius-tag-hover)] motion-reduce:transition-none motion-reduce:group-hover:rounded-[var(--radius-tag)]`}
          >
            {tag}
          </Tag>
        ))}
      </div>
    </Link>
  );
}
