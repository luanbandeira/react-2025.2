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
  const [status, setStatus] = useState("playing");   

 
  useEffect(() => { newGame(); }, []);

  function newGame() {
    setTarget(randomWord());
    setGuessed(new Set());
    setStatus("playing");
  }

  
  function handleGuess(raw) {
    if (status !== "playing") return;
    const letter = (raw || "").toUpperCase();
    if (!/^[A-Z]$/.test(letter)) return;

    setGuessed(prev => {
      if (prev.has(letter)) return prev; // ignora repetida
      const next = new Set(prev);
      next.add(letter);
      return next;
    });
  }

  
  const correct = useMemo(
    () => new Set([...guessed].filter(L => target.includes(L))),
    [guessed, target]
  );
  const wrong = useMemo(
    () => new Set([...guessed].filter(L => !target.includes(L))),
    [guessed, target]
  );

  
  const errors = wrong.size;
  const remaining = MAX_ERRORS - errors;

  
  useEffect(() => {
    if (!target) return;
    const allRevealed = target.split("").every(ch => guessed.has(ch));
    if (allRevealed) setStatus("won");
    else if (errors >= MAX_ERRORS) setStatus("lost");
  }, [guessed, target, errors]);

  return (
    <div className="container">
      <h1>Jogo da Forca</h1>

      <HangmanFigure wrong={errors} />

      <WordDisplay word={target} guessed={guessed} />

      <Attempts correct={correct} wrong={wrong} />

      <div className="remaining">Tentativas restantes: <b>{remaining}</b></div>

      
      <InputGuess
        disabled={status !== "playing"}
        onSubmit={handleGuess}
        onEnterRestart={() => status !== "playing" && newGame()}
      />

      
      <Keyboard disabled={status !== "playing"} used={guessed} onGuess={handleGuess} />

      
      {status !== "playing" && (
        <div role="status" className={`result ${status}`}>
          {status === "won" ? "Parabéns! Você venceu! 🎉" : "Que pena! Você perdeu. 😵"}{" "}
          A palavra era <b>{target}</b>.
        </div>
      )}

      <button onClick={newGame} className="btn secondary">Reiniciar</button>
    </div>
  );
}
