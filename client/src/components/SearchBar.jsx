/**
 * Import des hooks React
 */
import { useState } from "react";

/**
 * Import de la navigation React Router
 */
import { useNavigate } from "react-router-dom";

/**
 * Composant SearchBar
 * Permet de rechercher un artisan
 */
function SearchBar() {
  /**
   * État contenant la recherche utilisateur
   */
  const [query, setQuery] = useState("");

  /**
   * Hook de navigation React Router
   */
  const navigate = useNavigate();

  /**
   * Gestion du formulaire
   */
  const handleSubmit = (event) => {
    /**
     * Empêche le rechargement de page
     */
    event.preventDefault();

    /**
     * Empêche une recherche vide
     */
    if (!query.trim()) return;

    /**
     * Redirection vers la page recherche
     */
    navigate(`/recherche?q=${query}`);
  };

  return (
    /**
     * Formulaire de recherche
     */
    <form className="d-flex" onSubmit={handleSubmit}>
      {/*
        Champ de recherche
      */}
      <input
        type="search"
        className="form-control me-2"
        placeholder="Rechercher un artisan..."
        aria-label="Rechercher un artisan"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      {/*
        Bouton recherche
      */}
      <button
        type="submit"
        className="btn btn-primary"
        aria-label="Lancer la recherche"
      >
        Rechercher
      </button>
    </form>
  );
}

/**
 * Export du composant SearchBar
 */
export default SearchBar;
