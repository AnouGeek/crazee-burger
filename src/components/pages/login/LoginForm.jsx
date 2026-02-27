import { useState } from "react";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // affichage (render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold mb-12">Bienvenue chez nous</h1>
      <h2 className="text-2xl font-bold mb-4">Connectez-vous</h2>
      <input
        className="border px-1"
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      <button className="border px-2 bg-slate-200 rounded cursor-pointer">
        Accédez à votre espace
      </button>
    </form>
  );
}
