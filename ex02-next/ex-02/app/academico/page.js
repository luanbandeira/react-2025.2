import Section from "../../components/Section";
import TimelineItem from "../../components/TimelineItem";
import { academico } from "../../data/academico";

export const metadata = { title: "Acadêmico — Luan Bandeira" };

export default function Academico() {
  return (
    <Section title="Experiência Acadêmica" subtitle="Formações, cursos e atividades">
      <div className="timeline">
        {academico.map((it, i) => <TimelineItem key={i} {...it} />)}
      </div>
    </Section>
  );
}
