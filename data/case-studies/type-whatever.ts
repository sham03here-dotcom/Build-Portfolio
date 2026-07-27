import type { CaseStudy } from "@/types";

/**
 * Type Whatever case study — copy and structure extracted from the Figma
 * export (screen assets/Type Whatever.svg, node 2:6730). Copy is verbatim.
 */
export const typeWhatever: CaseStudy = {
  slug: "type-whatever",
  accent: "yellow",
  metaTitle: "Type Whatever — Words you can type, and then let fall",
  metaDescription:
    "Case study: a small browser-based interactive type space where words have weight — type a thought, delete it, and the letters drop, tumble and pile up.",
  eyebrow: "INTERACTIVE · VIBE CODING",
  title: "Words you can type,\nand then let fall.",
  intro:
    "A small browser based interactive type space where your words have weight. Type a thought; delete it, and the letters drop, tumble and pile up at the bottom of the screen.",
  meta: [
    { label: "ROLE", value: "Design & build" },
    { label: "BUILT WITH", value: "Antigravity" },
  ],
  sections: [
    {
      type: "embed",
      src: "https://type-whatever.netlify.app/",
      title: "Type Whatever",
      displayUrl: "type-whatever.netlify.app",
      placeholder: "Type whatever comes to your mind",
      note: "Click inside · type something · press Backspace or Erase to drop the letters",
      keys: ["Backspace", "Erase"],
    },
    {
      type: "text",
      eyebrow: "",
      title: "Deleting doesn't erase. It lets go.",
      body: [
        "Most editors treat text as weightless. Here, every letter is a real physics object. Backspace detaches it so it falls and settles into a heap; Erase drops the whole line at once. Underneath, a calm HTML text layer sits over a Matter.js canvas, with fixed-step physics, interpolated rendering and sleeping piles keeping the motion smooth no matter how much you type. Whatever survives downloads as thoughts.txt.",
      ],
    },
  ],
};
