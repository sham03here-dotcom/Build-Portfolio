import Image from "next/image";
import type { CaseImage } from "@/types";

type Props = {
  /** Omitted for case studies that open directly on the intro. */
  image?: CaseImage;
};

/**
 * Full-bleed case-study hero band. The artwork (exported from Figma) carries
 * its own background, device mockup and floating detail cards.
 */
export function CaseHero({ image }: Props) {
  if (!image) return null;
  return (
    <section>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        sizes="100vw"
        className="h-auto w-full"
      />
    </section>
  );
}
