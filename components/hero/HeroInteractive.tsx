"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { heroDots, heroDotsViewBox, heroRevealPath } from "@/data/hero-dots";
import { ConnectTheDots } from "./ConnectTheDots";

/**
 * Hero connect-the-dots island: owns the completion state (a Server Component
 * can't pass the onComplete callback) and reveals the finished illustration on
 * top of the connected line once the puzzle is solved. Colors + polish are
 * styled in CSS via the `data-*` hooks; this only wires logic + the reveal seam.
 */
export function HeroInteractive({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  return (
    <div className={cn("relative", className)} data-hero-done={done || undefined}>
      <ConnectTheDots
        dots={heroDots}
        viewBox={heroDotsViewBox}
        revealAfter={10}
        dotRadius={4}
        onComplete={() => setDone(true)}
      />

      {/* Reveal: the finished cat, aligned to the dots. Sham fills/animates it in CSS. */}
      <AnimatePresence>
        {done && (
          <motion.svg
            key="reveal"
            viewBox={heroDotsViewBox}
            className="pointer-events-none absolute inset-0 h-auto w-full"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reduce ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
            aria-hidden
          >
            <path d={heroRevealPath} data-part="reveal" />
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}
