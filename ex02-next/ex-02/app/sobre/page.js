import Section from "../../components/Section";
import { profile } from "../../data/profile";

export const metadata = { title: "Sobre — Luan Bandeira" };

export default function Sobre() {
  return (
    <>
      <Section title="Sobre mim" subtitle="Tecnologias / módulos utilizados neste app">
        <div className="grid">
          <div className="card">
            <strong>Stack do App</strong>
            <ul className="muted">
              <li>Next.js (App Router)</li>
              <li>React</li>
              <li>CSS global</li>
              <li>Integração com API pública (GitHub)</li>
            </ul>
          </div>

          <div className="card">
            <strong>Minhas áreas</strong>
            <div className="stack" style={{ marginTop: 8 }}>
              {profile.stack.map((s) => (
                <span key={s} className="badge">{s}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <strong>O que é Bitcoin?</strong>
            <ul className="muted">
              <li><a href="Bitcoin: Um Sistema de Dinheiro Eletrônico Peer-to-Peer" target="_blank">Estude Bitcoin</a></li>
              <li><a href="https://bitcoin.org/en/getting-started" target="_blank">Pode começar a aprender por aqui</a></li>
              <li><a href="https://bitcoin.org/en/getting-started" target="_blank">@snug_buck</a></li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

