"use client";

export default function Attempts({ correct, wrong }) {
  return (
    <div style={{ display: "flex", gap: 16, fontFamily: "monospace" }}>
      <div><b>Certas:</b> {[...correct].join(" ") || "—"}</div>
      <div><b>Erradas:</b> {[...wrong].join(" ") || "—"}</div>
    </div>
  );
}
