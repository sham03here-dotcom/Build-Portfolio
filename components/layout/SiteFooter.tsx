import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";

/**
 * Footer: the sign-off. A display-scale "NICE TO MEET YOU" headline, the
 * email address as the primary action, contact links with ↗ arrows, and a
 * quiet meta bar (copyright · back to top) under a hairline rule.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-stroke">
      <div className="mx-auto w-full max-w-[1392px] px-6 pb-8 pt-16 md:px-[60px] md:pb-10 md:pt-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10">
          {/* sign-off + primary action */}
          <div>
            <Reveal>
              <p className="text-base text-muted">{site.footerTagline}</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(2.75rem,7.5vw,6rem)] uppercase leading-[0.95] tracking-tight text-ink [text-wrap:balance]">
                {site.footerHeadline}
                <Image
                  src="/images/home/wordmark-smiley.svg"
                  alt=""
                  width={40}
                  height={40}
                  aria-hidden
                  className="ml-4 inline-block w-[0.5em] align-baseline"
                />
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href={`mailto:${site.email}`}
                className="mt-10 inline-block text-xl text-ink underline decoration-stroke decoration-2 underline-offset-8 transition-colors duration-300 ease-out hover:decoration-ink md:text-2xl"
              >
                {site.email}
              </a>
            </Reveal>
          </div>

          {/* contact links — no Reveal: at the page's very bottom the in-view
              margin can never fire on short pages, which would hide them */}
          <nav aria-label="Contact">
            <ul className="flex flex-wrap gap-x-8 gap-y-5 md:flex-col md:gap-6">
              {site.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...((link.href.startsWith("http") || link.href.endsWith(".pdf")) && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-[0.1em] text-ink"
                  >
                    <span className="underline decoration-transparent underline-offset-4 transition-colors duration-300 ease-out group-hover:decoration-ink motion-reduce:transition-none">
                      {link.label}
                    </span>
                    <ArrowUpRight className="size-3.5 text-muted transition-[transform,color] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* meta bar */}
        <div className="mt-16 flex items-center justify-between border-t border-stroke pt-6 md:mt-24">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
            {site.footerNote}
          </p>
          <a
            href="#top"
            className="group inline-flex items-baseline gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-muted transition-colors duration-300 ease-out hover:text-ink motion-reduce:transition-none"
          >
            Back to top
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
