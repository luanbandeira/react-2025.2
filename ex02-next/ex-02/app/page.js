import Profile from "@/components/Profile";
import Section from "@/components/Section";
import { profile } from "@/data/profile"; // se der erro de alias, use: ../data/profile

export default function Home() {
  return (
    <>
      <Profile
        name={profile.name}
        photo={profile.photo}
        bioLines={profile.bioLines}
      />

      <Section title="Destaques" subtitle="Tecnologias que uso/estudo">
        <div className="stack">
          {profile.stack.map(tag => (
            <span key={tag} className="badge">{tag}</span>
          ))}
        </div>
      </Section>
    </>
  );
}
