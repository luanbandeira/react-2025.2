"use client";

export default function HangmanFigure({ wrong }) {
  // wrong: 0..6
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" className="gallows">
      {/* base da forca */}
      <line x1="10" y1="200" x2="160" y2="200" />
      <line x1="40" y1="200" x2="40" y2="20" />
      <line x1="40" y1="20" x2="120" y2="20" />
      <line x1="120" y1="20" x2="120" y2="50" />
      {/* cabeça */}
      {wrong > 0 && <circle cx="120" cy="70" r="18" className="part" />}
      {/* tronco */}
      {wrong > 1 && <line x1="120" y1="88" x2="120" y2="135" className="part" />}
      {/* braços */}
      {wrong > 2 && <line x1="120" y1="100" x2="95"  y2="120" className="part" />}
      {wrong > 3 && <line x1="120" y1="100" x2="145" y2="120" className="part" />}
      {/* pernas */}
      {wrong > 4 && <line x1="120" y1="135" x2="100" y2="170" className="part" />}
      {wrong > 5 && <line x1="120" y1="135" x2="140" y2="170" className="part" />}
    </svg>
  );
}
