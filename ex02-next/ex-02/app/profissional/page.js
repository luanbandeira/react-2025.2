import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";

export default function Profissional(){
  return (
    <Section title="Experiência Profissional" subtitle="Trabalhos, estágios e projetos práticos">
      <div className="timeline">
        <TimelineItem
          title="Assistente/Estágio em TI"
          org="Empresa X"
          period="2024 — 2025"
          items={[
            "Suporte a usuários e manutenção de ambientes.",
            "Automação de rotinas com scripts.",
            "Apoio a projetos web."
          ]}
        />
      </div>
    </Section>
  );
}
