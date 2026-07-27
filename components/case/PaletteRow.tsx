import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  colors: { hex: string; rgb: string; span?: number }[];
};

/**
 * Brand color swatches with hex/RGB captions. The colors are case-study
 * content from data/, not UI theme tokens, so they're applied inline.
 */
export function PaletteRow({ colors }: Props) {
  return (
    <Reveal>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {colors.map((c) => (
          <div key={c.hex} className={cn(c.span === 2 && "col-span-2")}>
            <div
              className="h-40 w-full border border-stroke/40 md:h-64"
              style={{ backgroundColor: c.hex }}
            />
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-ink">
              {c.hex}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-muted">
              {c.rgb}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
