// Import des outils de navigation de react-router-dom
import { Link, useNavigate } from "react-router-dom";
// Import du hook pour gérer l’état
import { useState } from "react";

// Composant Header : barre de navigation en haut du site
function Header() {

  // State pour stocker la valeur de la recherche
  const [search, setSearch] = useState("");
  // Hook pour naviguer programmaticalement (sans clic sur Link)
  const navigate = useNavigate();
  // Fonction appelée lors de la soumission du formulaire
  const handleSearch = (e) => {
    e.preventDefault();// Empêche le rechargement de la page

    if (search.trim() !== "") {
      // Redirection vers la page artisans avec le mot-clé en paramètre
      navigate(`/artisans?search=${search}`);
    }
  };

  return (
    <header className="bg-dark text-white">
      {/* Container principal */}
      <div className="container py-3 d-flex align-items-center">
        {/* LOGO */}

        <Link
          to="/"
          className="d-flex align-items-center text-white text-decoration-none"
        >
          <img
            src="/logo2.png" // Image du logo (dossier public)
            alt="Trouve ton artisan"
            className="logo me-2"
          />
        </Link>

        {/* BARRE DE RECHERCHE */}

        <form onSubmit={handleSearch} className="mx-4 flex-grow-1">
          <input
            type="text"
            placeholder="Rechercher un artisan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
          />
        </form>

        {/* MENU DE NAVIGATION*/}

        <nav className="ms-auto">

          {/* Lien vers la page d’accueil */}
          <Link to="/" className="text-white me-3">
            Accueil
          
          {/* Lien vers la liste des artisans */}
          </Link>
          <Link to="/artisans" className="text-white me-3">
            Artisans
          
          {/* Lien vers la page contact */}
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

// Export du composant pour l’utiliser sur toutes les pages
export default Header;
