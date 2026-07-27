import { Reveal } from "@/components/motion/Reveal";
import { CompareCard } from "@/components/ui/CompareCard";

type Side = { label: string; title?: string; text: string };

type Props = {
  before: Side;
  after: Side;
  tone?: "tinted" | "neutral";
};

/** Before/after cards with a small connecting arrow at desktop. */
export function ComparisonBlock({ before, after, tone = "tinted" }: Props) {
  return (
    <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:mt-14 md:grid-cols-[1fr_auto_1.15fr] md:gap-8">
      <Reveal>
        <CompareCard
          variant="before"
          tone={tone}
          label={before.label}
          title={before.title}
          className="h-full"
        >
          {before.text}
        </CompareCard>
      </Reveal>
      <div aria-hidden className="hidden items-center text-2xl text-muted/60 md:flex">
        →
      </div>
      <Reveal delay={0.12}>
        <CompareCard
          variant="after"
          tone={tone}
          label={after.label}
          title={after.title}
          className="h-full"
        >
          {after.text}
        </CompareCard>
      </Reveal>
    </div>
  );
}
