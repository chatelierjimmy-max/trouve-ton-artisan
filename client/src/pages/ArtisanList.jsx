import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArtisans } from "../services/api";
import ArtisanCard from "../components/artisan/ArtisanCard";

function ArtisanList() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

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
    if (!selectedCategory) return artisans;

    return artisans.filter(
      (artisan) => artisan.specialty?.category?.slug === selectedCategory,
    );
  }, [artisans, selectedCategory]);

  return (
    <section className="container py-5">
      <h1 className="mb-4">Liste des artisans</h1>

      {selectedCategory && (
        <p className="mb-4">
          <strong>Catégorie sélectionnée :</strong> {selectedCategory}
        </p>
      )}

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Chargement des artisans...</p>
        </div>
      )}

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
