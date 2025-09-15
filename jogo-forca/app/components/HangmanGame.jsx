"use client";

import { useEffect, useMemo, useState } from "react";
import { WORDS } from "../data/words";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import HangmanFigure from "./HangmanFigure";
import Attempts from "./Attempts";

const MAX_ERRORS = 6;

// Normaliza qualquer palavra para o formato do jogo (MAIÚSCULO, sem acento, só A–Z)
function normalize(word) {
  return word
    .toUpperCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Z]/g, "");
}
function randomWord() {
  const pick = WORDS[Math.floor(Math.random() * WORDS.length)] || "REACT";
  return normalize(pick);
}

export default function HangmanGame() {
  // ---------- STATES (ficam só aqui no pai) ----------
  const [target, setTarget] = useState("");     // palavra sorteada
  const [guessed, setGuessed] = useState(new Set()); // letras tentadas
  const [errors, setErrors] = useState(0);      // tentativas erradas
  const [status, setStatus] = useState("playing"); // "playing" | "won" | "lost"

  // inicia 1a partida
  useEffect(() => { newGame(); }, []);

  function newGame() {
    setTarget(randomWord());
    setGuessed(new Set());
    setErrors(0);
    setStatus("playing");
  }

  // ação de palpite (filho → pai via prop onGuess)
  function handleGuess(letter) {
    if (status !== "playing") return;
    if (!/^[A-Z]$/.test(letter)) return;

    setGuessed(prev => {
      if (prev.has(letter)) return prev; // ignora repetição
      const next = new Set(prev);
      next.add(letter);
      if (!target.includes(letter)) setErrors(e => e + 1);
      return next;
    });
  }

  // letras corretas e erradas (derivadas do estado)
  const correct = useMemo(
    () => new Set([...guessed].filter(L => target.includes(L))),
    [guessed, target]
  );
  const wrong = useMemo(
    () => new Set([...guessed].filter(L => !target.includes(L))),
    [guessed, target]
  );

  // verifica vitória/derrota
  useEffect(() => {
    if (!target) return;
    const allRevealed = target.split("").every(ch => guessed.has(ch));
    if (allRevealed) setStatus("won");
    else if (errors >= MAX_ERRORS) setStatus("lost");
  }, [guessed, errors, target]);

  const used = guessed;
  const remaining = MAX_ERRORS - errors;

  return (
    <div style={{ display: "grid", gap: 16, placeItems: "center" }}>
      <h1>Jogo da Forca</h1>

      <HangmanFigure wrong={errors} />
      <WordDisplay word={target} guessed={guessed} />
      <Attempts correct={correct} wrong={wrong} />

      <div style={{ fontFamily: "monospace" }}>
        Tentativas restantes: <b>{remaining}</b>
      </div>

      <Keyboard disabled={status !== "playing"} used={used} onGuess={handleGuess} />

      {status !== "playing" && (
        <div
          role="status"
          style={{
            marginTop: 8,
            color: status === "won" ? "green" : "crimson",
            fontWeight: 600
          }}
        >
          {status === "won" ? "Parabéns! Você venceu! 🎉" : "Que pena! Você perdeu. 😵"}&nbsp;
          A palavra era <b>{target}</b>.
        </div>
      )}

      <button onClick={newGame} style={{ marginTop: 8, padding: "8px 12px" }}>
        Reiniciar
      </button>
    </div>
  );
}
