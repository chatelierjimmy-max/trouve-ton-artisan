/**
 * Import des hooks React
 */
import { useEffect, useState } from "react";

/**
 * Import du hook useParams
 * permettant de récupérer le slug
 * dans l’URL
 */
import { useParams } from "react-router-dom";

/**
 * Import du service API Axios
 */
import api from "../services/api";

/**
 * Import du composant carte artisan
 */
import ArtisanCard from "../components/ArtisanCard";

/**
 * Composant Category
 * Affiche les artisans
 * selon la catégorie sélectionnée
 */
function Category() {
  /**
   * Récupération du slug catégorie
   */
  const { slug } = useParams();

  /**
   * État liste artisans
   */
  const [artisans, setArtisans] = useState([]);

  /**
   * État chargement
   */
  const [loading, setLoading] = useState(true);

  /**
   * Chargement artisans catégorie
   */
  useEffect(() => {
    /**
     * Fonction récupération API
     */
    const fetchArtisans = async () => {
      try {
        /**
         * Appel API catégorie
         */
        const response = await api.get(`/artisans/category/${slug}`);

        /**
         * Mise à jour état artisans
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
     * Exécution récupération artisans
     */
    fetchArtisans();
  }, [slug]);

  return (
    /**
     * Contenu principal page catégorie
     */
    <section className="container py-5">
      {/*
        Titre catégorie
      */}
      <div className="mb-5">
        <h1 className="display-5 text-capitalize">Catégorie : {slug}</h1>

        <p className="lead">Découvrez les artisans de cette catégorie.</p>
      </div>

      {/*
        Affichage chargement
      */}
      {loading ? (
        <p>Chargement...</p>
      ) : artisans.length === 0 ? (
        /**
         * Aucun artisan trouvé
         */
        <p>Aucun artisan trouvé.</p>
      ) : (
        /**
         * Liste artisans
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
 * Export du composant Category
 */
export default Category;
