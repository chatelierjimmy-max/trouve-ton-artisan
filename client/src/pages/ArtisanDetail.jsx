/**
 * Import des hooks React
 */
import { useEffect, useState } from "react";

/**
 * Import du hook useParams
 * permettant de récupérer le slug dans l’URL
 */
import { useParams } from "react-router-dom";

/**
 * Import du service API Axios
 */
import api from "../services/api";

/**
 * Import du formulaire de contact
 */
import ContactForm from "../components/ContactForm";

/**
 * Composant ArtisanDetail
 * Affiche les informations détaillées
 * d’un artisan
 */
function ArtisanDetail() {
  /**
   * Récupération du slug depuis l’URL
   */
  const { slug } = useParams();

  /**
   * État artisan
   */
  const [artisan, setArtisan] = useState(null);

  /**
   * État chargement
   */
  const [loading, setLoading] = useState(true);

  /**
   * Chargement des données artisan
   */
  useEffect(() => {
    /**
     * Fonction récupération artisan
     */
    const fetchArtisan = async () => {
      try {
        /**
         * Appel API
         */
        const response = await api.get(`/artisans/${slug}`);

        /**
         * Mise à jour état artisan
         */
        setArtisan(response.data);
      } catch (error) {
        /**
         * Gestion erreur API
         */
        console.error(error);

        setArtisan(null);
      } finally {
        /**
         * Fin chargement
         */
        setLoading(false);
      }
    };

    /**
     * Exécution chargement
     */
    fetchArtisan();
  }, [slug]);

  /**
   * Affichage chargement
   */
  if (loading) {
    return (
      <section className="container py-5">
        <p>Chargement...</p>
      </section>
    );
  }

  /**
   * Gestion artisan introuvable
   */
  if (!artisan) {
    return (
      <section className="container py-5">
        <h1>Artisan introuvable</h1>

        <p>Aucun artisan ne correspond à cette page.</p>
      </section>
    );
  }

  return (
    /**
     * Contenu principal page artisan
     */
    <section className="container py-5">
      <div className="row g-4">
        {/*
          Colonne image artisan
        */}
        <div className="col-md-5">
          <img
            src={artisan.image}
            alt={artisan.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/*
          Colonne informations artisan
        */}
        <div className="col-md-7">
          <h1>{artisan.name}</h1>

          <p className="lead mb-1">{artisan.Specialty?.name}</p>

          <p className="mb-1">Localisation : {artisan.location}</p>

          <p className="mb-3">Note : ⭐ {artisan.note}/5</p>

          <h2 className="h4">À propos</h2>

          <p>{artisan.about}</p>

          {/*
            Bouton site web artisan
          */}
          {artisan.website && (
            <a
              href={artisan.website}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              Voir le site web
            </a>
          )}
        </div>
      </div>

      {/*
        Formulaire de contact
      */}
      <ContactForm artisanId={artisan.id} />
    </section>
  );
}

/**
 * Export du composant ArtisanDetail
 */
export default ArtisanDetail;
