import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  items: { title: string; body: string }[];
};

/** Equal-width text cards in a row — used for design principles. */
export function ColumnCards({ items }: Props) {
  return (
    <div
      className={cn(
        "mt-12 grid grid-cols-1 gap-5 md:mt-14",
        items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3",
      )}
    >
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.08} className="h-full">
          <div className="h-full bg-panel p-7">
            <h3 className="whitespace-pre-line text-xl font-medium leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
