import type { Project } from "@/types";

/**
 * Works-grid projects, in display order. Each links to /work/<slug>.
 * Thumbnails live in /public/images/home/ (exported from Figma).
 */
export const projects: Project[] = [
  {
    slug: "epayhub",
    title: "Epayhub",
    tags: ["UI/UX DESIGN", "FINTECH", "MOBILE APP"],
    accent: "green",
    thumb: "/images/home/epayhub-card.svg",
    thumbAlt: "Epayhub payment app on a phone",
    order: 1,
  },
  {
    slug: "iirm",
    title: "IIRM",
    tags: ["UI/UX DESIGN", "INSURANCE", "WEB APP"],
    accent: "blue",
    thumb: "/images/home/iirm-card.svg",
    thumbAlt: "IIRM insurance dashboard",
    order: 5,
    hidden: true,
  },
  {
    slug: "fitness",
    title: "Fitness",
    tags: ["UI/UX DESIGN", "FITNESS", "WEARABLE"],
    accent: "orange",
    thumb: "/images/home/fitness-card.svg",
    thumbAlt: "Fitness app on an Apple Watch",
    order: 2,
  },
  {
    slug: "newbox",
    title: "Newbox",
    tags: ["BRANDING", "LOGISTICS & SUPPLY CHAIN", "VISUAL DESIGN"],
    accent: "indigo",
    thumb: "/images/home/newbox-card.svg",
    thumbAlt: "Newbox brand logo",
    order: 3,
  },
  {
    slug: "type-whatever",
    title: "Type Whatever",
    tags: ["DESIGN", "BUILT", "INTERACTIVE"],
    accent: "yellow",
    thumb: "/images/home/type-whatever-card.svg",
    thumbAlt: "Type Whatever interactive browser experience",
    order: 4,
  },
];
