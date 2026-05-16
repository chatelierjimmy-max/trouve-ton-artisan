import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";

function SearchPage() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const [artisans, setArtisans] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchArtisans = async () => {
      try {
        const response = await api.get(`/artisans/search?q=${query}`);

        setArtisans(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    searchArtisans();
  }, [query]);

  return (
    <section className="container py-5">
      <h1 className="mb-4">Résultats pour : "{query}"</h1>

      {loading ? (
        <p>Chargement...</p>
      ) : artisans.length === 0 ? (
        <p>Aucun résultat trouvé.</p>
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

export default SearchPage;
