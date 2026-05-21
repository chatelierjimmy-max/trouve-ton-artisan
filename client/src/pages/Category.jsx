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
   * Conversion des slugs frontend vers les slugs API
   */
  const apiSlug = slug === "plomberie" ? "plombier" : slug;

  /**
   * Chargement artisans catégorie
   */
  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await api.get(`/artisans/category/${apiSlug}`);

        setArtisans(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, [apiSlug]);

  return (
    <section className="container py-5">
      <div className="mb-5">
        <h1 className="display-5 text-capitalize">Catégorie : {slug}</h1>

        <p className="lead">Découvrez les artisans de cette catégorie.</p>
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : artisans.length === 0 ? (
        <p>Aucun artisan trouvé.</p>
      ) : (
        <div className="row">
          {artisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Category;
