import Image from "next/image";

export default function Profile({ name, photo, bioLines = [] }) {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <Image
        src={photo}
        alt={`Foto de ${name}`}
        width={128}
        height={128}
        priority
        style={{ borderRadius: "50%", border: "2px solid var(--border)", objectFit: "cover" }}
      />
      <h1 className="h1" style={{ marginTop: 12 }}>{name}</h1>
      <p className="muted" style={{ maxWidth: 540, margin: "8px auto 0", lineHeight: 1.6 }}>
        {bioLines.map((line, i) => (
          <span key={i}>
            {line}{i < bioLines.length - 1 ? <><br /></> : null}
          </span>
        ))}
      </p>
    </div>
  );
}
