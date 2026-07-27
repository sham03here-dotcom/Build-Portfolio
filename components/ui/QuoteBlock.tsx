import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Full-width italic pull block on a light panel with a left rule —
 * used for the "How might we…" quote and the closing note of case studies.
 */
export function QuoteBlock({ children, className }: Props) {
  return (
    <div className={cn("border-l-[3px] border-rule bg-panel px-7 py-8 md:px-8", className)}>
      {children}
    </div>
  );
}
