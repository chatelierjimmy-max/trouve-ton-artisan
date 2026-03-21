// Import des hooks React
// useEffect : exécute du code au chargement du composant
// useMemo : évite de recalculer inutilement le filtre
// useState : gère les données et l’état du composant
import { useEffect, useMemo, useState } from "react";
// Hook React Router pour lire les paramètres dans l’URL
import { useSearchParams } from "react-router-dom";
// Fonction API pour récupérer tous les artisans
import { getArtisans } from "../services/api";
// Composant qui affiche chaque artisan sous forme de carte
import ArtisanCard from "../components/artisan/ArtisanCard";
// Composant de chargement réutilisable
import Loader from "../components/ui/Loader";

// Composant principal : affiche la liste des artisans
function ArtisanList() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const searchTerm = searchParams.get("search");
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect exécuté une seule fois au montage du composant
  useEffect(() => {
    // Appel API pour récupérer tous les artisans
    getArtisans()
      .then(({ data }) => {
        setArtisans(data);
      })
      .catch((err) => {
        console.error("Erreur artisans :", err);
        setError("Impossible de charger les artisans.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // useMemo permet de recalculer la liste filtrée seulement
  // si artisans, selectedCategory ou searchTerm changent
  const filteredArtisans = useMemo(() => {
    let result = artisans;

    // Si une catégorie a été choisie, on filtre les artisans
    if (selectedCategory) {
      result = result.filter(
        (artisan) => artisan.specialty?.category?.slug === selectedCategory,
      );
    }

    // Si un terme de recherche est présent, on filtre aussi par nom ou spécialité
    if (searchTerm) {
      result = result.filter(
        (artisan) =>
          artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artisan.specialty?.name
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()),
      );
    }

    // On retourne la liste finale filtrée
    return result;
  }, [artisans, selectedCategory, searchTerm]);

  return (
    <section className="container py-5">
      {/* Titre principal de la page */}
      <h1 className="mb-4">Liste des artisans</h1>

      {selectedCategory && (
        <p className="mb-4">
          <strong>Catégorie sélectionnée :</strong> {selectedCategory}
        </p>
      )}

      {loading && <Loader text="Chargement des artisans..." />}

      {error && <div className="alert alert-danger mt-4">{error}</div>}

      {/* Message si aucun artisan ne correspond au filtre */}
      {!loading && !error && filteredArtisans.length === 0 && (
        <div className="alert alert-warning mt-4">
          Aucun artisan trouvé pour cette catégorie.
        </div>
      )}

      {/* Affichage de la liste des artisans filtrés */}
      {!loading && !error && filteredArtisans.length > 0 && (
        <div className="row g-4">
          {filteredArtisans.map((artisan) => (
            <div className="col-12 col-md-6 col-lg-4" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// Export du composant pour l’utiliser ailleurs
export default ArtisanList;
