"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import type { Dot } from "@/types";

type Props = {
  /** Puzzle points. `id` is the connection order (1-based); need not be pre-sorted. */
  dots: Dot[];
  /** SVG viewBox the dot coordinates live in, e.g. "0 0 487 599". */
  viewBox: string;
  /** Fires once, when the final dot is connected. */
  onComplete?: () => void;
  /** Allow press-and-drag through the sequence in addition to clicking. */
  enableDrag?: boolean;
  /**
   * Connected-dot count at which the puzzle completes and `onComplete` fires.
   * Defaults to every dot; set lower (e.g. 10) to reveal early. Clamped to [1, N].
   */
  revealAfter?: number;
  /** Radius of the visible dot (svg units). */
  dotRadius?: number;
  /** Radius of the transparent hit / drag-proximity target (svg units). */
  hitRadius?: number;
  className?: string;
};

/**
 * Sequential connect-the-dots interaction. The visitor connects dots strictly
 * in `id` order (1 → N); any out-of-order input is ignored. `targetNode` is the
 * single source of truth — the connected line and completion are derived from it.
 *
 * Rendering is styling-agnostic: this owns geometry + motion only. Colors,
 * stroke widths and fills come from the consumer's CSS, targeting the `data-*`
 * hooks (`data-part`, `data-state`, `data-complete`). Motion (draw, reveal,
 * pulse) is disabled under prefers-reduced-motion; the connection logic is not.
 */
export function ConnectTheDots({
  dots,
  viewBox,
  onComplete,
  enableDrag = true,
  revealAfter,
  dotRadius = 6,
  hitRadius = 22,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);

  // The id the visitor must connect next. Starts at the first dot.
  const [targetNode, setTargetNode] = useState(1);
  // Drag state — only used to preview the "rubber-band" line to the cursor.
  const [dragging, setDragging] = useState(false);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);

  const ordered = useMemo(() => [...dots].sort((a, b) => a.id - b.id), [dots]);
  const total = ordered.length;
  // Complete once `threshold` dots are connected (connected count = targetNode - 1).
  const threshold = Math.min(Math.max(1, revealAfter ?? total), total);
  const completed = total > 0 && targetNode > threshold;

  /** Consecutive connected pairs → one line segment each (keyed, so only new ones animate in). */
  const segments = useMemo(() => {
    const out: { a: Dot; b: Dot }[] = [];
    for (let i = 1; i < ordered.length; i++) {
      const a = ordered[i - 1];
      const b = ordered[i];
      if (b.id < targetNode) out.push({ a, b }); // b connected ⇒ segment a→b is drawn
    }
    return out;
  }, [ordered, targetNode]);

  const activeDot = ordered.find((d) => d.id === targetNode);
  const lastConnected = ordered.find((d) => d.id === targetNode - 1);

  /** Strict validator: advances only on an exact match; every other input is a no-op. */
  const connect = useCallback(
    (id: number) => setTargetNode((t) => (id === t ? t + 1 : t)),
    [],
  );

  // Fire onComplete exactly once.
  const fired = useRef(false);
  useEffect(() => {
    if (completed && !fired.current) {
      fired.current = true;
      onComplete?.();
    }
  }, [completed, onComplete]);

  /** Map a pointer event to svg user-space (robust under any CSS scale/aspect). */
  const toSvgPoint = useCallback((e: React.PointerEvent) => {
    const svg = svgRef.current;
    const ctm = svg?.getScreenCTM();
    if (!svg || !ctm) return null;
    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    return { x: p.x, y: p.y };
  }, []);

  const handleSvgPointerMove = (e: React.PointerEvent) => {
    if (!enableDrag || !dragging || completed) return;
    const p = toSvgPoint(e);
    if (!p) return;
    setPointer(p);
    // Reached the current target while dragging → connect and continue the chain.
    if (activeDot) {
      const dist = Math.hypot(p.x - activeDot.x, p.y - activeDot.y);
      if (dist <= hitRadius) connect(activeDot.id);
    }
  };

  const endDrag = (e: React.PointerEvent) => {
    setDragging(false);
    setPointer(null);
    svgRef.current?.releasePointerCapture?.(e.pointerId);
  };

  const startDrag = (e: React.PointerEvent, id: number) => {
    if (!enableDrag || id !== targetNode) return;
    setDragging(true);
    setPointer(toSvgPoint(e));
    svgRef.current?.setPointerCapture?.(e.pointerId);
    connect(id); // pressing the active dot connects it
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      connect(id);
    }
  };

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      className={cn("h-auto w-full touch-none select-none", className)}
      data-complete={completed || undefined}
      onPointerMove={handleSvgPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      aria-label="Connect the dots to reveal the illustration"
      role="group"
    >
      {/* Connected line — one segment per connected pair; new segments draw themselves in. */}
      {segments.map(({ a, b }) => (
        <motion.line
          key={`${a.id}-${b.id}`}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          data-part="path"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }}
        />
      ))}

      {/* Rubber-band preview from the last connected dot to the cursor while dragging. */}
      {enableDrag && dragging && pointer && lastConnected && !completed && (
        <line
          x1={lastConnected.x}
          y1={lastConnected.y}
          x2={pointer.x}
          y2={pointer.y}
          data-part="lead"
          strokeLinecap="round"
        />
      )}

      {/* Interactive dot layer — animates out on completion. */}
      <AnimatePresence>
        {!completed &&
          ordered.map((dot, i) => {
            const state =
              dot.id < targetNode
                ? "connected"
                : dot.id === targetNode
                  ? "active"
                  : "pending";
            return (
              <motion.g
                key={dot.id}
                data-dot-id={dot.id}
                data-state={state}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { delay: i * 0.03, type: "spring", stiffness: 300, damping: 24 }
                }
                style={{ transformOrigin: `${dot.x}px ${dot.y}px` }}
              >
                {/* Visible dot; the active one gently pulses to invite input. */}
                <motion.circle
                  cx={dot.x}
                  cy={dot.y}
                  r={dotRadius}
                  data-part="dot"
                  animate={
                    reduce || state !== "active"
                      ? { scale: 1 }
                      : { scale: [1, 1.18, 1] }
                  }
                  transition={
                    reduce || state !== "active"
                      ? { duration: 0 }
                      : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
                  }
                  style={{ transformOrigin: `${dot.x}px ${dot.y}px` }}
                />
                <text x={dot.x} y={dot.y} data-part="label">
                  {dot.id}
                </text>
                {/* Transparent, larger hit + drag target (only the active dot is focusable). */}
                <circle
                  cx={dot.x}
                  cy={dot.y}
                  r={hitRadius}
                  fill="transparent"
                  role="button"
                  tabIndex={state === "active" ? 0 : -1}
                  aria-label={`Connect dot ${dot.id}`}
                  aria-disabled={state !== "active" || undefined}
                  onClick={() => connect(dot.id)}
                  onPointerDown={(e) => startDrag(e, dot.id)}
                  onKeyDown={(e) => handleKeyDown(e, dot.id)}
                  style={{ cursor: state === "active" ? "pointer" : "default" }}
                />
              </motion.g>
            );
          })}
      </AnimatePresence>
    </svg>
  );
}
