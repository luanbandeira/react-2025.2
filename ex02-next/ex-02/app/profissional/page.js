import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";
import { profissional } from "@/data/profissional";

export const metadata = { title: "Profissional — Luan Bandeira" };

export default function Profissional() {
  return (
    <Section title="Experiência Profissional" subtitle="Trabalhos, estágios e projetos">
      <div className="timeline">
        {profissional.map((it, i) => <TimelineItem key={i} {...it} />)}
      </div>
    </Section>
  );
}
