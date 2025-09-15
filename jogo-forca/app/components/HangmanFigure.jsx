"use client";

export default function HangmanFigure({ wrong }) {
  // wrong: 0..6
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" className="gallows">
      {/* Forca fixa (NÃO conta como tentativa) */}
      <line x1="10"  y1="200" x2="160" y2="200" />  {/* base */}
      <line x1="40"  y1="200" x2="40"  y2="20"  />  {/* poste */}
      <line x1="40"  y1="20"  x2="120" y2="20"  />  {/* viga superior */}
      {/* (corda só aparece no 1º erro, junto com a cabeça) */}

      {/* 1º erro: corda + cabeça */}
      {wrong >= 1 && <line x1="120" y1="20"  x2="120" y2="50" className="part" />}   {/* corda */}
      {wrong >= 1 && <circle cx="120" cy="70" r="18" className="part" />}            {/* cabeça */}

      {/* 2º erro: tronco */}
      {wrong >= 2 && <line x1="120" y1="88"  x2="120" y2="135" className="part" />}

      {/* 3º erro: braço esquerdo */}
      {wrong >= 3 && <line x1="120" y1="100" x2="95"  y2="120" className="part" />}

      {/* 4º erro: braço direito */}
      {wrong >= 4 && <line x1="120" y1="100" x2="145" y2="120" className="part" />}

      {/* 5º erro: perna esquerda */}
      {wrong >= 5 && <line x1="120" y1="135" x2="100" y2="170" className="part" />}

      {/* 6º erro: perna direita */}
      {wrong >= 6 && <line x1="120" y1="135" x2="140" y2="170" className="part" />}
    </svg>
  );
}
