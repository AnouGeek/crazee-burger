import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // affichage (render)
  return (
    <div 
    className="bg-green-500"
    action="submit" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold mb-12">Bienvenue chez nous !</h1>
      <h2 className="text-2xl font-bold mb-4">Connectez-vous</h2>
      <input
        className="border px-1"
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom"
        required
      />
      <button className="border px-2 bg-slate-200 rounded cursor-pointer">
        Accéder à mon espace
      </button>
    </div>
  );
}
