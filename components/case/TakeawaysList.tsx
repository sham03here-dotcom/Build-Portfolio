import { Reveal } from "@/components/motion/Reveal";

type Props = {
  items: { title: string; body: string }[];
};

/**
 * Key-learnings list: oversized ghost numeral, display title and body per
 * row, separated by hairline rules.
 */
export function TakeawaysList({ items }: Props) {
  return (
    <ol className="mt-14 md:mt-16">
      {items.map((item, i) => (
        <li
          key={item.title}
          className="border-stroke py-10 first:pt-0 not-first:border-t md:py-12"
        >
          <Reveal>
            <div className="grid grid-cols-[3.5rem_1fr] gap-x-6 gap-y-4 md:grid-cols-[8rem_1fr_24rem] md:gap-x-10">
              <span
                aria-hidden
                className="font-sans text-5xl leading-none text-ink/10 md:text-[5rem]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="self-center whitespace-pre-line font-sans text-[clamp(1.375rem,2.4vw,1.625rem)] leading-snug tracking-[-0.01em] text-ink">
                {item.title}
              </h3>
              <p className="col-span-2 text-base leading-relaxed text-muted md:col-span-1">
                {item.body}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
