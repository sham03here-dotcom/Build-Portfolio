---
name: new-component
description: Scaffold a typed React component for Sham's portfolio in the correct folder, following the cn()/token/Server-first conventions. Use when adding a reusable primitive or a page section.
---

# New component

1. Decide the folder (per `AGENTS.md`): reusable primitive → `components/ui/`; home block → `components/home/`; case-study block → `components/case/`; layout chrome → `components/layout/`.
2. PascalCase file = export name. Server Component by default; add `"use client"` only if it needs state/effects/DOM.
3. Typed props via a local `type Props = {…}`. No `any`.
4. Style with Tailwind through `cn()`; colors/spacing/radius from `@theme` tokens only — no raw hex/px for design values.
5. Mobile-first classes; `md:`/`lg:` for the desktop layout.
6. If it renders copy, take it as props — the copy itself lives in `data/`.
