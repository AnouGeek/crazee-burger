import { useState } from "react";

function App() {
  const [prenom, setPrenom] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Bonjour ${prenom}`);
    setPrenom("");
  }

  // function handleChange(e) {
  //   setPrenom(e.target.value);
  // }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-12">Bienvenue chez nous !</h1>
      <h2 className="font-semibold text-xl">Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setPrenom(e.target.value)}
          value={prenom}
          type="text"
          placeholder="Entrer votre prenom..."
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}
export default App;

// import { useState } from "react";

// function App() {
//   // state (état, données)
//   // je definis un state que j'initialise avec la chaine de caractere vi que je recupere dans une variable prenom que je ne pourrai modifier avec sa fonction dédiée setPrenom (setter ou mutateur)
//   const [prenom, setPrenom] = useState("Anou");
//   const [count, setCount] = useState(1);

//   // comportements
//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   // affichage (render)
//   return (
//     <div className="min-h-screen bg-slate-800/75">
//       <h1>Bonjour {prenom}</h1>
//       <p>{count}</p>
//       <button onClick={handleClick}>Incrémenter</button>
//     </div>
//   );
// }
// export default App;
