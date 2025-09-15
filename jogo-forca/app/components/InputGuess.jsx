"use client";
import { useState } from "react";

export default function InputGuess({ disabled, onSubmit }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const L = (value || "").toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (L && /^[A-Z]$/.test(L[0])) onSubmit(L[0]);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-form">
      <input
        maxLength={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        className="guess-input"
        placeholder="Digite uma letra"
        aria-label="Digite uma letra"
      />
      <button disabled={disabled} className="btn">Enviar</button>
    </form>
  );
}
