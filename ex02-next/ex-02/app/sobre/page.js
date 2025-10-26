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
              <li>React 18</li>
              <li>CSS global (custom)</li>
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
            <strong>Links</strong>
            <ul className="muted">
              <li><a href={profile.socials.github} target="_blank">GitHub</a></li>
              <li><a href={profile.socials.linkedin} target="_blank">LinkedIn</a></li>
              <li><a href={profile.socials.instagram} target="_blank">Instagram</a></li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
