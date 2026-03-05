import { useState } from "react";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  // affichage (render)
  return (
    <div className="bg-black/50 h-screen flex justify-center items-center flex-col bg-[url('/images/burger-and-fries-background.jpg')] bg-cover bg-blend-darken absolute inset-0">
      <Logo />
      <LoginForm />
    </div>
  );
}
