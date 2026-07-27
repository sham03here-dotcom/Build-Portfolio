import Image from "next/image";
import type { CaseImage, PanelTone } from "@/types";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  body: string[];
  image: CaseImage;
  /** Which side the mockup sits on at desktop widths. */
  mediaSide: "left" | "right";
  tone: PanelTone;
  /** Breaks the panel out wider than the text column at large widths. */
  wide?: boolean;
};

/**
 * Numbered solution move: a full-width panel with the device mockup on one
 * side and eyebrow/title/body on the other. Panels stack edge-to-edge and
 * alternate tone, mirroring the Figma case layout.
 */
export function TextImageBlock({ eyebrow, title, body, image, mediaSide, tone, wide }: Props) {
  return (
    <section
      className={cn(
        tone === "dark" && "bg-panel-dark",
        tone === "light" && "bg-panel",
        wide && "lg:-mx-28",
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 items-center gap-12 py-14 md:py-16",
          tone === "plain" ? "px-0" : "px-6 md:px-20",
          // Wide (screen-heavy) panels split evenly; standard panels give the
          // text column the design's wider share (~300px media / ~442px text).
          wide
            ? "md:grid-cols-2 md:gap-10"
            : mediaSide === "left"
              ? "md:grid-cols-[minmax(0,8fr)_minmax(0,13fr)] md:gap-12"
              : "md:grid-cols-[minmax(0,13fr)_minmax(0,8fr)] md:gap-12",
        )}
      >
        <Reveal
          className={cn("flex justify-center", mediaSide === "right" && "md:order-2")}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 768px) 40vw, 80vw"
            className="h-auto max-h-[32rem] w-auto"
          />
        </Reveal>

        <Reveal delay={0.12} className={cn(mediaSide === "right" && "md:order-1")}>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-label">{eyebrow}</p>
          {/* xl+: only the design's hard line breaks apply — like the Figma
              layout, titles may run wider than the body-text column. */}
          <h3 className="mt-5 whitespace-pre-line font-sans text-xl leading-snug tracking-[-0.01em] text-ink xl:whitespace-pre">
            {title}
          </h3>
          {body.map((p) => (
            <p
              key={p.slice(0, 32)}
              className="mt-6 max-w-[28rem] text-base leading-relaxed text-muted"
            >
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
