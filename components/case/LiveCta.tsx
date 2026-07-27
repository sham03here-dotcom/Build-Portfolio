import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

type Props = {
  label: string;
  href: string;
  /** Visible URL line under the button (defaults to href). */
  linkText?: string;
  /** Hint line; any word listed in `keys` renders as a keycap chip. */
  note?: string;
  keys?: string[];
};

/** Centered live-demo call-to-action with an optional keycap hint line. */
export function LiveCta({ label, href, linkText, note, keys = [] }: Props) {
  const noteParts = note
    ? note.split(new RegExp(`(${keys.join("|")})`, "g")).filter(Boolean)
    : [];

  return (
    <Reveal className="mt-12 text-center md:mt-14">
      <Button href={href}>{label}</Button>
      <p className="mt-5">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted underline underline-offset-4 transition-colors duration-300 hover:text-ink motion-reduce:transition-none"
        >
          {linkText ?? href}
        </a>
      </p>
      {note && (
        <p className="mt-8 text-base text-muted">
          {noteParts.map((part, i) =>
            keys.includes(part) ? (
              <kbd
                key={`${part}-${i}`}
                className="mx-1 inline-block rounded-[var(--radius-tag)] border border-stroke bg-panel px-3 py-1 font-mono text-sm text-ink shadow-[0_2px_0_var(--color-stroke)]"
              >
                {part}
              </kbd>
            ) : (
              <span key={`${part.slice(0, 12)}-${i}`}>{part}</span>
            ),
          )}
        </p>
      )}
    </Reveal>
  );
}
