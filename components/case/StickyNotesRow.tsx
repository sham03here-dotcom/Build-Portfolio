import type { NoteTone } from "@/types";
import { Reveal } from "@/components/motion/Reveal";
import { StickyNote } from "@/components/ui/StickyNote";

type Props = {
  notes: { tone: NoteTone; text: string }[];
};

/** Row of research sticky notes, staggered in on scroll. */
export function StickyNotesRow({ notes }: Props) {
  return (
    <div className="mt-12 flex flex-wrap gap-4 md:mt-14">
      {notes.map((note, i) => (
        <Reveal key={note.text.slice(0, 24)} delay={i * 0.08}>
          <StickyNote tone={note.tone}>{note.text}</StickyNote>
        </Reveal>
      ))}
    </div>
  );
}
