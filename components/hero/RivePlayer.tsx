"use client";

import { useEffect, useMemo, useState } from "react";
import { Alignment, Fit, Layout, useRive, type Rive } from "@rive-app/react-canvas";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { heroRive } from "@/data/hero-rive";

/** Keeps the projected cursor just inside the artboard's hit area, never on its edge. */
const HIT_INSET = 0.96;

/**
 * Canvas + wasm half of the hero Rive island — loaded only through
 * `HeroRive`'s dynamic import, never imported directly (it must not reach the
 * server bundle).
 *
 * If the .riv is missing or fails to decode this renders nothing rather than an
 * empty canvas, so the hero degrades to the intro column alone.
 */
export function RivePlayer({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);

  const params = useMemo(
    () => ({
      src: heroRive.src,
      artboard: heroRive.artboard,
      stateMachines: heroRive.stateMachine,
      // Reduced motion holds frame one: the state machine never starts, so the
      // cat renders static. This is also what re-runs on a reduce change.
      autoplay: !reduce,
      layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
      onLoadError: () => setFailed(true),
      // Rive only runs a state machine it's been named, and autoplay already
      // starts the pinned one — so this only fills in when the data file pins
      // none. `onRiveReady` hands us an instance that's guaranteed live, unlike
      // an effect keyed on `rive` (which fires again on StrictMode's remount,
      // after the first instance's artboard has been disposed).
      onRiveReady: (instance: Rive) => {
        if (heroRive.stateMachine || reduce) return;
        const first = instance.stateMachineNames[0];
        if (first) instance.play(first);
      },
    }),
    [reduce],
  );

  const { RiveComponent, rive, canvas } = useRive(params);

  /**
   * Cursor tracking across the whole page, not just the animation's own box.
   *
   * Rive binds its pointer listeners to the canvas element and hit-tests them
   * against the artboard, so out of the box the cat can only see the cursor
   * while it's inside its own square. We listen on the window instead and
   * re-dispatch every move onto the canvas, projected along the same direction
   * from the canvas centre so the point always lands inside the artboard's hit
   * area — the cat then looks *towards* the cursor wherever it is on the page.
   *
   * Inside the box the projection is the identity (scale clamps to 1), so the
   * native 1:1 tracking is untouched and the two regimes join seamlessly.
   * Moves are coalesced to one dispatch per frame; `bubbles: false` is what
   * stops our own synthetic event from re-entering this listener.
   */
  useEffect(() => {
    if (!rive || !canvas || reduce) return;

    let frame = 0;
    let latest: { x: number; y: number } | null = null;

    const flush = () => {
      frame = 0;
      if (!latest) return;

      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      // Off-screen (scrolled past the hero) — nothing to look at.
      if (r.bottom < 0 || r.top > window.innerHeight) return;

      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = latest.x - cx;
      const dy = latest.y - cy;
      const scale = Math.min(
        1,
        ((r.width / 2) * HIT_INSET) / (Math.abs(dx) || Number.EPSILON),
        ((r.height / 2) * HIT_INSET) / (Math.abs(dy) || Number.EPSILON),
      );

      canvas.dispatchEvent(
        new MouseEvent("mousemove", {
          clientX: cx + dx * scale,
          clientY: cy + dy * scale,
          bubbles: false,
        }),
      );
    };

    const onMove = (e: MouseEvent) => {
      latest = { x: e.clientX, y: e.clientY };
      frame ||= requestAnimationFrame(flush);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [rive, canvas, reduce]);

  if (failed) return null;

  return (
    <RiveComponent
      className={cn("h-full w-full", className)}
      role="img"
      aria-label={heroRive.label}
    />
  );
}
