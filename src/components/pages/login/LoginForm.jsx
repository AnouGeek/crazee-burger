import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { BsPersonCircle } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaCircleChevronRight } from "react-icons/fa6";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
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
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // affichage (render)
  return (
    <form
      className="text-center max-w-[500px] min-w-[400px] mx-auto py-[2.5rem] px-[2rem] rounded-[5px] font-amatic"
      action="submit"
      onSubmit={handleSubmit}
    >
      <h1 className="text-white text-[48px] font-bold uppercase mt-[40px]">
        Bienvenue chez nous !
      </h1>
      <hr className="border-[1.5px] border-solid border-[#f56a2c] mb-[40px]" />
      <h2 className="text-white text-[36px] font-bold mt-[20px] mx-[10px] mb-[10px]">
        Connectez-vous
      </h2>
      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<BsPersonCircle className="mr-5" />}
        className="border px-1 bg-blue-600 mb-2"
      />
      <TextInput
        value={password}
        onChange={handlePassword}
        placeholder={"Entrez votre mot de passe"}
        required
        Icon={<RiLockPasswordLine className="mr-5" />}
        className="border px-1 bg-yellow-600 mb-5 w-full"
      />

      <PrimaryButton
        className="border px-2 bg-slate-200 rounded cursor-pointer flex items-center mx-auto"
        label={"Accéder à votre espace"}
        Icon={<FaCircleChevronRight className="ml-5"/>}
      />
    </form>
  );
}
