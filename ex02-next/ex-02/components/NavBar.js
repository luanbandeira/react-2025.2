"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/academico", label: "Experiência Acadêmica" },
    { href: "/profissional", label: "Experiência Profissional" },
    { href: "/projetos", label: "Projetos" },
  ];

  return (
    <nav className="nav">
      {links.map(l => (
        <Link
          key={l.href}
          href={l.href}
          className={pathname === l.href ? "active" : ""}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
