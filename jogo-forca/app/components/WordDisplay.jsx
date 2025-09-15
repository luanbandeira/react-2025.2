"use client";

export default function WordDisplay({ word, guessed }) {
  return (
    <div style={{ display: "flex", gap: 8, fontSize: 28, fontFamily: "monospace" }}>
      {word.split("").map((ch, i) => (
        <span key={i} aria-label={guessed.has(ch) ? ch : "blank"}>
          {guessed.has(ch) ? ch : "_"}
        </span>
      ))}
    </div>
  );
}
