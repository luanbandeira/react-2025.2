import { profile } from "../data/profile";

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer style={{ padding: "24px 0", textAlign: "center" }}>
      <div className="stack" style={{ justifyContent:"center", gap:12, marginBottom:8 }}>
        <a className="badge" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="badge" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="badge" href={profile.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </div>
      <div className="muted">© {year} {profile.name} — Feito com Next.js</div>
    </footer>
  );
}
