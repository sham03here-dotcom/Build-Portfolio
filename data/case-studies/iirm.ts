import type { CaseStudy } from "@/types";

/**
 * IIRM case study — copy and structure extracted from the Figma export
 * (screen assets/IIRM.svg, node 2:6800). Copy is verbatim from the design.
 */
export const iirm: CaseStudy = {
  slug: "iirm",
  accent: "blue",
  metaTitle: "IIRM — The enrollment flow employees actually finish",
  metaDescription:
    "Case study: designing a guided six-step corporate-insurance enrollment journey, from reviewing benefits to a confirmed post-enrollment dashboard.",
  eyebrow: "CORPORATE INSURANCE • EXPERIENCE",
  title: "The enrollment flow\nemployees actually finish.",
  intro:
    "Picking corporate insurance means decoding jargon, weighing coverage, and adding family member usually across emails and PDFs. I designed the end-to-end enrollment journey: a guided, six-step flow that takes an employee from reviewing benefits to a confirmed enrollment, with confidence at every step.",
  meta: [
    { label: "ROLE", value: "UX / UI Designer" },
    { label: "SCOPE", value: "Enrollment Flow" },
    { label: "DOMAIN", value: "Employee Insurance" },
  ],
  hero: {
    src: "/images/iirm/hero-portal.jpg",
    alt: "IIRM employee-benefits portal dashboard on a blue backdrop with two illustrated employees",
    width: 1512,
    height: 940,
  },
  sections: [
    {
      type: "text",
      eyebrow: "OVERVIEW",
      title: "The flow at the heart of the portal.",
      body: [
        "This is an employee benefits portal where staff at a partner organisation access employer-sponsored insurance. Within it, enrollment is the make-or-break journey, where an employee commits to coverage for themselves and their family during a limited annual window.",
        "This case study covers that flow end to end: from reviewing benefits, adding dependents and top-ups, through a summary, identity verification, submission, and the confirmed post-enrollment state. Login is only the entry point the design work begins the moment the employee steps inside.",
      ],
    },
    {
      type: "list",
      eyebrow: "THE PROBLEM",
      title: "Enrollment is where good\nbenefits go to stall.",
      body: [
        "Employees rarely abandon insurance because the coverage is bad — they stall because the act of enrolling is confusing, high-stakes, and gives no sense of progress.",
      ],
      items: [
        {
          title: "Jargon at the decision point",
          body: "Sum insured, top-ups, floater cover, GMC / GPA / GTL — terms employees must act on without ever being taught.",
        },
        {
          title: "Dependents are hard to get right",
          body: "Spouse, children, parents, siblings — each with different eligibility and premiums. Easy to under- or over-cover.",
        },
        {
          title: "No visible cost of choices",
          body: "Selections change what comes out of an employee's salary, but that cost is usually hidden until it's too late.",
        },
        {
          title: "Fear of the irreversible submit",
          body: "\"Did I pick the right plan for my family?\" Low confidence at submission causes drop-off right at the finish line.",
        },
      ],
    },
    {
      type: "columns",
      eyebrow: "APPROACH",
      title: "Make the path visible, teach in\ncontext, lower the stakes",
      body: [
        "I designed against one test: could a first-timer always answer \"where am I, what do I decide here, and what does it cost?\" That produced three principles that shaped every screen.",
      ],
      items: [
        {
          title: "A visible spine.",
          body: "Enrollment is six explicit steps with a persistent progress tracker, so the whole journey is legible before it begins and progress is always felt.",
        },
        {
          title: "Teach where the\ndecision happens",
          body: "Coverage terms are explained inside the cards where they're chosen, and a live premium calculator shows the salary impact of every selection in real time.",
        },
        {
          title: "De-risk the commitment",
          body: "A full summary, explicit consent, and OTP identity verification precede submission; an instant success state and a post-enrollment dashboard confirm it worked.",
        },
      ],
    },
    {
      type: "figure",
      eyebrow: "THE FLOW",
      title: "Six steps, no guesswork",
      body: [
        "A persistent tracker shows all six steps from the start — turning an opaque process into a finishable path.",
      ],
      image: {
        src: "/images/iirm/flow-stepper.svg",
        alt: "Six-step flow: Login Portal, Review Benefits, Add Dependents, Select Top-Ups, Submit Enrolment, Receive Confirmation",
        width: 782,
        height: 86,
      },
    },
    {
      type: "move",
      eyebrow: "01 / REVIEW YOUR BENEFITS",
      title: "Benefits, grouped and\nexplained",
      body: [
        "The employee opens to a clear policy period and their benefits split into Compulsory, Flex, and Optional. So what's automatic is separated from what's a choice. Each policy (GMC, GPA, GTL) shows sum insured, who's covered, and plain-language highlights.",
        "Collapsible cards keep the page calm; \"View Policy Details\" offers depth on demand without cluttering the scan.",
      ],
      image: {
        src: "/images/iirm/screen-01.png",
        alt: "Benefits overview grouped into Compulsory, Flex and Optional policies",
        width: 1196,
        height: 2236,
      },
      mediaSide: "left",
      tone: "light",
      wide: true,
    },
    {
      type: "move",
      eyebrow: "02 / ADD DEPENDENTS",
      title: "Add family and see the\ncost as you go",
      body: [
        "The highest-friction step. Employees add members with relation, gender, and date of birth in a structured form, while a live Premium Calculator on the right updates total premium, employee contribution, and company contribution in real time.",
        "This makes the salary impact of every dependent visible at the moment of decision and a \"deducted in 3 equal installments\" note removes payment surprise.",
      ],
      image: {
        src: "/images/iirm/screen-02.png",
        alt: "Add-dependents form beside a live premium calculator",
        width: 1692,
        height: 1980,
      },
      mediaSide: "right",
      tone: "dark",
      wide: true,
    },
    {
      type: "move",
      eyebrow: "03 / REVIEW SUMMARY & CONSENT",
      title: "One last look before\ncommitting",
      body: [
        "Top-ups selected, the employee sees a complete enrollment summary — every policy, base cover, premiums, and contributions in one place followed by the headline totals: total premium, their share, and the company.",
        "Explicit, itemised consent checkboxes sit before the action buttons, so agreement is informed and deliberate rather than a hidden tick. Back, Save & Exit, and Confirm give the user full control.",
      ],
      image: {
        src: "/images/iirm/screen-03.png",
        alt: "Enrollment summary with itemised consent checkboxes",
        width: 1182,
        height: 1492,
      },
      mediaSide: "left",
      tone: "light",
      wide: true,
    },
    {
      type: "move",
      eyebrow: "04 / VERIFY & SUBMIT",
      title: "Identity verified,\nthen submitted",
      body: [
        "Because enrollment is legally binding, submission is gated by OTP verification. The user chooses a channel mobile, email, or both — enters the code, and only then submits.",
        "A clear \"Enrollment Successfully Submitted\" state closes the loop with the promise of a confirmation email, so the user never wonders whether it went through.",
      ],
      image: {
        src: "/images/iirm/screen-04.png",
        alt: "Enrollment successfully submitted confirmation",
        width: 1090,
        height: 806,
      },
      mediaSide: "right",
      tone: "dark",
      wide: true,
    },
    {
      type: "move",
      eyebrow: "05 / CONFIRMATION & DASHBOARD",
      title: "Enrolled and\nimmediately useful",
      body: [
        "Post-submission, the employee lands on a confirmation dashboard: a congratulations header, Newly Enrolled Policies, currently active policies, and a Claim Summary with live statuses (Approved, Pending, Action Required).",
        "Enrollment doesn't dead-end at \"done\" it hands the user straight into managing what they just bought, with the enrollment window still open for edits.",
      ],
      image: {
        src: "/images/iirm/screen-05.png",
        alt: "Post-enrollment confirmation dashboard with newly enrolled policies and claim summary",
        width: 1152,
        height: 2484,
      },
      mediaSide: "left",
      tone: "light",
      wide: true,
    },
    {
      type: "note",
      lead: "An enrollment journey that feels guided, not guessed.",
      body: "The core lesson — in a high-stakes flow, showing the path and its cost is as important as the path itself. Visible progress and transparent pricing are what carry people to the finish.",
    },
  ],
};
