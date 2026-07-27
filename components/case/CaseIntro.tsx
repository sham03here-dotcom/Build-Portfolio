import type { CaseStudy } from "@/types";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  study: CaseStudy;
};

/**
 * Case-study opener: mono eyebrow, display title, standfirst paragraph and
 * the role/scope/platform meta row.
 */
export function CaseIntro({ study }: Props) {
  return (
    <header>
      <Reveal>
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-label">
          {study.eyebrow}
        </p>
        <h1 className="mt-5 whitespace-pre-line font-sans text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-[-0.01em] text-ink">
          {study.title}
        </h1>
        <p className="mt-7 max-w-[40rem] text-xl leading-relaxed text-muted">
          {study.intro}
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {study.meta.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-sm uppercase tracking-[0.2em] text-label">
                {m.label}
              </dt>
              <dd className="mt-2 text-base text-ink">{m.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </header>
  );
}
