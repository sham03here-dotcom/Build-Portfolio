import { cn } from "@/lib/cn";

type Props = {
  variant: "before" | "after";
  /** "neutral" swaps the red/green tints for grey panels. */
  tone?: "tinted" | "neutral";
  label: string;
  /** Optional heading between the label and body. */
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const fills = {
  tinted: { before: "bg-compare-before", after: "bg-compare-after" },
  neutral: { before: "bg-panel", after: "bg-panel-dark" },
};

/**
 * Comparison card pair: red/green tinted for before→after logic shifts,
 * or neutral greys for two-sided hand-offs, with a mono eyebrow label.
 */
export function CompareCard({
  variant,
  tone = "tinted",
  label,
  title,
  children,
  className,
}: Props) {
  return (
    <div className={cn("p-6 md:p-7", fills[tone][variant], className)}>
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-ink">{label}</p>
      {title && <h3 className="mt-5 text-xl font-medium text-ink">{title}</h3>}
      <p className="mt-4 text-base leading-relaxed text-muted">{children}</p>
    </div>
  );
}
