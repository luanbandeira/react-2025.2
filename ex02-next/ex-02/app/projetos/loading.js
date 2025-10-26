export default function Loading() {
  return (
    <section className="container">
      <h2 className="h2">Projetos Desenvolvidos</h2>
      <p className="muted">Carregando projetos…</p>
      <div className="grid cards" style={{ marginTop: 16 }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card" style={{ opacity:.6 }}>
            <div style={{ height:18, background:"var(--border)", borderRadius:8, width:"60%" }} />
            <div style={{ height:12, background:"var(--border)", borderRadius:8, width:"90%", marginTop:10 }} />
            <div className="stack" style={{ marginTop:10 }}>
              <span className="badge">…</span>
              <span className="badge">★ …</span>
              <span className="badge">…/…/…</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
