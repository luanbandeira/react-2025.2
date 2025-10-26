import { localProjects } from "../../data/projects-local";

const GITHUB_USER = "luanbandeira";

async function fetchRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=8`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Falha ao buscar repositórios");
  return res.json();
}

export const metadata = { title: "Projetos — Luan Bandeira" };

export default async function Projetos() {
  const repos = await fetchRepos();

  const localAsRepos = localProjects.map((p, idx) => ({
    id: `local-${idx}`,
    name: p.name,
    description: p.description,
    html_url: p.url,
    language: p.tags?.[0] ?? "N/A",
    stargazers_count: "—",
    updated_at: new Date().toISOString()
  }));

  const all = [...localAsRepos, ...repos];

  return (
    <section className="container">
      <h2 className="h2">Projetos Desenvolvidos</h2>
      <p className="muted">
        GitHub (@{GITHUB_USER}) + projetos locais.
      </p>

      <div className="grid cards" style={{ marginTop: 16 }}>
        {all.map((r) => (
          <a
            key={r.id}
            href={r.html_url}
            target="_blank"
            rel="noreferrer"
            className="card"
          >
            <strong>{r.name}</strong>
            <p className="muted" style={{ marginTop: 8 }}>
              {r.description ?? "Sem descrição"}
            </p>
            <div className="stack" style={{ marginTop: 10 }}>
              {r.language && <span className="badge">{r.language}</span>}
              <span className="badge">★ {r.stargazers_count}</span>
              <span className="badge">
                {new Date(r.updated_at).toLocaleDateString("pt-BR")}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
