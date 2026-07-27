"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";

/**
 * Sticky top bar. "RESUME ↗" sits right at all times; the "SHAM" wordmark
 * slides in on the left once the Works section is scrolled into view (the
 * hero's own wordmark has scrolled away by then), so the header reads as a
 * persistent SHAM ⟷ RESUME bar over the case grid.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const works = document.getElementById("works");
      const past = works
        ? works.getBoundingClientRect().top <= window.innerHeight * 0.5
        : window.scrollY > window.innerHeight * 0.6;
      setScrolled(past);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300 motion-reduce:transition-none",
        scrolled
          ? "border-b border-stroke bg-surface/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[var(--spacing-header)] w-full max-w-[1392px] items-center justify-between px-6 md:px-[60px]">
        {/* SHAM — fades/slides in once scrolled into Works */}
        <a
          href="#top"
          aria-hidden={!scrolled}
          tabIndex={scrolled ? 0 : -1}
          className={cn(
            "flex items-center gap-1.5 text-base tracking-[0.1em] text-ink transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
            scrolled
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0",
          )}
        >
          {site.wordmark}
          <Image
            src="/images/home/wordmark-smiley.svg"
            alt=""
            width={14}
            height={14}
            aria-hidden
          />
        </a>

        <a
          href={site.resumeHref}
          className="group inline-flex items-center gap-1.5 text-base uppercase tracking-[0.1em] text-ink transition-opacity duration-300 hover:opacity-60"
        >
          Resume
          <ArrowUpRight className="size-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0" />
        </a>
      </div>
    </header>
  );
}
