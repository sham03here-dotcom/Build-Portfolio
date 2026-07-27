"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type NavItem = { id: string; label: string };

type Props = {
  items: NavItem[];
};

/**
 * Sticky left rail for the editorial case layout (luma-style): a "Back" link
 * above a scroll-spy section index. A single coral dot marks the active
 * section — the last one whose top has passed the upper third of the viewport
 * — and glides vertically to it as you scroll (fixed, not per-item fade).
 * Hidden below md, where the article flows full width.
 */
export function CaseSideNav({ items }: Props) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const [dotY, setDotY] = useState<number | null>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  // Scroll-spy: pick the last section whose top crossed the upper-third line.
  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const onScroll = () => {
      const line = window.innerHeight * 0.33;
      let current = sections[0].id;
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  // Park the dot at the vertical center of the active label's first line.
  useEffect(() => {
    const place = () => {
      const el = itemRefs.current[active];
      if (!el) return;
      const line = parseFloat(getComputedStyle(el).lineHeight) || el.clientHeight;
      setDotY(el.offsetTop + line / 2);
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active, items]);

  return (
    <nav aria-label="Case study sections" className="hidden md:block">
      <div className="sticky top-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[0.95rem] text-muted transition-colors duration-300 hover:text-ink"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-4">
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

        {/* relative track; the single dot is absolutely positioned and slides */}
        <ul className="relative mt-9 space-y-2.5 pl-3.5">
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-0 size-1.5 rounded-full bg-link transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none",
              dotY === null ? "opacity-0" : "opacity-100",
            )}
            style={{ transform: `translateY(${(dotY ?? 0) - 3}px)` }}
          />
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <li
                key={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el;
                }}
              >
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "text-[0.95rem] transition-colors duration-300",
                    isActive ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
