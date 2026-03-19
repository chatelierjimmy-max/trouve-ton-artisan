import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArtisans } from "../services/api";
import ArtisanCard from "../components/artisan/ArtisanCard";
import Loader from "../components/ui/Loader";

function ArtisanList() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const searchTerm = searchParams.get("search");
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
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

  const filteredArtisans = useMemo(() => {
    let result = artisans;

    if (selectedCategory) {
      result = result.filter(
        (artisan) => artisan.specialty?.category?.slug === selectedCategory,
      );
    }

    if (searchTerm) {
      result = result.filter(
        (artisan) =>
          artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artisan.specialty?.name
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()),
      );
    }

    return result;
  }, [artisans, selectedCategory, searchTerm]);

  return (
    <section className="container py-5">
      <h1 className="mb-4">Liste des artisans</h1>

      {selectedCategory && (
        <p className="mb-4">
          <strong>Catégorie sélectionnée :</strong> {selectedCategory}
        </p>
      )}

      {loading && <Loader text="Chargement des artisans..." />}

      {error && <div className="alert alert-danger mt-4">{error}</div>}

      {!loading && !error && filteredArtisans.length === 0 && (
        <div className="alert alert-warning mt-4">
          Aucun artisan trouvé pour cette catégorie.
        </div>
      )}

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

export default ArtisanList;
