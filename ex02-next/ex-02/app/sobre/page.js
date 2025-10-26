import Section from "@/components/Section";

export default function Sobre(){
  return (
    <>
      <Section title="Sobre mim" subtitle="Tecnologias / módulos utilizados neste app">
        <div className="grid">
          <div className="card">
            <strong>Stack do App</strong>
            <ul className="muted">
              <li>Next.js (App Router)</li>
              <li>React 18</li>
              <li>CSS global simples (pode evoluir para Tailwind)</li>
              <li>Fetch em Server Component (projetos)</li>
            </ul>
          </div>
          <div className="card">
            <strong>Boas práticas</strong>
            <ul className="muted">
              <li>Componentização (Profile, Section, TimelineItem)</li>
              <li>Rotas semânticas</li>
              <li>Revalidação de dados (ISR)</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
