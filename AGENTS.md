# Sham's Portfolio — Agent Conventions

UI-designer portfolio for Sham Karthikeyan (UI/UX Designer @ Divami Design Labs).
Home + 5 long-scroll case studies, built design-to-code from Figma.

<!-- BEGIN:nextjs-agent-rules -->
This is Next.js 16 with breaking changes. Read the relevant guide in
`node_modules/next/dist/docs/` before writing routing/layout/image code.
<!-- END:nextjs-agent-rules -->

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind v4 (CSS `@theme`, no config file).
Import alias `@/*` → repo root.

## Design tokens (defined in `app/globals.css` `@theme`)

```
--color-ink:      #1F212D   /* primary text + titles */
--color-muted:    #70748C   /* secondary/body text */
--color-stroke:   #D5D7DA   /* borders, dividers (also #DDDDDD) */
--color-surface:  #FFFFFF   /* page background */
--color-label:    #000000   /* tag/eyebrow labels */
--radius-pill:    9999px
```

Project accents (Works-grid card + case-study hero tint): epayhub→green, iirm→blue,
fitness→orange, newbox→indigo, type-whatever→yellow.
Type: neutral grotesque (display/body) + monospace (eyebrows/tags, UPPERCASE, tracked).

## Structure — keep every file in its lane

- `app/<route>/page.tsx`  — thin; compose sections, no business logic, no inline content
- `components/ui/`         — reusable primitives (Tag, Button, DeviceFrame, Eyebrow, QuoteBlock, StickyNote, CompareCard)
- `components/layout/`     — SiteHeader, SiteFooter
- `components/home/`       — Hero, Intro, WorksGrid, WorkCard
- `components/case/`       — CaseHero, CaseIntro, TextImageBlock, StickyNotesRow, ComparisonBlock, TakeawaysList
- `components/hero/`       — HeroCanvas (Three.js client island)
- `components/motion/`     — motion primitives (Reveal); the only place `motion/react` is imported
- `data/`                  — site.ts, projects.ts, case-studies/<slug>.ts  (ALL copy lives here, never in JSX)
- `types/`                 — shared types
- `lib/cn.ts`              — className merge helper

## Rules

1. One component per file, PascalCase filename matching the export.
2. Server Components by default. Add `"use client"` ONLY for interactivity/browser APIs.
3. NO hardcoded hex or magic px for color/type — use the `@theme` tokens (ink, muted, stroke, surface, accents).
4. Compose Tailwind classes through `cn()`. Mobile-first: base = phone, `md:`/`lg:` scale up to the 1512px desktop design.
5. Content is data: page copy, tags, and project meta come from `data/`, typed against `types/`.
6. Heavy client-only libs (Three.js) are lazy `next/dynamic({ ssr: false })` islands — never imported by a Server Component.
7. Images via `next/image`, sourced from `public/images/<project>/`. No external hotlinks.
8. Motion: section/card entrances use `components/motion/Reveal` (fade + rise, once, staggered via `delay`); hover micro-interactions are plain CSS transitions. Every animation must respect reduced motion (`useReducedMotion` in primitives, `motion-reduce:` variants in CSS). Don't import `motion/react` outside `components/motion/` — **exception:** `components/hero/` interactive islands (e.g. `ConnectTheDots`) may import `motion/react` directly, since their animation is state-coupled and can't route through generic primitives; they must still honor `useReducedMotion`.

## Figma is the source of truth

File key: `30J52ojAoaa9k4oiKh3zyd`

| Route | Project | Figma node |
|---|---|---|
| `/` | Home | `2:8291` |
| `/work/epayhub` | Epayhub (fintech, mobile) | `2:1971` |
| `/work/iirm` | IIRM (insurance, web) | `2:6800` |
| `/work/fitness` | Fitness/Wearable (Apple Watch) | `2:2488` |
| `/work/newbox` | Newbox (branding) | `2:4819` |
| `/work/type-whatever` | Type Whatever (interactive) | `2:6730` |

## Skills — use them

- `/design-to-code`   turn a Figma node into structured components + assets + data
- `/new-case-study`   scaffold a case-study route + data + registration
- `/new-component`    scaffold a ui/ primitive
