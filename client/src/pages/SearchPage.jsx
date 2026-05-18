/**
 * Import des hooks React
 */
import { useEffect, useState } from "react";

/**
 * Import du hook useSearchParams
 * permettant de récupérer les paramètres URL
 */
import { useSearchParams } from "react-router-dom";

/**
 * Import du service API Axios
 */
import api from "../services/api";

/**
 * Import du composant carte artisan
 */
import ArtisanCard from "../components/ArtisanCard";

/**
 * Composant SearchPage
 * Permet d’afficher les résultats
 * de recherche des artisans
 */
function SearchPage() {
  /**
   * Récupération des paramètres URL
   */
  const [searchParams] = useSearchParams();

  /**
   * Récupération du paramètre q
   */
  const query = searchParams.get("q");

  /**
   * État liste artisans
   */
  const [artisans, setArtisans] = useState([]);

  /**
   * État chargement
   */
  const [loading, setLoading] = useState(true);

  /**
   * Chargement résultats recherche
   */
  useEffect(() => {
    /**
     * Fonction recherche artisans
     */
    const searchArtisans = async () => {
      try {
        /**
         * Appel API recherche
         */
        const response = await api.get(`/artisans/search?q=${query}`);

        /**
         * Mise à jour résultats
         */
        setArtisans(response.data);
      } catch (error) {
        /**
         * Gestion erreur API
         */
        console.error(error);
      } finally {
        /**
         * Fin chargement
         */
        setLoading(false);
      }
    };

    /**
     * Exécution recherche
     */
    searchArtisans();
  }, [query]);

  return (
    /**
     * Contenu principal page recherche
     */
    <section className="container py-5">
      {/*
        Titre résultats
      */}
      <h1 className="mb-4">Résultats pour : "{query}"</h1>

      {loading ? (
        /**
         * Affichage chargement
         */
        <p>Chargement...</p>
      ) : artisans.length === 0 ? (
        /**
         * Aucun résultat trouvé
         */
        <p>Aucun résultat trouvé.</p>
      ) : (
        /**
         * Liste des artisans trouvés
         */
        <div className="row">
          {artisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      )}
    </section>
  );
}

/**
 * Export du composant SearchPage
 */
export default SearchPage;
