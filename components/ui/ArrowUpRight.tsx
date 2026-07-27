import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  strokeWidth?: number;
};

/**
 * Up-right arrow icon (designer-provided, screen assets/ArrowUpRight.svg),
 * inlined so it inherits `currentColor` for hover transitions.
 */
export function ArrowUpRight({ className, strokeWidth = 1.5 }: Props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={cn("inline-block size-3.5", className)}
    >
      <path
        d="M5 15L15 5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.875 5H15V13.125"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
