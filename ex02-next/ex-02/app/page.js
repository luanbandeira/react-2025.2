import Profile from "@/components/Profile";
import Section from "@/components/Section";

export default function Home(){
  return (
    <>
      <Profile
        name="Luan Bandeira"
        photo="ex02-next/ex-02/public/profile.png"
        bioLines={[
          "Entusiasta de tecnologia e finanças descentralizadas.",
          "Explorando como o Bitcoin pode mudar o mundo.",
          "Acredito em liberdade e inovação digital."
        ]}
      />

      <Section title="Destaques" subtitle="Alguns tópicos que curto estudar e construir">
        <div className="stack">
          <span className="badge">React</span>
          <span className="badge">Next.js</span>
          <span className="badge">Java</span>
          <span className="badge">Redes</span>
          <span className="badge">Bitcoin</span>
        </div>
      </Section>
    </>
  );
}
