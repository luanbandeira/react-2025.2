const GITHUB_USER = "luanbandeira"; // <-- troque aqui

async function fetchRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=8`,
    { next: { revalidate: 3600 } } // revalida a cada 1h (ISR)
  );
  if (!res.ok) throw new Error("Falha ao buscar repositórios");
  return res.json();
}

export default async function Projetos(){
  const repos = await fetchRepos();

  return (
    <section className="container">
      <h2 className="h2">Projetos Desenvolvidos</h2>
      <p className="muted">Listando repositórios públicos mais recentes do GitHub (@{GITHUB_USER}).</p>

      <div className="grid cards" style={{ marginTop: 16 }}>
        {repos.map((r) => (
          <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="card">
            <strong>{r.name}</strong>
            <p className="muted" style={{ marginTop: 8 }}>{r.description ?? "Sem descrição"}</p>
            <div className="stack" style={{ marginTop: 10 }}>
              {r.language && <span className="badge">{r.language}</span>}
              <span className="badge">★ {r.stargazers_count}</span>
              <span className="badge">Updated: {new Date(r.updated_at).toLocaleDateString("pt-BR")}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
