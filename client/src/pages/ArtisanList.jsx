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
    const fetchArtisans = async () => {
      try {
        const response = await getArtisans();
        setArtisans(response.data);
      } catch (err) {
        setError("Impossible de charger les artisans.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
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

      {loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
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
