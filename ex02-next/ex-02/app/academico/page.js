import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";

export default function Academico(){
  return (
    <Section title="Experiência Acadêmica" subtitle="Formações, cursos e atividades">
      <div className="timeline">
        <TimelineItem
          title="Sistemas para Internet"
          org="UNICAP"
          period="2025.2 — Atual"
          items={[
            "Projeto Integrador: Simple Money (educação financeira).",
            "POO (Java), Redes, Front-end (React/Next.js).",
            "UML (diagramas de classes, sequência e estados)."
          ]}
        />
        {/* Adicione outros itens aqui */}
      </div>
    </Section>
  );
}
