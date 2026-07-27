---
name: design-to-code
description: Convert a Figma node from Sham's portfolio (file 30J52ojAoaa9k4oiKh3zyd) into structured, responsive Next.js components with exported assets and data. Use when building or updating any page/section from the Figma design.
---

# Design → Code (this portfolio)

Figma file key: `30J52ojAoaa9k4oiKh3zyd`. Node map is in `AGENTS.md`.

## Steps

1. **Read the design.** `get_design_context` (or `get_metadata` first for structure) on the target node. Grab a `get_screenshot` to compare against. Lean on the Figma MCP's own design-to-code skill for extraction detail.
2. **Map to tokens, don't invent.** Colors → `@theme` tokens (`ink #1F212D`, `muted #70748C`, `stroke #D5D7DA`, `surface #FFFFFF`, project accent). New token only if the design genuinely introduces one; add it to `globals.css`, never inline a hex.
3. **Recognize the recurring vocabulary** and reuse the component, don't re-clone:
   - monospace UPPERCASE pill  → `ui/Tag`
   - phone/watch/browser frame → `ui/DeviceFrame` (variant prop)
   - big pull quote            → `ui/QuoteBlock`
   - colored note card         → `ui/StickyNote`
   - red-before / green-after  → `ui/CompareCard`
   - eyebrow + title + role/type meta → `case/CaseIntro`
   - alternating text + media  → `case/TextImageBlock` (media side prop)
4. **Export assets.** Download images (mockups, dashboards, brand art, textures) to `public/images/<slug>/`, kebab-case names. Reference via `next/image`.
5. **Place code per `AGENTS.md`.** Primitive → `ui/`; page-specific block → `home/` or `case/`. Copy goes to `data/`, not JSX.
6. **Responsive:** build mobile-first; the Figma frame is the `lg` target. Sections stack on phone, fluid type.
7. **Verify:** render the route, diff against the screenshot at desktop + phone widths.
