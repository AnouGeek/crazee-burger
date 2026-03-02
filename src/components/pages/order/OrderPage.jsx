import { Link } from "react-router-dom";

export default function OrderPage() {
  return (
    <div>
      <h1>OrderPage</h1>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        <Link to="/">Déconnexion</Link>
      </button>
    </div>
  );
}
