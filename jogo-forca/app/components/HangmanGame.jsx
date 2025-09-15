"use client";

import { useEffect, useMemo, useState } from "react";
import { WORDS } from "../data/words";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import HangmanFigure from "./HangmanFigure";
import Attempts from "./Attempts";
import InputGuess from "./InputGuess";

const MAX_ERRORS = 6;

// Normaliza para MAIÚSCULO sem acentos e somente A–Z
function normalize(word) {
  return word
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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

  useEffect(() => {
    newGame();
  }, []);

  function newGame() {
    setTarget(randomWord());
    setGuessed(new Set());
    setErrors(0);
    setStatus("playing");
  }

  // Só registra e penaliza se a letra for realmente NOVA
  function handleGuess(raw) {
    if (status !== "playing") return;
    const letter = (raw || "").toUpperCase();
    if (!/^[A-Z]$/.test(letter)) return;

    setGuessed((prev) => {
      if (prev.has(letter)) return prev; // já usada → não altera
      const next = new Set(prev);
      next.add(letter);
      if (!target.includes(letter)) {
        setErrors((e) => e + 1); // 1 erro apenas
      }
      return next;
    });
  }

  // Teclado físico: ignora quando digitando em inputs, ignora auto-repeat
  useEffect(() => {
    const isTyping = (el) => {
      if (!el) return false;
      const tag = el.tagName?.toLowerCase();
      return tag === "input" || tag === "textarea" || el.isContentEditable;
    };

    const onKey = (e) => {
      // evita repetição automática ao segurar tecla
      if (e.repeat) return;

      // se estiver digitando em um campo, não processa
      if (isTyping(e.target) || isTyping(document.activeElement)) return;

      const L = (e.key || "").toUpperCase();
      if (/^[A-Z]$/.test(L)) handleGuess(L);

      // Enter: só reinicia quando a partida acabou
      if (e.key === "Enter" && status !== "playing") newGame();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status, target]); // suficiente para este caso

  // Derivados (certas x erradas)
  const correct = useMemo(
    () => new Set([...guessed].filter((L) => target.includes(L))),
    [guessed, target]
  );
  const wrong = useMemo(
    () => new Set([...guessed].filter((L) => !target.includes(L))),
    [guessed, target]
  );

  // Vitória/derrota
  useEffect(() => {
    if (!target) return;
    const allRevealed = target.split("").every((ch) => guessed.has(ch));
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

      <div className="remaining">
        Tentativas restantes: <b>{remaining}</b>
      </div>

      {/* Entrada via input */}
      <InputGuess disabled={status !== "playing"} onSubmit={handleGuess} />

      {/* Teclado virtual */}
      <Keyboard
        disabled={status !== "playing"}
        used={guessed}
        onGuess={handleGuess}
      />

      {/* Mensagem final */}
      {status !== "playing" && (
        <div role="status" className={`result ${status}`}>
          {status === "won"
            ? "Parabéns! Você venceu! 🎉"
            : "Que pena! Você perdeu. 😵"}{" "}
          A palavra era <b>{target}</b>.
        </div>
      )}

      <button onClick={newGame} className="btn secondary">
        Reiniciar
      </button>
    </div>
  );
}
