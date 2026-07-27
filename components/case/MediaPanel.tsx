import Image from "next/image";
import type { CaseImage } from "@/types";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  image: CaseImage;
};

/**
 * Full-width light panel with a centered mockup — used for "current
 * experience" style exhibits that follow a SectionHeader.
 */
export function MediaPanel({ image }: Props) {
  return (
    <Reveal delay={0.12} className="mt-12 bg-panel px-6 py-12 md:mt-14 md:py-16">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 768px) 45vw, 90vw"
        className="mx-auto h-auto max-h-[30rem] w-auto"
      />
    </Reveal>
  );
}
