import Link from "next/link";

/** Top bar for case-study pages: a single "← BACK" CTA aligned left (replaces
 *  the Home "RESUME ↗" header). */
export function CaseBackNav() {
  return (
    <header className="mx-auto flex h-[var(--spacing-header)] w-full max-w-[1392px] items-center px-6 md:px-[60px]">
      <Link
        href="/"
        className="group inline-flex items-center gap-1.5 text-base uppercase tracking-[0.1em] text-ink transition-opacity duration-300 hover:opacity-60"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
          className="size-4 transition-transform duration-300 ease-out group-hover:-translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        >
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </Link>
    </header>
  );
}
