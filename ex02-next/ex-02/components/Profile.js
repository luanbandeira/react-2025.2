export default function Profile({ name = "Seu Nome", bioLines = [], photo = "/meu-perfil.jpg" }){
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <img src={photo} alt={name} style={{ width: 128, height:128, objectFit:"cover", borderRadius:"50%", border:"2px solid var(--border)" }} />
      <h1 className="h1">{name}</h1>
      <p className="muted" style={{ maxWidth: 540, margin:"8px auto 0", lineHeight:1.6 }}>
        {bioLines.map((line, i) => (<span key={i}>{line}{i < bioLines.length-1 ? <><br/></> : null}</span>))}
      </p>
    </div>
  );
}
