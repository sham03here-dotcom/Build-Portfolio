"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/cn";
import { heroRive } from "@/data/hero-rive";

/**
 * Hero Rive island. Thin client shell whose only job is to keep the Rive
 * runtime (canvas + wasm) out of the server bundle and off the critical path —
 * the player is a lazy, browser-only import. The wrapper holds the artboard's
 * aspect ratio so the hero column doesn't reflow when the .riv lands.
 */
const RivePlayer = dynamic(
  () => import("./RivePlayer").then((m) => m.RivePlayer),
  { ssr: false },
);

export function HeroRive({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative w-full", className)}
      style={{ aspectRatio: heroRive.aspect }}
    >
      <RivePlayer className="absolute inset-0" />
    </div>
  );
}
