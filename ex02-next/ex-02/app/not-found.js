import Link from "next/link";

export default function NotFound(){
  return (
    <section className="container" style={{ textAlign:"center" }}>
      <h2 className="h2">Página não encontrada</h2>
      <p className="muted" style={{ marginTop:8 }}>
        A rota que você tentou acessar não existe.
      </p>
      <Link href="/" className="badge" style={{ display:"inline-block", marginTop:12 }}>
        Voltar para a Home
      </Link>
    </section>
  );
}
