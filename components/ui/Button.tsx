import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

/** Pill button/link. Renders next/link for internal routes, <a> for external. */
export function Button({ href, children, variant = "solid", className }: Props) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-pill px-6 text-sm font-medium transition-colors",
    variant === "solid"
      ? "bg-ink text-surface hover:bg-ink/90"
      : "border border-stroke text-ink hover:bg-ink/5",
    className,
  );

  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
    </a>
  );
}
