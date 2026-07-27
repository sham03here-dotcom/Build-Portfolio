"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  /** Stagger offset in seconds (e.g. index * 0.08). */
  delay?: number;
  /** Rise distance in px before settling. */
  y?: number;
  className?: string;
};

/**
 * Scroll-into-view reveal: fade + rise, fires once. The single motion
 * primitive for section/card entrances — respects prefers-reduced-motion
 * (fades only, no movement).
 */
export function Reveal({ children, delay = 0, y = 28, className }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      // `initial` must not depend on reduced motion: the server can't read the
      // media query, and a different client value causes a hydration mismatch.
      // Reduced motion instead zeroes the transition, so content appears
      // instantly (no movement) when the section enters the viewport.
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }
      }
    >
      {children}
    </motion.div>
  );
}
