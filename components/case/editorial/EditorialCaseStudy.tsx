import Image from "next/image";
import type { CaseStudy, CaseSection, CaseImage, NoteTone } from "@/types";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { GalleryGrid } from "@/components/case/GalleryGrid";
import { PaletteRow } from "@/components/case/PaletteRow";
import { LiveCta } from "@/components/case/LiveCta";
import { LiveEmbed } from "@/components/case/LiveEmbed";
import { CaseSideNav, type NavItem } from "./CaseSideNav";

/* ------------------------------------------------------------------ helpers */

/** Section types that act as top-level nav anchors (carry a section eyebrow). */
const ANCHOR_TYPES = new Set([
  "text",
  "panel",
  "comparison",
  "takeaways",
  "list",
  "columns",
  "figure",
  "gallery",
]);

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleCase(s: string): string {
  return s
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** An eyebrow is present on this section (narrowing helper). */
function sectionEyebrow(s: CaseSection): string | undefined {
  return "eyebrow" in s ? s.eyebrow : undefined;
}

/** Anchor id for a nav-eligible section, else undefined. Sub-step eyebrows
 *  ("01 / …", "PHASE / 01") carry a slash and are never nav anchors. */
function anchorId(s: CaseSection): string | undefined {
  const eb = sectionEyebrow(s);
  if (!eb || eb.includes("/") || !ANCHOR_TYPES.has(s.type)) return undefined;
  return slugify(eb);
}

function buildNav(sections: CaseSection[]): NavItem[] {
  const items: NavItem[] = [];
  const seen = new Set<string>();
  for (const s of sections) {
    const id = anchorId(s);
    const eb = sectionEyebrow(s);
    if (!id || !eb || seen.has(id)) continue;
    seen.add(id);
    items.push({ id, label: titleCase(eb) });
  }
  return items;
}

const noteBg: Record<NoteTone, string> = {
  blue: "bg-note-blue",
  purple: "bg-note-purple",
  yellow: "bg-note-yellow",
};

/* ------------------------------------------------------------- shared pieces */

function Eyebrow({ children }: { children: string }) {
  if (!children) return null;
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{children}</p>
  );
}

function Heading({ children }: { children: string }) {
  return (
    <h2 className="mt-4 whitespace-pre-line font-sans text-[1.625rem] font-normal leading-snug tracking-[-0.015em] text-ink">
      {children}
    </h2>
  );
}

function Body({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 40)} className="mt-5 text-base leading-[1.75] text-body">
          {p}
        </p>
      ))}
    </>
  );
}

/** Image contained on a warm tint panel, centered — for mockups/screens. */
function Figure({ image, className }: { image: CaseImage; className?: string }) {
  return (
    <div
      className={cn(
        "flex justify-center overflow-hidden rounded-none bg-callout px-4 py-8 md:px-8 md:py-10",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 768px) 640px, 100vw"
        className="h-auto max-h-[78vh] w-auto max-w-full"
      />
    </div>
  );
}

/* --------------------------------------------------------------- one section */

function Section({ section }: { section: CaseSection }) {
  const s = section;
  switch (s.type) {
    case "text":
      return (
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Heading>{s.title}</Heading>
          <Body paragraphs={s.body} />
        </Reveal>
      );

    case "quote":
      return (
        <Reveal>
          <div className="rounded-none bg-callout px-6 py-6 md:px-8 md:py-7">
            <p className="text-[1.0625rem] leading-relaxed text-ink/80">{s.text}</p>
          </div>
        </Reveal>
      );

    case "stickies":
      return (
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {s.notes.map((n) => (
              <div
                key={n.text.slice(0, 40)}
                className={cn(
                  "rounded-none p-5 text-sm leading-relaxed whitespace-pre-line text-ink",
                  noteBg[n.tone],
                )}
              >
                {n.text}
              </div>
            ))}
          </div>
        </Reveal>
      );

    case "panel":
      return (
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Heading>{s.title}</Heading>
          <Body paragraphs={s.body} />
          <Figure image={s.image} className="mt-8" />
        </Reveal>
      );

    case "figure":
      return (
        <Reveal>
          {s.eyebrow && <Eyebrow>{s.eyebrow}</Eyebrow>}
          {s.title && <Heading>{s.title}</Heading>}
          {s.body && <Body paragraphs={s.body} />}
          <Figure image={s.image} className="mt-8" />
        </Reveal>
      );

    case "move":
      return (
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Heading>{s.title}</Heading>
          <Body paragraphs={s.body} />
          <Figure image={s.image} className="mt-8" />
        </Reveal>
      );

    case "comparison":
      return (
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Heading>{s.title}</Heading>
          <Body paragraphs={s.body} />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { side: s.before, tint: "bg-compare-before" },
              { side: s.after, tint: "bg-compare-after" },
            ].map(({ side, tint }) => (
              <div key={side.label} className={cn("rounded-none p-6", tint)}>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink/70">
                  {side.label}
                </p>
                {side.title && (
                  <h3 className="mt-3 text-lg font-medium text-ink">{side.title}</h3>
                )}
                <p className="mt-3 text-[0.95rem] leading-relaxed text-body">{side.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      );

    case "list":
      return (
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Heading>{s.title}</Heading>
          <Body paragraphs={s.body} />
          <ol className="mt-8 overflow-hidden rounded-none bg-callout px-6 md:px-8">
            {s.items.map((it, i) => (
              <li
                key={it.title}
                className="grid grid-cols-[auto_1fr] gap-x-5 py-6 not-first:border-t not-first:border-stroke"
              >
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="whitespace-pre-line text-lg font-medium text-ink">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-body">{it.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      );

    case "columns":
      return (
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Heading>{s.title}</Heading>
          <Body paragraphs={s.body} />
          <div
            className={cn(
              "mt-8 grid grid-cols-1 gap-4",
              s.items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3",
            )}
          >
            {s.items.map((it) => (
              <div key={it.title} className="rounded-none bg-callout p-6">
                <h3 className="whitespace-pre-line text-lg font-medium text-ink">
                  {it.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-body">{it.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      );

    case "takeaways":
      return (
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <ol className="mt-8">
            {s.items.map((it, i) => (
              <li
                key={it.title}
                className="grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-6 gap-y-3 py-10 not-first:border-t not-first:border-stroke md:grid-cols-[7rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-x-12 md:py-12"
              >
                <span
                  aria-hidden
                  className="font-sans text-5xl font-light leading-none text-ink/15 md:text-[5rem]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="whitespace-pre-line font-sans text-2xl font-normal leading-snug tracking-[-0.015em] text-ink md:text-[1.75rem]">
                  {it.title}
                </h3>
                <p className="col-span-2 text-base leading-relaxed text-body md:col-span-1 md:col-start-3 md:pt-1">
                  {it.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      );

    case "note":
      return (
        <Reveal>
          <div className="border-t border-stroke pt-10">
            <p className="text-xl font-medium leading-snug text-ink">{s.lead}</p>
            <p className="mt-4 text-base leading-[1.75] text-body">{s.body}</p>
          </div>
        </Reveal>
      );

    case "gallery": {
      const hasHead = Boolean(s.eyebrow || s.title || s.body);
      return (
        <>
          {hasHead && (
            <Reveal>
              {s.eyebrow && <Eyebrow>{s.eyebrow}</Eyebrow>}
              {s.title && <Heading>{s.title}</Heading>}
              {s.body && <Body paragraphs={s.body} />}
            </Reveal>
          )}
          {/* GalleryGrid self-reveals; brand photos show full-width, no tint */}
          <GalleryGrid
            columns={s.columns}
            images={s.images}
            className={hasHead ? "mt-8" : undefined}
          />
        </>
      );
    }

    case "palette":
      return <PaletteRow colors={s.colors} />;

    case "cta":
      return (
        <LiveCta
          label={s.label}
          href={s.href}
          linkText={s.linkText}
          note={s.note}
          keys={s.keys}
        />
      );

    case "embed":
      return (
        <LiveEmbed
          src={s.src}
          title={s.title}
          displayUrl={s.displayUrl}
          note={s.note}
          keys={s.keys}
          placeholder={s.placeholder}
        />
      );

    default:
      return null;
  }
}

/* --------------------------------------------------------------------- shell */

type Props = { study: CaseStudy };

/**
 * Editorial ("luma-style") long-read layout: a warm-paper page with a sticky
 * section index in the left rail and a single ~640px reading column. Used by
 * the Wallet (epayhub) case study; keeps the site's grotesque/mono type.
 */
export function EditorialCaseStudy({ study }: Props) {
  const nav = buildNav(study.sections);

  // First anchor gets a tighter top gap (it follows the meta block); later
  // anchors and continuation blocks get the full section rhythm.
  let firstAnchorSeen = false;

  return (
    <div className="bg-paper">
      {/* Same container as SiteHeader / SiteFooter so the left rail lines up
          with the footer's "NICE TO MEET YOU" margin. */}
      <div className="mx-auto w-full max-w-[1392px] px-6 py-12 md:px-[60px] md:py-16">
        <div className="md:grid md:grid-cols-[11rem_minmax(0,1fr)] md:gap-x-16 lg:gap-x-24">
          <CaseSideNav items={nav} />

          <article className="min-w-0">
            {/* Back link for mobile (sidebar is hidden there) */}
            <a
              href="/"
              className="mb-8 inline-flex items-center gap-1.5 text-[0.95rem] text-muted md:hidden"
            >
              <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-4">
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </a>

            {study.hero && (
              <Reveal className="overflow-hidden rounded-none">
                <Image
                  src={study.hero.src}
                  alt={study.hero.alt}
                  width={study.hero.width}
                  height={study.hero.height}
                  priority
                  /* The article column, not the viewport: the 1392px container
                     less its 60px gutters, the 11rem side-nav and the gap —
                     1000px once the container caps out. Declaring 640px here
                     had the browser upscaling a 640px file into that slot. */
                  sizes="(min-width: 1392px) 1000px, (min-width: 768px) calc(100vw - 360px), calc(100vw - 48px)"
                  className="h-auto w-full"
                />
              </Reveal>
            )}

            <Reveal delay={0.05}>
              <h1 className="mt-10 whitespace-pre-line font-sans text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
                {study.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-body">
                {study.intro}
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {study.meta.map((m) => (
                  <div key={m.label}>
                    <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      {m.label}
                    </dt>
                    <dd className="mt-2 text-base text-ink">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {study.sections.map((s, i) => {
              const id = anchorId(s);
              const isAnchor = Boolean(id);
              const gap = isAnchor
                ? firstAnchorSeen
                  ? "mt-20 md:mt-28"
                  : "mt-16 md:mt-20"
                : "mt-10 md:mt-12";
              if (isAnchor) firstAnchorSeen = true;
              return (
                <section
                  key={`${s.type}-${i}`}
                  id={id}
                  className={cn(gap, isAnchor && "scroll-mt-24")}
                >
                  <Section section={s} />
                </section>
              );
            })}
          </article>
        </div>
      </div>
    </div>
  );
}
