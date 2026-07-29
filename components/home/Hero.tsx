import { Intro } from "./Intro";
import { HeroRive } from "@/components/hero/HeroRive";

/**
 * Home hero: two columns on desktop — the intro (wordmark, role, status, bio)
 * on the left, the Rive animation island filling the space on the right.
 * Collapses to the intro alone on phones, which also keeps the Rive runtime off
 * mobile. The outer max-width + padding container lives here so both columns
 * share it.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-var(--spacing-header))] items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-[1392px] grid-cols-1 items-center gap-12 px-6 py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,440px)] md:gap-8 md:px-[60px]">
        <Intro />
        <HeroRive className="hidden w-full md:block" />
      </div>
    </section>
  );
}
