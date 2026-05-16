import { useEffect, useState } from "react";

import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";

function Home() {
  const [topArtisans, setTopArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopArtisans = async () => {
      try {
        const response = await api.get("/artisans/top");
        setTopArtisans(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopArtisans();
  }, []);

  return (
    <>
      <section className="bg-white py-5 border-bottom">
        <div className="container">
          <h1 className="display-5 fw-bold">Trouve ton artisan</h1>
          <p className="lead">
            Trouvez facilement un artisan qualifié en Auvergne-Rhône-Alpes.
          </p>
        </div>
      </section>

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

      <section className="container pb-5">
        <h2 className="mb-4">Artisans du mois</h2>

        {loading ? (
          <p>Chargement...</p>
        ) : (
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

export default Home;
