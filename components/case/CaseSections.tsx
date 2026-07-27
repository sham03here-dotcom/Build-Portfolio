import Image from "next/image";
import type { CaseSection } from "@/types";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/case/SectionHeader";
import { MediaPanel } from "@/components/case/MediaPanel";
import { TextImageBlock } from "@/components/case/TextImageBlock";
import { StickyNotesRow } from "@/components/case/StickyNotesRow";
import { ComparisonBlock } from "@/components/case/ComparisonBlock";
import { TakeawaysList } from "@/components/case/TakeawaysList";
import { TitledList } from "@/components/case/TitledList";
import { ColumnCards } from "@/components/case/ColumnCards";
import { GalleryGrid } from "@/components/case/GalleryGrid";
import { PaletteRow } from "@/components/case/PaletteRow";
import { LiveCta } from "@/components/case/LiveCta";

type Props = {
  sections: CaseSection[];
};

function key(section: CaseSection, i: number): string {
  return `${section.type}-${i}`;
}

/**
 * Renders a case study's section list in order. "move" panels stack
 * edge-to-edge (no top margin) so alternating tones touch, as in Figma.
 */
export function CaseSections({ sections }: Props) {
  return (
    <>
      {sections.map((s, i) => {
        switch (s.type) {
          case "text":
            return (
              <section key={key(s, i)} className="mt-28 md:mt-40">
                <SectionHeader eyebrow={s.eyebrow} title={s.title} body={s.body} />
              </section>
            );
          case "quote":
            return (
              <Reveal key={key(s, i)} className="mt-20 md:mt-28">
                <QuoteBlock>
                  <p className="text-xl italic leading-relaxed text-ink">
                    {s.text}
                  </p>
                </QuoteBlock>
              </Reveal>
            );
          case "stickies":
            return <StickyNotesRow key={key(s, i)} notes={s.notes} />;
          case "panel":
            return (
              <section key={key(s, i)} className="mt-28 md:mt-40">
                <SectionHeader eyebrow={s.eyebrow} title={s.title} body={s.body} />
                <MediaPanel image={s.image} />
              </section>
            );
          case "figure":
            return (
              <section key={key(s, i)} className="mt-28 md:mt-40">
                <SectionHeader eyebrow={s.eyebrow} title={s.title} body={s.body} />
                <Reveal delay={0.12} className="mt-12 md:mt-16">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    width={s.image.width}
                    height={s.image.height}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="max-w-full"
                  />
                </Reveal>
              </section>
            );
          case "list":
            return (
              <section key={key(s, i)} className="mt-28 md:mt-40">
                <SectionHeader eyebrow={s.eyebrow} title={s.title} body={s.body} />
                <TitledList items={s.items} numbered={s.numbered} />
              </section>
            );
          case "columns":
            return (
              <section key={key(s, i)} className="mt-28 md:mt-40">
                <SectionHeader eyebrow={s.eyebrow} title={s.title} body={s.body} />
                <ColumnCards items={s.items} />
              </section>
            );
          case "move":
            return (
              <div
                key={key(s, i)}
                className={sections[i - 1]?.type === "move" ? "" : "mt-12 md:mt-14"}
              >
                <TextImageBlock
                  eyebrow={s.eyebrow}
                  title={s.title}
                  body={s.body}
                  image={s.image}
                  mediaSide={s.mediaSide}
                  tone={s.tone}
                  wide={s.wide}
                />
              </div>
            );
          case "comparison":
            return (
              <section key={key(s, i)} className="mt-28 md:mt-40">
                <SectionHeader eyebrow={s.eyebrow} title={s.title} body={s.body} />
                <ComparisonBlock before={s.before} after={s.after} tone={s.tone} />
              </section>
            );
          case "takeaways":
            return (
              <section key={key(s, i)} className="mt-28 md:mt-40">
                <Reveal>
                  <p className="font-mono text-sm uppercase tracking-[0.2em] text-label">
                    {s.eyebrow}
                  </p>
                </Reveal>
                <TakeawaysList items={s.items} />
              </section>
            );
          case "gallery":
            return (
              <section
                key={key(s, i)}
                className={
                  s.eyebrow || sections[i - 1]?.type !== "gallery"
                    ? "mt-28 md:mt-40"
                    : "mt-4 md:mt-5"
                }
              >
                {s.eyebrow && (
                  <SectionHeader eyebrow={s.eyebrow} title={s.title} body={s.body} />
                )}
                <GalleryGrid
                  columns={s.columns}
                  images={s.images}
                  className={s.eyebrow ? "mt-12 md:mt-14" : undefined}
                />
              </section>
            );
          case "palette":
            return (
              <div key={key(s, i)} className="mt-10 md:mt-14">
                <PaletteRow colors={s.colors} />
              </div>
            );
          case "cta":
            return (
              <LiveCta
                key={key(s, i)}
                label={s.label}
                href={s.href}
                linkText={s.linkText}
                note={s.note}
                keys={s.keys}
              />
            );
          case "note":
            return (
              <Reveal key={key(s, i)} className="mt-24 md:mt-32">
                <QuoteBlock>
                  <p className="text-xl italic leading-relaxed text-ink">{s.lead}</p>
                  <p className="mt-3 max-w-[54rem] text-base italic leading-relaxed text-muted">
                    {s.body}
                  </p>
                </QuoteBlock>
              </Reveal>
            );
        }
      })}
    </>
  );
}
