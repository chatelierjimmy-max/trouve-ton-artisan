import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtisanBySlug } from "../services/api";

function ArtisanDetail() {
  const { slug } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const response = await getArtisanBySlug(slug);
        setArtisan(response.data);
      } catch (err) {
        setError("Impossible de charger la fiche artisan.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtisan();
  }, [slug]);

  if (loading) {
    return (
      <section className="container py-5">
        <p>Chargement...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container py-5">
        <p>{error}</p>
      </section>
    );
  }

  if (!artisan) {
    return (
      <section className="container py-5">
        <p>Artisan introuvable.</p>
      </section>
    );
  }

  return (
    <section className="container py-5">
      <h1 className="mb-4">{artisan.name}</h1>

      <p>
        <strong>Spécialité :</strong> {artisan.specialty?.name}
      </p>
      <p>
        <strong>Catégorie :</strong> {artisan.specialty?.category?.name}
      </p>
      <p>
        <strong>Ville :</strong> {artisan.city}
      </p>
      <p>
        <strong>Note :</strong> {artisan.rating} / 5
      </p>
      <p>
        <strong>À propos :</strong> {artisan.about}
      </p>
      <p>
        <strong>Email :</strong> {artisan.email}
      </p>

      {artisan.website && (
        <p>
          <strong>Site web :</strong>{" "}
          <a href={artisan.website} target="_blank" rel="noreferrer">
            Visiter le site
          </a>
        </p>
      )}
    </section>
  );
}

export default ArtisanDetail;
