import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { WorkCard } from "./WorkCard";

/** The "Works" section — a responsive 2-column grid of project tiles. */
export function WorksGrid() {
  const ordered = projects.filter((p) => !p.hidden).sort((a, b) => a.order - b.order);
  return (
    <section id="works" className="mx-auto w-full max-w-[1392px] px-6 py-12 md:px-[60px]">
      <Reveal>
        <h2 className="mb-10 text-base text-ink">WORKS</h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {ordered.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.12}>
            <WorkCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
