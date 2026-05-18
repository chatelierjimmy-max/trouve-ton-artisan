/**
 * Import des hooks React
 */
import { useEffect, useState } from "react";

/**
 * Import du service API Axios
 */
import api from "../services/api";

/**
 * Import des composants
 */
import ArtisanCard from "../components/ArtisanCard";
import Seo from "../components/Seo";

/**
 * Composant Home
 * Affiche :
 * - le titre du site
 * - les étapes de fonctionnement
 * - les artisans du mois
 */
function Home() {
  /**
   * État contenant les artisans du mois
   */
  const [topArtisans, setTopArtisans] = useState([]);

  /**
   * État de chargement
   */
  const [loading, setLoading] = useState(true);

  /**
   * Chargement des artisans du mois
   * au montage du composant
   */
  useEffect(() => {
    /**
     * Fonction de récupération API
     */
    const fetchTopArtisans = async () => {
      try {
        /**
         * Appel API vers les artisans du mois
         */
        const response = await api.get("/artisans/top");

        /**
         * Mise à jour de l’état
         */
        setTopArtisans(response.data);
      } catch (error) {
        /**
         * Gestion erreur API
         */
        console.error(error);
      } finally {
        /**
         * Fin du chargement
         */
        setLoading(false);
      }
    };

    /**
     * Exécution de la récupération
     */
    fetchTopArtisans();
  }, []);

  return (
    <>
      {/*
        SEO de la page d’accueil
      */}
      <Seo
        title="Accueil"
        description="Trouvez facilement un artisan qualifié en Auvergne-Rhône-Alpes."
      />

      {/*
        Section introduction
      */}
      <section className="bg-white py-5 border-bottom">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Trouve ton artisan</h1>

          <p className="lead">
            Trouvez facilement un artisan qualifié en Auvergne-Rhône-Alpes.
          </p>
        </div>
      </section>

      {/*
        Section étapes de fonctionnement
      */}
      <section className="container py-5">
        <h2 className="mb-4">Comment trouver mon artisan ?</h2>

        <div className="row g-4">
          {[
            "Choisir la catégorie d’artisanat dans le menu.",
            "Choisir un artisan.",
            "Le contacter via le formulaire de contact.",
            "Une réponse sera apportée sous 48h.",
          ].map((step, index) => (
            <div className="col-md-6 col-lg-3" key={step}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <span className="badge bg-primary mb-3">
                    Étape {index + 1}
                  </span>

                  <p className="mb-0">{step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*
        Section artisans du mois
      */}
      <section className="container pb-5">
        <h2 className="mb-4">Artisans du mois</h2>

        {loading ? (
          /**
           * Affichage pendant le chargement
           */
          <p>Chargement...</p>
        ) : (
          /**
           * Affichage des artisans du mois
           */
          <div className="row">
            {topArtisans.map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

/**
 * Export de la page Home
 */
export default Home;
