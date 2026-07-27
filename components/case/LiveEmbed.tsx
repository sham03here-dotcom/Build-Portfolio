"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  /** Live URL to embed and open. */
  src: string;
  /** Browser tab / URL-bar label, e.g. "Type Whatever". */
  title: string;
  /** Hostname shown in the fake URL bar (defaults to the src host). */
  displayUrl?: string;
  /** Hint line under the frame; words in `keys` render as keycap chips. */
  note?: string;
  keys?: string[];
  /** Placeholder canvas line before the demo is launched. */
  placeholder?: string;
};

function hostOf(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

/**
 * Inline live-demo frame styled as a browser window. The external iframe is
 * lazy: it only mounts once the visitor clicks "Launch", so an unrelated
 * site can't load or capture the keyboard just from scrolling past.
 */
export function LiveEmbed({ src, title, displayUrl, note, keys = [], placeholder }: Props) {
  const [live, setLive] = useState(false);
  const url = displayUrl ?? hostOf(src);

  const noteParts = note
    ? note.split(new RegExp(`(${keys.join("|")})`, "g")).filter(Boolean)
    : [];

  return (
    <Reveal className="mt-12 md:mt-14">
      <div className="overflow-hidden rounded-xl border border-stroke bg-panel shadow-[0_20px_60px_-24px_rgba(31,33,45,0.35)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-stroke bg-ink px-4 py-2.5">
          <div className="flex shrink-0 items-center gap-1.5" aria-hidden>
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-pill bg-white/10 px-3 py-1.5">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-3.5 shrink-0 text-white/60">
              <path
                d="M6 9V6.5a4 4 0 1 1 8 0V9M5 9h10v6H5z"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinejoin="round"
              />
            </svg>
            <span className="truncate font-mono text-xs text-white/70">{url}</span>
          </div>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in a new tab"
            className="shrink-0 rounded-md p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white motion-reduce:transition-none"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-4">
              <path
                d="M8 4H5.5A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5V12M12 4h4m0 0v4m0-4L9 11"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">Open {title} in a new tab</span>
          </a>
        </div>

        {/* Content area */}
        <div className="relative aspect-[1039/708] w-full bg-panel-dark">
          {live ? (
            <iframe
              src={src}
              title={title}
              className="absolute inset-0 size-full border-0"
              allow="clipboard-write"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 text-center">
              <p className="font-mono text-sm tracking-wide text-muted">
                {placeholder ?? "Type whatever comes to your mind"}
                <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 animate-pulse bg-muted align-middle motion-reduce:animate-none" />
              </p>
              <button
                type="button"
                onClick={() => setLive(true)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-pill bg-ink px-6 text-sm font-medium text-surface transition-colors hover:bg-ink/90 motion-reduce:transition-none"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className="size-3.5">
                  <path d="M6 4.5v11l9-5.5-9-5.5Z" />
                </svg>
                Launch live demo
              </button>
            </div>
          )}
        </div>
      </div>

      {note && (
        <p className="mt-6 text-center text-base text-muted">
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
