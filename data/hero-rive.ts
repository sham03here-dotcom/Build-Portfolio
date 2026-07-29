import type { RiveHero } from "@/types";

/**
 * The hero's Rive animation — a cat whose head and eyes track the cursor, with
 * idle + blink loops driven by the file's state machine.
 *
 * `artboard` / `stateMachine` / `aspect` are read from the .riv itself (artboard
 * "Cat", 500 × 500, one state machine, no exposed inputs — the cursor tracking
 * is wired up as Rive pointer listeners inside the file). Re-export from Rive
 * and these need re-checking; `aspect` is artboard width / height and keeps the
 * hero column from reflowing while the .riv loads.
 *
 * HERITAGE — the shipped .riv is NOT a raw Rive export. The original drew an
 * opaque orange square behind the cat, so three artboard-sized fills were
 * switched off to let the page background show through: the `BG` rect's
 * gradient, the artboard's own #313131 fill, and the alpha of `HitArea`'s red
 * fill (alpha only — that rect is the pointer target and Rive hit-tests through
 * shape paints, so the fill has to stay "visible"). The untouched export is kept
 * at `screen assets/3920-8202-cat-following-the-mouse.riv`. Re-exporting from
 * Rive brings the orange back: clear those fills in the editor instead.
 */
export const heroRive: RiveHero = {
  src: "/rive/cat-following-the-mouse.riv",
  artboard: "Cat",
  stateMachine: "State Machine 1",
  aspect: 1,
  label: "Illustration of a cat that watches your cursor",
};
