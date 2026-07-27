import type { NoteTone } from "@/types";
import { cn } from "@/lib/cn";

const tones: Record<NoteTone, string> = {
  blue: "bg-note-blue",
  purple: "bg-note-purple",
  yellow: "bg-note-yellow",
};

type Props = {
  tone: NoteTone;
  children: React.ReactNode;
  className?: string;
};

/**
 * Square research sticky note. Text keeps its intentional line breaks
 * (whitespace-pre-line) so notes can carry a lead line + body.
 */
export function StickyNote({ tone, children, className }: Props) {
  return (
    <div
      className={cn(
        "aspect-square w-full max-w-[236px] p-5 text-[11.3px] leading-normal text-ink shadow-[0_12px_24px_rgba(31,33,45,0.08)]",
        tones[tone],
        className,
      )}
    >
      <p className="whitespace-pre-line">{children}</p>
    </div>
  );
}
