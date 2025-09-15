"use client";

import { useEffect, useMemo, useState } from "react";
import { WORDS } from "../data/words";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import HangmanFigure from "./HangmanFigure";
import Attempts from "./Attempts";
import InputGuess from "./InputGuess";

const MAX_ERRORS = 6;

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
  const [target, setTarget] = useState("");
  const [guessed, setGuessed] = useState(new Set());
  const [errors, setErrors] = useState(0);
  const [status, setStatus] = useState("playing"); // "playing" | "won" | "lost"

  useEffect(() => { newGame(); }, []);

  function newGame() {
    setTarget(randomWord());
    setGuessed(new Set());
    setErrors(0);
    setStatus("playing");
  }

  function handleGuess(letter) {
    if (status !== "playing") return;
    if (!/^[A-Z]$/.test(letter)) return;

    setGuessed(prev => {
      if (prev.has(letter)) return prev;
      const next = new Set(prev);
      next.add(letter);
      if (!target.includes(letter)) setErrors(e => e + 1);
      return next;
    });
  }

  // teclado físico
  useEffect(() => {
    const onKey = (e) => {
      const L = (e.key || "").toUpperCase();
      if (/^[A-Z]$/.test(L)) handleGuess(L);
      if (e.key === "Enter" && status !== "playing") newGame();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status, target]);

  const correct = useMemo(
    () => new Set([...guessed].filter(L => target.includes(L))),
    [guessed, target]
  );
  const wrong = useMemo(
    () => new Set([...guessed].filter(L => !target.includes(L))),
    [guessed, target]
  );

  useEffect(() => {
    if (!target) return;
    const allRevealed = target.split("").every(ch => guessed.has(ch));
    if (allRevealed) setStatus("won");
    else if (errors >= MAX_ERRORS) setStatus("lost");
  }, [guessed, errors, target]);

  const remaining = MAX_ERRORS - errors;

  return (
    <div className="container">
      <h1>Jogo da Forca</h1>

      <HangmanFigure wrong={errors} />

      <WordDisplay word={target} guessed={guessed} />

      <Attempts correct={correct} wrong={wrong} />

      <div className="remaining">Tentativas restantes: <b>{remaining}</b></div>

      <InputGuess disabled={status !== "playing"} onSubmit={handleGuess} />

      <Keyboard disabled={status !== "playing"} used={guessed} onGuess={handleGuess} />

      {status !== "playing" && (
        <div role="status" className={`result ${status}`}>
          {status === "won" ? "Parabéns! Você venceu! 🎉" : "Que pena! Você perdeu. 😵"}&nbsp;
          A palavra era <b>{target}</b>.
        </div>
      )}

      <button onClick={newGame} className="btn secondary">Reiniciar</button>
    </div>
  );
}
