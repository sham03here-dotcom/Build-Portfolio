import type { CaseStudy } from "@/types";

/**
 * Epayhub case study — copy and structure extracted from the Figma export
 * (screen assets/Epayhub.svg, node 2:1971). Copy is verbatim from the design.
 */
export const epayhub: CaseStudy = {
  slug: "epayhub",
  accent: "green",
  metaTitle: "Epayhub — Designing the Wallet users actually want to fund",
  metaDescription:
    "Case study: redesigning a fintech payments app so the in-app Wallet becomes the rational, obvious choice over direct card payments.",
  eyebrow: "FINTECH • PAYMENT • MOBILE",
  title: "Designing the Wallet,\nusers actually want to fund.",
  intro:
    "A redesign of a bill, recharge & beneficiary payments app, built around one behavioural goal: move everyday transactions away from direct credit-card payments and into the in-app Wallet.",
  meta: [
    { label: "ROLE", value: "Product Designer" },
    { label: "SCOPE", value: "UX strategy · UI redesign" },
    { label: "PLATFORM", value: "Mobile App" },
  ],
  hero: {
    src: "/images/epayhub/hero-wallet.svg",
    alt: "Epayhub Wallet card floating over a phone on a green backdrop",
    width: 1512,
    height: 917,
  },
  sections: [
    {
      type: "text",
      eyebrow: "OVERVIEW",
      title: "A working app with a business\nproblem, not a broken one.",
      body: [
        "The app lets people pay utility bills, recharge, and send money to beneficiaries. Two payment routes exist side by side: paying directly with a saved credit card, or paying from the in-app Wallet.",
        "The client came in for a redesign with a specific commercial concern: almost everyone was paying directly by card, and the Wallet, the feature the business wants to grow, was being ignored. My job was to understand why, and redesign the experience so the Wallet becomes the natural, obvious choice without resorting to dark patterns.",
      ],
    },
    {
      type: "quote",
      text: "“How might we make paying from the Wallet feel like the smarter, cheaper, more rewarding choice, at the exact moment a user decides how to pay?”",
    },
    {
      type: "text",
      eyebrow: "THE PROBLEM",
      title: "The card wasn't winning by accident.\nIt was the rational choice.",
      body: [
        "Digging into the existing flows, the issue wasn't that the Wallet button was hidden. The card carried a per-transaction tax, a fee and a settlement-speed decision every single time, yet nothing made that visible. And the one move that escapes it, pre-loading the Wallet, ran straight into a gut objection: From the user's seat, tapping the card was simply the easier call.",
      ],
    },
    {
      type: "stickies",
      notes: [
        {
          tone: "blue",
          text: "Every time a fee + a decision, per payment paying by card charges a settlement fee (% + GST + bank fee) and forces a speed-vs-cost choice (Express 1.60%, Regular 1.20%, Economy 0.99%) on every single transaction.",
        },
        {
          tone: "purple",
          text: "Why pre-pay?\" the dead-money objection, Even when the Wallet is cheaper, loading money in feels like a loss: funds sitting idle in an app, with no sense of what they're for. The real barrier to top-up was psychological, not mathematical.",
        },
        {
          tone: "yellow",
          text: "Always reacting, never ahead\n\nThe card can only pay for what's already in front of you, so every bill is handled in the moment it lands. There's no way to get ahead of the month or plan for what's coming.",
        },
      ],
    },
    {
      type: "panel",
      eyebrow: "CURRENT EXPERIENCE",
      title: "At checkout, both options look the\nsame, so the simpler one wins.",
      body: [
        "On the existing payment-method screen, the Wallet and the card sit in a plain list. The card's per-transaction fee is buried inside a \"View Breakdown\" the user rarely opens, so the two feel equally priced. Given that, people pick the path with fewer step.",
      ],
      image: {
        src: "/images/epayhub/checkout-before.svg",
        alt: "Existing checkout: payment-method list and the fee breakdown hidden a tap away",
        width: 992,
        height: 622,
      },
    },
    {
      type: "text",
      eyebrow: "SOLUTION",
      title: "Make the saving visible,\nand give the balance a job.",
      body: [
        "The Wallet was already the cheaper habit; the work was making that legible and removing the reasons not to fund it. Three moves: surface the saving at the moment of choice, let people plan and fund the month ahead instead of paying reactively, and turn the balance into the engine that runs your recurring bills.",
      ],
    },
    {
      type: "move",
      eyebrow: "01 / HIGHEST LEVERAGE",
      title: "Show the saving at the\npoint of choice",
      body: [
        "Instead of a bare \"Recommended\" tag, every option now carries its true cost inline. The card shows the fee it adds; the Wallet shows what you save.",
        "The strip sits between Total and Continue, so the eye sweeps Total → saving → CTA. It turns the ₹0 fees into a concrete, compared saving right at the decision point.",
      ],
      image: {
        src: "/images/epayhub/solution-saving.svg",
        alt: "Redesigned payment sheet showing “You saving ₹114 by paying from wallet”",
        width: 992,
        height: 622,
      },
      mediaSide: "left",
      tone: "light",
    },
    {
      type: "move",
      eyebrow: "02 / PLANNING AHEAD",
      title: "Pay your month on purpose,\ninstead of bill by bill",
      body: [
        "Paying by card is always reactive: each bill is handled on its own, in the moment it lands, with a fee every time. The Wallet flips that. A 30-day forecast lays out everything coming due, so the user can fund once, on purpose, for the whole month ahead, and let it all run from the balance. It's a kind of foresight the card structurally can't offer, because a card only ever pays for what's already in front of you.",
      ],
      image: {
        src: "/images/epayhub/solution-planning.svg",
        alt: "30-day forecast screen: total due, coverage ring and upcoming bills",
        width: 992,
        height: 622,
      },
      mediaSide: "right",
      tone: "light",
    },
    {
      type: "move",
      eyebrow: "03 / REMOVING THE REAL OBJECTION",
      title: "Make the balance work,\nso it never feels idle",
      body: [
        "The honest barrier to topping up isn't the fee. It's \"why should my money sit in your app?\" So the Wallet stops being a balance you fund and becomes the hub that runs your recurring payments. Rent, electricity, recharges and beneficiaries pay themselves on their due date, instant and free from balance.",
        "Crucially, autopay is built as a control feature, not an auto-debit: every bill is opt-in per item, an upcoming view means nothing is ever a surprise, and a low-balance heads-up fires before any scheduled payment. Pre-loaded money isn't dead; it's already doing a job.",
      ],
      image: {
        src: "/images/epayhub/solution-autopay.svg",
        alt: "Autopay hub with per-item opt-in toggles for recurring payments",
        width: 992,
        height: 622,
      },
      mediaSide: "left",
      tone: "light",
    },
    {
      type: "comparison",
      eyebrow: "THE SHIFT",
      title: "From \"why bother?\" to\n\"why wouldn't I?\"",
      body: [
        "The Wallet was already the cheaper habit, the work was making that legible and removing the reason not to fund it. Three moves: surface the saving at the moment of choice, reframe the fee as a one-time cost, and turn the balance from idle money into the engine that runs your recurring bills.",
      ],
      before: {
        label: "BEFORE · THE USER'S LOGIC",
        text: "Every payment makes me pick a settlement speed and pay a fee anyway. Moving money into a Wallet first, finishing a KYC call, adding a step. Why bother? I'll just tap my card. The 'Recommended' tag is the app looking after itself, not me.",
      },
      after: {
        label: "AFTER · THE USER'S LOGIC",
        text: "The screen shows I'm ₹114 cheaper paying from Wallet, so I do. It tells me what's due this month and I top up once to cover all of it, instead of scrambling bill by bill. Now they pay themselves. Paying by card every time suddenly feels like paying extra to do more work.",
      },
    },
    {
      type: "takeaways",
      eyebrow: "KEY LEARNINGS",
      items: [
        {
          title: "Surface the structure,\ndon't sell",
          body: "The Wallet was already the cheaper habit; the work was making its pay-once structure legible, not inventing an advantage. Design's job was translation, not persuasion.",
        },
        {
          title: "Trust is the\nproduct",
          body: "In a payments app, anything that feels like the company steering you toward its own interest backfires. Persuade with honesty, not pressure.",
        },
        {
          title: "Show,\ndon't claim",
          body: "\"Recommended\" is an assertion. \"You save ₹114\" is evidence. Replacing claims with numbers did more than any visual emphasis could.",
        },
      ],
    },
    {
      type: "note",
      lead: "The card no longer wins by default.",
      body: "By making the saving visible, letting people fund the month on purpose, and running their bills for them, the Wallet became the visibly rational choice for the first time, turning a feature users avoided into the path of least resistance.",
    },
  ],
};
