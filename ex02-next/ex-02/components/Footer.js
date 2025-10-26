export default function Footer(){
  return (
    <div style={{ padding: "24px", textAlign: "center", color: "var(--muted)" }}>
      © {new Date().getFullYear()} Seu Nome — Feito com Next.js
    </div>
  );
}
