import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

/** Home intro: wordmark + role, current status, location, and bio. */
export function Intro() {
  return (
    <div className="font-sans grid grid-cols-1 gap-10 md:grid-cols-[263px_minmax(0,354px)] md:gap-0">
      <Reveal delay={0.05}>
        <p className="font-sans flex items-center gap-1.5 text-base tracking-[0.1em] text-ink">
          {site.wordmark}
          <Image
            src="/images/home/wordmark-smiley.svg"
            alt=""
            width={14}
            height={14}
            aria-hidden
          />
        </p>
      </Reveal>

      <div className="font-sans flex max-w-[354px] flex-col gap-[55px] text-base leading-normal">
        <Reveal delay={0.15}>
          <p className="font-sans text-link">{site.role}</p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="font-sans text-black">
            {site.status.text}
            <br />
            UI/UX Designer at{" "}
            <a
              href={site.status.companyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-black/40 underline-offset-4 transition-colors duration-300 hover:decoration-black"
            >
              {site.status.company}
            </a>
            <Image
              src="/images/home/divami-logo.svg"
              alt="Divami Design Labs logo"
              width={24}
              height={24}
              className="ml-2 inline-block align-middle"
            />
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="font-sans text-black">{site.location}</p>
        </Reveal>

        <Reveal delay={0.45}>
          <p className="font-sans text-black">{site.bio}</p>
        </Reveal>
      </div>
    </div>
  );
}
