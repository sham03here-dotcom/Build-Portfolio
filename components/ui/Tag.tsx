import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  /** Background utility for the pill, varies per tile (see WorkCard). */
  className?: string;
};

/**
 * Monospace, uppercase tag pill. 6px radius, backdrop-blurred translucent fill.
 * The fill color is passed in via className since it depends on the tile it sits on.
 */
export function Tag({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-tag)] p-2.5 font-mono text-xs font-medium uppercase leading-none tracking-wide text-white backdrop-blur-[7px]",
        className,
      )}
    >
      {children}
    </span>
  );
}
