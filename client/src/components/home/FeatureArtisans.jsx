import { useEffect, useState } from "react";
import { getTopArtisans } from "../../services/api";
import ArtisanCard from "../artisan/ArtisanCard";

function FeaturedArtisans() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopArtisans = async () => {
      try {
        const response = await getTopArtisans();
        setArtisans(response.data);
      } catch (err) {
        setError("Impossible de charger les artisans du mois.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopArtisans();
  }, []);

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Artisans du mois</h2>

        {loading && <p>Chargement...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="row g-4">
            {artisans.map((artisan) => (
              <div className="col-12 col-md-6 col-lg-4" key={artisan.id}>
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedArtisans;
