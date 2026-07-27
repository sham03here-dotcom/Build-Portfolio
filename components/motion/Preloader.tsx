"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import rawScribble from "@/data/scribble-lottie.json";

// --color-link #0033FF (primary blue) as normalized 0–1 RGB for the Lottie stroke.
const STROKE: [number, number, number] = [0x00 / 255, 0x33 / 255, 0xff / 255];

// Play the draw-on once, slowed down. At 0.5× the ~1.7s trim animation lasts
// ~3.4s, so a slow load is covered by the single slow draw — never a loop.
const SPEED = 0.5;
const PLAY_MS = (rawScribble.op / rawScribble.fr / SPEED) * 1000;

/** Deep-clone the animation and retint every stroke color to the brand blue. */
function retint(data: unknown): unknown {
  const clone = structuredClone(data) as Record<string, unknown>;
  const walk = (node: unknown) => {
    if (Array.isArray(node)) {
      node.forEach(walk);
    } else if (node && typeof node === "object") {
      const obj = node as Record<string, unknown>;
      if (obj.ty === "st" && obj.c && typeof obj.c === "object") {
        (obj.c as { k: number[] }).k = [...STROKE];
      }
      Object.values(obj).forEach(walk);
    }
  };
  walk(clone);
  return clone;
}

/**
 * First-paint overlay that plays the self-drawing scribble while the page's
 * assets settle, then fades to reveal the content. Runs on every page load.
 * Respects prefers-reduced-motion (no draw, instant hand-off).
 */
export function Preloader() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const scribble = useMemo(() => retint(rawScribble), []);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    // Let the single slow draw finish before handing off; on a slower load the
    // completed signature simply holds (never replays). Reduced motion is instant.
    const MIN = reduce ? 0 : PLAY_MS;
    const start = performance.now();
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, MIN - (performance.now() - start));
      window.setTimeout(() => setReady(true), wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    // Safety cap: never trap the visitor behind a stalled asset.
    const cap = window.setTimeout(finish, 6000);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(cap);
    };
  }, [reduce]);

  // Lock scroll while the overlay is up.
  useEffect(() => {
    if (ready) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [ready]);

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-surface"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.6, ease: "easeInOut" }}
          aria-hidden
        >
          {!reduce && (
            <Lottie
              lottieRef={lottieRef}
              animationData={scribble}
              loop={false}
              autoplay
              onDOMLoaded={() => lottieRef.current?.setSpeed(SPEED)}
              className="w-screen h-auto"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
