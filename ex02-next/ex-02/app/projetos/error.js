"use client";

export default function Error({ error, reset }) {
  return (
    <section className="container">
      <h2 className="h2">Erro ao carregar projetos</h2>
      <p className="muted" style={{ marginTop:8 }}>
        {error?.message ?? "Algo deu errado ao buscar a API do GitHub."}
      </p>
      <button
        onClick={() => reset()}
        className="badge"
        style={{ cursor:"pointer", marginTop:12 }}
        aria-label="Tentar recarregar a lista de projetos"
      >
        Tentar novamente
      </button>
    </section>
  );
}
