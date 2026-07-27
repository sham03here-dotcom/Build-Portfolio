import { Reveal } from "@/components/motion/Reveal";

type Props = {
  items: { title: string; body: string }[];
  /** Rows share one panel and carry oversized ghost numerals (rules). */
  numbered?: boolean;
};

/**
 * Stacked rows with a bold lead line and a muted explanation. Default:
 * separate light panels (friction inventories). Numbered: a single panel
 * with hairline-divided rows and ghost numerals (design rules).
 */
export function TitledList({ items, numbered }: Props) {
  if (numbered) {
    return (
      <ol className="mt-12 bg-panel px-7 md:mt-14 md:px-10">
        {items.map((item, i) => (
          <li key={item.title} className="border-stroke py-8 not-first:border-t md:py-10">
            <Reveal>
              <div className="grid grid-cols-[1fr_auto] items-center gap-6 md:gap-10">
                <div>
                  <h3 className="text-xl font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 max-w-[34rem] text-base leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="font-sans text-7xl leading-none text-ink/5 md:text-[10rem]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul className="mt-12 space-y-5 md:mt-14">
      {items.map((item, i) => (
        <li key={item.title}>
          <Reveal delay={i * 0.06}>
            <div className="bg-panel px-7 py-7 md:px-8">
              <h3 className="text-xl font-medium text-ink">{item.title}</h3>
              <p className="mt-2 max-w-[36rem] text-base leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
