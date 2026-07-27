import { Reveal } from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title?: string;
  body?: string[];
};

/**
 * Shared case-section opener: mono eyebrow, display title and optional
 * body paragraphs. Used by every text-led section variant.
 */
export function SectionHeader({ eyebrow, title, body }: Props) {
  return (
    <Reveal>
      {eyebrow && (
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-label">{eyebrow}</p>
      )}
      {title && (
        <h2 className="whitespace-pre-line font-sans text-[clamp(1.375rem,2.4vw,1.625rem)] leading-snug tracking-[-0.01em] text-ink not-first:mt-5">
          {title}
        </h2>
      )}
      {body?.map((p) => (
        <p
          key={p.slice(0, 32)}
          className="mt-6 max-w-[54rem] text-base leading-relaxed text-muted"
        >
          {p}
        </p>
      ))}
    </Reveal>
  );
}
