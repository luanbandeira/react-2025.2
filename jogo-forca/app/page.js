import HangmanGame from "./components/HangmanGame";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <HangmanGame />
    </main>
  );
}
