---
name: new-case-study
description: Scaffold a new case-study page for Sham's portfolio — route, typed content data file, and Works-grid registration — reusing the components/case/ system. Use when adding one of the 5 case studies (epayhub, iirm, fitness, newbox, type-whatever) or a new one.
---

# New case study

Given a `<slug>` and its Figma node:

1. Create `app/work/<slug>/page.tsx` — a thin Server Component that imports its data from `@/data/case-studies/<slug>` and composes `case/` sections (CaseHero, CaseIntro, TextImageBlock…, ComparisonBlock, TakeawaysList).
2. Create `data/case-studies/<slug>.ts` — export a typed `CaseStudy` (see `types/`): hero, intro (eyebrow/title/role/type), ordered `blocks[]`, takeaways[]. ALL copy lives here.
3. Register in `data/projects.ts`: `{ slug, title, tags[], accent, thumb, order }` so it appears in the Works grid + gets its route linked.
4. Export assets to `public/images/<slug>/` (run `/design-to-code` on the node).
5. Accent tint comes from the project's `accent` token — never hardcode.
6. Verify the route renders and the Works-grid card links to it.

Slugs & accents: epayhub→green, iirm→blue, fitness→orange, newbox→indigo, type-whatever→yellow.
