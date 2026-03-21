// Import des hooks React pour gérer l’état et les effets
import { useEffect, useState } from "react";
// Fonction API personnalisée pour récupérer les meilleurs artisans
import { getTopArtisans } from "../../services/api";
// Composant qui affiche une carte pour chaque artisan
import ArtisanCard from "../artisan/ArtisanCard";

// Composant principal : affiche les artisans du mois
function FeaturedArtisans() {
  // Stocke la liste des artisans
  const [artisans, setArtisans] = useState([]);
  // Indique si les données sont en cours de chargement
  const [loading, setLoading] = useState(true);
  // Stocke un message d’erreur si besoin
  const [error, setError] = useState("");

  // useEffect exécuté une seule fois au montage
  useEffect(() => {

    // Fonction asynchrone pour récupérer les artisans
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

    // On appelle la fonction
    fetchTopArtisans();
  }, []);// Exécuté une seule fois

  return (
    <section className="bg-light py-5">
      <div className="container">
        {/* Titre de la section */}
        <h2 className="text-center mb-4">Artisans du mois</h2>

        {loading && <p>Chargement...</p>}
        {error && <p>{error}</p>}

        {/* Affichage des artisans si tout est OK */}
        {!loading && !error && (
          <div className="row g-4">
            {artisans.map((artisan) => (
              <div className="col-12 col-md-6 col-lg-4" key={artisan.id}>
                {/* On affiche une carte pour chaque artisan */}
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Export du composant pour utilisation ailleurs
export default FeaturedArtisans;
