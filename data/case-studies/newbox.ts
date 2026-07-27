import type { CaseStudy } from "@/types";

/**
 * Newbox case study — copy and structure extracted from the Figma export
 * (screen assets/Newbox.svg, node 2:4819). A branding gallery: identity,
 * type, color, and applications from signage down to standees.
 */
export const newbox: CaseStudy = {
  slug: "newbox",
  accent: "indigo",
  metaTitle: "Newbox — Driving the brand forward",
  metaDescription:
    "Case study: a complete visual identity for Newbox, a supply-chain & logistics company — one bold mark, one electric blue, carried across signage, print, transit, events and merch.",
  eyebrow: "BRAND IDENTITY · LOGISTICS & SUPPLY CHAIN",
  title: "Newbox driving the brand forward.",
  intro:
    "A complete visual identity for Newbox, a supply-chain & logistics company. One bold mark, one electric blue, and a system built to move, carried across signage, print, transit, events and merch.",
  meta: [
    { label: "ROLE", value: "Brand & Visual Design" },
    { label: "SCOPE", value: "Identity · Collateral · Applications" },
  ],
  hero: {
    src: "/images/newbox/hero-mark.jpg",
    alt: "White Newbox mark over a dark architectural underside",
    width: 1512,
    height: 800,
  },
  sections: [
    {
      type: "gallery",
      columns: 1,
      images: [
        {
          src: "/images/newbox/facility.jpg",
          alt: "Newbox logo and mark applied to a warehouse facility",
          width: 977,
          height: 377,
        },
      ],
    },
    {
      type: "text",
      eyebrow: "COMPANY OVERVIEW",
      title:
        "Newbox is a leading provider of advanced supply chain solutions, specializing in optimizing logistics operations for businesses worldwide.",
      body: [],
    },
    {
      type: "gallery",
      columns: 1,
      images: [
        {
          src: "/images/newbox/logo-panel.jpg",
          alt: "Primary Newbox lockup on a light panel",
          width: 977,
          height: 367,
        },
      ],
    },
    {
      type: "gallery",
      columns: 1,
      images: [
        {
          src: "/images/newbox/logo-tiles.jpg",
          alt: "Newbox mark on light and the lockup reversed on electric blue",
          width: 977,
          height: 367,
        },
      ],
    },
    {
      type: "figure",
      eyebrow: "TYPEFACE",
      image: {
        src: "/images/newbox/type-specimen.jpg",
        alt: "Helvetica Neue specimen: Thin, Light, Regular, Medium, Bold, Heavy",
        width: 977,
        height: 180,
      },
    },
    {
      type: "palette",
      colors: [
        { hex: "#1806FC", rgb: "RGB: 24 6 252", span: 2 },
        { hex: "#F2F2F2", rgb: "RGB: 242 242 242" },
        { hex: "#070707", rgb: "RGB: 7 7 7" },
      ],
    },
    {
      type: "gallery",
      eyebrow: "VISUAL IDENTITY",
      columns: 2,
      images: [
        {
          src: "/images/newbox/poster-street.jpg",
          alt: "Newbox poster in a street display case",
          width: 607,
          height: 456,
        },
        {
          src: "/images/newbox/poster-column.jpg",
          alt: "Newbox poster on a lit column display",
          width: 353,
          height: 456,
        },
      ],
    },
    {
      type: "gallery",
      columns: 1,
      images: [
        {
          src: "/images/newbox/billboard.jpg",
          alt: "Driving your supply-chain forward — Newbox billboard in a transit station",
          width: 977,
          height: 550,
        },
      ],
    },
    {
      type: "gallery",
      columns: 1,
      images: [
        {
          src: "/images/newbox/flyers-pair.jpg",
          alt: "Two Newbox service flyers",
          width: 890,
          height: 665,
        },
        {
          src: "/images/newbox/flyer-dark.jpg",
          alt: "Dark landscape flyer: Driving your supply-chain forward",
          width: 880,
          height: 565,
        },
      ],
    },
    {
      type: "gallery",
      columns: 3,
      images: [
        { src: "/images/newbox/brochure-01.jpg", alt: "Brochure spread mockup", width: 324, height: 243 },
        { src: "/images/newbox/brochure-02.jpg", alt: "Brochure cover mockup", width: 324, height: 243 },
        { src: "/images/newbox/brochure-03.jpg", alt: "Brochure inner pages mockup", width: 324, height: 243 },
        { src: "/images/newbox/brochure-04.jpg", alt: "Brochure detail mockup", width: 324, height: 243 },
        { src: "/images/newbox/brochure-05.jpg", alt: "Brochure fold mockup", width: 324, height: 243 },
        { src: "/images/newbox/brochure-06.jpg", alt: "Brochure stack mockup", width: 324, height: 243 },
      ],
    },
    {
      type: "gallery",
      columns: 1,
      images: [
        {
          src: "/images/newbox/trifold.jpg",
          alt: "Newbox trifold brochure, open",
          width: 691,
          height: 489,
        },
      ],
    },
    {
      type: "gallery",
      columns: 1,
      images: [
        {
          src: "/images/newbox/lanyard.jpg",
          alt: "Newbox Innovation Day lanyard and event badge",
          width: 977,
          height: 676,
        },
      ],
    },
    {
      type: "gallery",
      columns: 2,
      images: [
        {
          src: "/images/newbox/badge-photo.jpg",
          alt: "Event badge with lanyard, angled",
          width: 483,
          height: 410,
        },
        {
          src: "/images/newbox/badge-flat.jpg",
          alt: "Event badge, front",
          width: 483,
          height: 410,
        },
      ],
    },
    {
      type: "gallery",
      columns: 2,
      images: [
        { src: "/images/newbox/standee-01.jpg", alt: "Newbox roll-up standee, front", width: 482, height: 361 },
        { src: "/images/newbox/standee-02.jpg", alt: "Newbox standee, three-quarter view", width: 482, height: 361 },
        { src: "/images/newbox/standee-03.jpg", alt: "Newbox standee with QR panel", width: 482, height: 361 },
        { src: "/images/newbox/standee-04.jpg", alt: "Newbox standee pair", width: 482, height: 361 },
      ],
    },
    {
      type: "note",
      lead: "A brand built to keep moving.",
      body: "A single, confident system, one mark, one blue, one voice, flexible enough to scale from a building wall down to a lanyard, and recognisable at every stop along the way.",
    },
  ],
};
