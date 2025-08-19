export default function Profile() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img 
        src="/profile.png" 
        alt="Minha foto de perfil" 
        style={{ width: "250px", borderRadius: "50%"  }} 
      />
      <h2>Luan Bandeira de Melo Ramos</h2>
      <p style={{ maxWidth: "400px", margin: "10px auto", lineHeight: "1.5" }}>
        Entusiasta de tecnologia e finanças descentralizadas. <br />
        Olhando para o Bitcoin como revolução financeira. <br />
      </p>
    </div>
  );
}
