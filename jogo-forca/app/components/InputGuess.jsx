"use client";
import { useState } from "react";

export default function InputGuess({ disabled, onSubmit, onEnterRestart }) {
  const [value, setValue] = useState("");

  function submitLetter(L) {
    const letter = (L || "").toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (letter && /^[A-Z]$/.test(letter[0])) {
      onSubmit(letter[0]);      // chama o pai UMA única vez
      setValue("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitLetter(value);
  }

  function handleKeyDown(e) {
    // Enter envia o que estiver no input
    if (e.key === "Enter") return; // submit já cuida

    // Se digitar uma letra A–Z, envia imediatamente (opcional)
    const L = (e.key || "").toUpperCase();
    if (/^[A-Z]$/.test(L)) {
      e.preventDefault();       // impede caracteres extra no input
      submitLetter(L);
    }

    // Enter para reiniciar quando desabilitado
    if (e.key === "Enter" && disabled && typeof onEnterRestart === "function") {
      onEnterRestart();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="guess-form">
      <input
        maxLength={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className="guess-input"
        placeholder="Digite uma letra"
        aria-label="Digite uma letra"
      />
      <button type="submit" disabled={disabled} className="btn">
        Enviar
      </button>
    </form>
  );
}
