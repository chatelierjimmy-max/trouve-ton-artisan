/**
 * Import du composant Link
 * permettant la navigation React Router
 */
import { Link } from "react-router-dom";

/**
 * Import de la barre de recherche
 */
import SearchBar from "./SearchBar";

/**
 * Import du logo
 */
import logo from "../assets/logo.png";

/**
 * Composant Header
 * Affiche :
 * - le logo
 * - la barre de recherche
 * - les catégories
 */
function Header() {
  return (
    /**
     * Header principal
     */
    <header className="bg-white shadow-sm">
      {/*
        Barre de navigation Bootstrap
      */}
      <nav className="navbar navbar-expand-lg container py-3">
        {/*
          Logo + retour accueil
        */}
        <Link
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          to="/"
        >
          <img
            src={logo}
            alt="Logo Trouve ton artisan"
            className="img-fluid"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "contain",
            }}
          />
        </Link>

        {/*
          Bouton menu mobile
        */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*
          Contenu du menu responsive
        */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/*
            Barre de recherche centrée
          */}
          <div className="mx-auto">
            <SearchBar />
          </div>

          {/*
            Liste des catégories
          */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/*
              Catégorie bâtiment
            */}
            <li className="nav-item">
              <Link className="nav-link" to="/categorie/batiment">
                Bâtiment
              </Link>
            </li>

            {/*
              Catégorie services
            */}
            <li className="nav-item">
              <Link className="nav-link" to="/categorie/services">
                Services
              </Link>
            </li>

            {/*
              Catégorie fabrication
            */}
            <li className="nav-item">
              <Link className="nav-link" to="/categorie/fabrication">
                Fabrication
              </Link>
            </li>

            {/*
              Catégorie alimentation
            */}
            <li className="nav-item">
              <Link className="nav-link" to="/categorie/alimentation">
                Alimentation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

/**
 * Export du composant Header
 */
export default Header;
