export default function Section({ title, subtitle, children }){
  return (
    <section className="container" style={{ marginTop: 18 }}>
      {title && <h2 className="h2">{title}</h2>}
      {subtitle && <p className="muted" style={{ marginTop: 4 }}>{subtitle}</p>}
      <div style={{ marginTop: 12 }}>{children}</div>
    </section>
  );
}
