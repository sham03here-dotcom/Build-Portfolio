import type { CaseStudy } from "@/types";

/**
 * Fitness (Apple Watch) case study — copy and structure extracted from the
 * Figma export (screen assets/Iwatch.svg, node 2:2488). Copy is verbatim.
 */
export const fitness: CaseStudy = {
  slug: "fitness",
  accent: "orange",
  metaTitle: "Fitness — Some problems don't belong only to a phone",
  metaDescription:
    "Case study: moving workout logging from the phone to the Apple Watch — a hands-free, Crown-driven flow designed for the rack, not the couch.",
  eyebrow: "CHOOSING THE RIGHT SURFACE · APPLE WATCH",
  title: "Some problems don't\nbelong only to a phone.",
  intro:
    "A case study in solving for the right surface. Tracking lifts is a phone job until you're at the rack, where the phone is the one thing you can't reach. So the real design work wasn't another app screen; it was moving the experience onto the wrist.",
  meta: [
    { label: "ROLE", value: "End-to-end UX/UI" },
    { label: "SURFACE", value: "Apple Watch" },
  ],
  hero: {
    src: "/images/fitness/hero-watches.jpg",
    alt: "Three Apple Watch Ultra mockups showing weight dial, exercise hand-off and rest timer screens",
    width: 2268,
    height: 1317,
  },
  sections: [
    {
      type: "columns",
      eyebrow: "THE PROBLEM",
      title: "The phone solved planning\nbut no until to the rack.",
      body: [
        "I tracked lifts on my phone for months. It held the data fine but the phone is the one thing I never have in hand mid-set. It's on the bench, in a bag, across the room. So the moment I actually needed last week's numbers, they were exactly where I couldn't reach.",
      ],
      items: [
        {
          title: "Out of reach",
          body: "Between sets, hands chalked, the phone is the last thing you want to dig out, unlock, and navigate.",
        },
        {
          title: "Recall fails when it counts",
          body: "The number I needed, what I lifted last time was buried in history, two taps away, at the exact second I was loading the bar.",
        },
        {
          title: "So progress became a guess",
          body: "Without last time in front of me, I'd lift roughly the same weight and hope. Progressing on purpose needs the number, right there.",
        },
      ],
    },
    {
      type: "quote",
      text: "“The watch is already on my wrist for the whole workout. That's where the number needs to live.”",
    },
    {
      type: "comparison",
      eyebrow: "THE HAND-OFF",
      title: "Two surfaces, Two jobs.",
      body: [
        "This isn't the whole app shrunk onto a wrist. The phone and the watch each do the single thing they're actually good at and the hand-off between them is the design. The phone stays the source of truth; the watch owns the workout itself.",
      ],
      tone: "neutral",
      before: {
        label: "BEFORE THE GYM",
        title: "Plan it once",
        text: "Build the routine sitting on the couch, exercises and set counts, no preset weights. A calm, deliberate job that wants a big screen and a keyboard. Then tap Start Workout.",
      },
      after: {
        label: "IN THE GYM",
        title: "Run it hands-free",
        text: "The session lands on your wrist already loaded. From here you log every set, rest, and advance sweaty, distracted, one-handed. The phone goes in the bag and stays there.",
      },
    },
    {
      type: "list",
      eyebrow: "DESIGN PRINCIPLES",
      title: "Three rules the wrist had to respect.",
      body: [
        "A watch screen is tiny, read while breathing hard, operated with one chalky thumb. I wrote these three down before drawing anything, in priority order, to judge every later call against.",
      ],
      numbered: true,
      items: [
        {
          title: "Memory at the moment of use",
          body: "Last session's numbers appear on the logging screen itself, not buried in history. This is the founding promise; any decision that hides it is wrong by definition.",
        },
        {
          title: "One thumb, no typing",
          body: "You can't type at the rack. The Digital Crown does the work, dial a number that's already close, glance, confirm. Every interaction survives fatigue and chalk.",
        },
        {
          title: "Decide, don't autopilot",
          body: "The watch remembers so you don't have to. But it still makes you choose the number. Recall without a rubber-stamp; you stay the one deciding to push.",
        },
      ],
    },
    {
      type: "move",
      eyebrow: "THE CORE INTERACTION",
      title: "Dial up from what you did,\nnot from zero.",
      body: [
        "When a set's logging cell becomes active, the Digital Crown is pre-loaded to last session's number 75 kg, not blank. A small line above reads \"Last · 75 kg × 8\". So the decision isn't \"what did I do?\" that's answered it's only \"do I match it or beat it?\" One turn of the Crown and you're at 77.5. Recall and input collapse into a single motion, and the founding promise lives exactly where it counts.",
      ],
      image: {
        src: "/images/fitness/core-dial.png",
        alt: "Apple Watch weight dial pre-loaded to last session's 77.5 kg",
        width: 256,
        height: 473,
      },
      mediaSide: "right",
      tone: "plain",
    },
    {
      type: "text",
      eyebrow: "THE WATCH FLOW",
      title: "From hand-off to synced.\nPhone never leaves the bag.",
      body: [
        "A whole session on the wrist, in four phases: the workout arrives, you log each set with two quick dials, move freely between exercises, and finish. The seven screens group into the rhythm you actually feel at the gym.",
      ],
    },
    {
      type: "figure",
      eyebrow: "PHASE / 01",
      title: "Start the workout arrives from your phone",
      body: [
        "You tap Start on the phone and the planned session lands on the wrist — exercises, set counts, and last session’s numbers, all queued. Nothing to set up; the watch already knows the plan. This is the last time the phone is involved.",
      ],
      image: {
        src: "/images/fitness/phase-01.png",
        alt: "Watch showing the arrived Push Day workout with a Start button",
        width: 200,
        height: 222,
      },
    },
    {
      type: "figure",
      eyebrow: "PHASE / 02",
      title: "Log a set, two dials and a rest, no keyboard",
      body: [
        "The core loop, repeated for every set. Weight and reps each get their own single-value screen so the Crown is never ambiguous it pre-loads on last session’s number, you dial and confirm. Logging then starts the rest timer on its own. Splitting the two values is the fix for an earlier design where one Crown couldn’t serve both cells at once.",
      ],
      image: {
        src: "/images/fitness/phase-02.png",
        alt: "Three watch screens: weight dial, reps dial and rest timer",
        width: 680,
        height: 222,
      },
    },
    {
      type: "figure",
      eyebrow: "PHASE / 03",
      title: "Move through the workout in any order",
      body: [
        "Real sessions aren’t a straight line: equipment’s taken, you superset, you change your mind. The exercise name opens the full list, where each lift shows its progress green done, orange half-finished, hollow untouched. Jump anywhere; each exercise remembers where you left off and reopens on its next unlogged set. Moving is free; editing the plan stays on the phone.",
      ],
      image: {
        src: "/images/fitness/phase-03.png",
        alt: "Watch screens: exercise list hand-off and the next unlogged set",
        width: 440,
        height: 222,
      },
    },
    {
      type: "figure",
      eyebrow: "PHASE / 04",
      title: "Finish and it syncs back",
      body: [
        "A clean completion state with any new PRs called out, then the whole session writes back to the phone, where History and Analytics update from real logged data. The phone is the record; the watch did the work you never reached for it once.",
      ],
      image: {
        src: "/images/fitness/phase-04.png",
        alt: "Watch completion screen with a new PR called out",
        width: 200,
        height: 222,
      },
    },
    {
      type: "text",
      eyebrow: "SCOPE CUT",
      title: "Navigate freely, but don't\nedit on the wrist",
      body: [
        "Letting you move through the workout in any order is essential at the rack. Letting you rewrite it, add, remove, reorder exercises is not. I prototyped it, and it dragged phone-sized complexity onto a glanceable screen. So the line is deliberate, free navigation on the watch, plan editing stays on the phone. The watch is a runner, not an editor.",
      ],
    },
    {
      type: "takeaways",
      eyebrow: "WHAT I'D CARRY FORWARD",
      items: [
        {
          title: "Design to the surface,\nnot the screen size",
          body: "The watch isn't a small phone. Flipping from empty-and-typed to pre-loaded-and-dialed was the single decision that made logging at the rack actually work.",
        },
        {
          title: "Audit against the\noriginal promise",
          body: "Reviewing my own build as a stranger caught the empty-cell miss the app silently abandoning its founding value. Highest-leverage step in the project.",
        },
        {
          title: "Validate before\nI add",
          body: "This rests on one honest data point my own repeated frustration. Next is lifter interviews and a diary study to confirm the in-workout-recall thesis before building further.",
        },
      ],
    },
  ],
};
