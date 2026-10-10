/** Shared types for the portfolio. */

export type Accent = "green" | "blue" | "orange" | "indigo" | "yellow";

/* ---------------------------------- hero animation ---------------------------------- */

/** The hero's Rive animation (data/hero-rive.ts). */
export interface RiveHero {
  /** Path to the .riv under /public, e.g. "/rive/hero.riv". */
  src: string;
  /** Artboard name; omit to use the file's default. */
  artboard?: string;
  /** State-machine name; omit to use the file's first. */
  stateMachine?: string;
  /** Artboard width / height — reserves the column's space before load. */
  aspect: number;
  /** Accessible description of the animation. */
  label: string;
}

/* ---------------------------------- case studies ---------------------------------- */

export type NoteTone = "blue" | "purple" | "yellow";
export type PanelTone = "light" | "dark" | "plain";

export interface CaseImage {
  /** Path under /public, e.g. "/images/epayhub/hero-wallet.svg" */
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** One section of a long-scroll case study, rendered by CaseSections. */
export type CaseSection =
  /** Eyebrow + display title + body paragraphs (plain text band). */
  | { type: "text"; eyebrow: string; title: string; body: string[] }
  /** Full-width italic pull quote on a panel with a left rule. */
  | { type: "quote"; text: string }
  /** Row of colored research sticky notes. */
  | { type: "stickies"; notes: { tone: NoteTone; text: string }[] }
  /** Section text followed by a full-width panel with a centered mockup. */
  | { type: "panel"; eyebrow: string; title: string; body: string[]; image: CaseImage }
  /** Section text followed by a figure on the plain page background. */
  | { type: "figure"; eyebrow: string; title?: string; body?: string[]; image: CaseImage }
  /** Stacked titled rows on light panels (e.g. friction points). With
      `numbered`, rows share one panel and carry ghost numerals (rules). */
  | {
      type: "list";
      eyebrow: string;
      title: string;
      body: string[];
      items: { title: string; body: string }[];
      numbered?: boolean;
    }
  /** Equal text cards in a row (e.g. design principles). */
  | {
      type: "columns";
      eyebrow: string;
      title: string;
      body: string[];
      items: { title: string; body: string }[];
    }
  /** Numbered solution move: panel with mockup on one side, text on the other. */
  | {
      type: "move";
      eyebrow: string;
      title: string;
      body: string[];
      image: CaseImage;
      mediaSide: "left" | "right";
      tone: PanelTone;
      /** Breaks the panel out wider than the text column (IIRM-style screens). */
      wide?: boolean;
    }
  /** Section text + before/after comparison cards. `tone: "neutral"` swaps
      the red/green tints for grey panels (hand-off style pairs). */
  | {
      type: "comparison";
      eyebrow: string;
      title: string;
      body: string[];
      before: { label: string; title?: string; text: string };
      after: { label: string; title?: string; text: string };
      tone?: "tinted" | "neutral";
    }
  /** Numbered key-learnings list. */
  | {
      type: "takeaways";
      eyebrow: string;
      items: { title: string; body: string }[];
    }
  /** Image grid (brand photo exhibits). Optional heading text above. */
  | {
      type: "gallery";
      eyebrow?: string;
      title?: string;
      body?: string[];
      columns: 1 | 2 | 3;
      images: CaseImage[];
    }
  /** Brand color swatch row. Hex/RGB are content (brand values), not UI theme. */
  | {
      type: "palette";
      colors: { hex: string; rgb: string; /** grid span 1..2 */ span?: number }[];
    }
  /** Centered call-to-action: pill button, plain link, and an optional
      hint line whose `keys` render as keycap chips. */
  | {
      type: "cta";
      label: string;
      href: string;
      linkText?: string;
      note?: string;
      keys?: string[];
    }
  /** Inline live-demo embed: an external site running in a browser-style
      frame. The iframe is lazy — it mounts only on the visitor's click. */
  | {
      type: "embed";
      src: string;
      /** Browser tab / URL-bar label. */
      title: string;
      displayUrl?: string;
      note?: string;
      keys?: string[];
      placeholder?: string;
    }
  /** Closing note bar: italic lead line + italic muted body. */
  | { type: "note"; lead: string; body: string };

export interface CaseStudy {
  slug: string;
  accent: Accent;
  /** Browser-tab / OG title, e.g. "Epayhub — Designing the Wallet". */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** Use \n for intentional line breaks. */
  title: string;
  intro: string;
  meta: { label: string; value: string }[];
  /** Full-bleed hero band; omitted for pages that open on the intro. */
  hero?: CaseImage;
  sections: CaseSection[];
}

/** A project shown in the Works grid, linking to its case-study route. */
export interface Project {
  slug: string;
  title: string;
  tags: string[];
  accent: Accent;
  /** Path under /public, e.g. "/images/home/epayhub-thumb.png" */
  thumb: string;
  thumbAlt: string;
  order: number;
  /** Hide from the Works grid and 404 the route, keeping the case study in the repo. */
  hidden?: boolean;
}

/** A labelled external link (footer contact, resume, etc.). */
export interface ContactLink {
  label: string;
  href: string;
}

/** Site-wide profile + contact content (data/site.ts). */
export interface SiteProfile {
  name: string;
  wordmark: string;
  role: string;
  status: {
    text: string;
    company: string;
    companyHref: string;
  };
  location: string;
  bio: string;
  resumeHref: string;
  /** Primary contact email, shown as the footer's main action. */
  email: string;
  contact: ContactLink[];
  footerHeadline: string;
  /** Short invitation line above the footer headline. */
  footerTagline: string;
  footerNote: string;
}
