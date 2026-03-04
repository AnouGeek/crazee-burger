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
    className="bg-green-500 text-center max-w-[500px] min-w-[400px] mx-auto py-[2.5rem] px-[2rem] rounded-[5px] font-amatic"
    action="submit" onSubmit={handleSubmit}>
      <h1 className="text-white text-[48px] font-bold uppercase mt-[40px]">Bienvenue chez nous !</h1>
      <hr className="border-[1.5px] border-solid border-[#f56a2c] mb-[40px]"/>
      <h2 className="text-white text-[36px] font-bold mt-[20px] mx-[10px] mb-[10px]">Connectez-vous</h2>
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
