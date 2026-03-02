import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>ErrorPage</h1>
      <button className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition">
        <Link to="/">Retourner vers la page d'accueil</Link>
      </button>
    </div>
  );
}
