"use client";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({ disabled, used, onGuess }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(13, 1fr)", gap: 8, maxWidth: 650 }}>
      {LETTERS.map((L) => {
        const isUsed = used.has(L);
        return (
          <button
            type="button"
            key={L}
            disabled={disabled || isUsed}
            onClick={() => onGuess(L)}
            style={{
              height: 36,
              borderRadius: 6,
              border: "1px solid #ccc",
              background: isUsed ? "#eee" : "white",
              cursor: isUsed ? "not-allowed" : "pointer",
            }}
            aria-pressed={isUsed}
          >
            {L}
          </button>
        );
      })}
    </div>
  );
}
