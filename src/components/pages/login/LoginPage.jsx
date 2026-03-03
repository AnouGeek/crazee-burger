import { useState } from "react";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  // affichage (render)
  return (
    <div className="bg-red-600 h-screen flex justify-center items-center flex-col">
      <Logo />
      <LoginForm />
    </div>
  );
}
