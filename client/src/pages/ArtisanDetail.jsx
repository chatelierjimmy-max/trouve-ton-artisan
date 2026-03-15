import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArtisanBySlug } from "../services/api";

function ArtisanDetail() {
  const { slug } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getArtisanBySlug(slug)
      .then(({ data }) => {
        setArtisan(data);
      })
      .catch((err) => {
        console.error("Erreur fiche artisan :", err);
        setError("Impossible de charger la fiche artisan.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <section className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Chargement de la fiche artisan...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container py-5">
        <div className="alert alert-danger">{error}</div>
      </section>
    );
  }

  if (!artisan) {
    return (
      <section className="container py-5">
        <div className="alert alert-warning">Artisan introuvable.</div>
      </section>
    );
  }

  return (
    <section className="container py-5">
      <h1 className="mb-4">{artisan.name}</h1>

      <div className="card shadow-sm">
        <div className="card-body">
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
            <strong>À propos :</strong>
            <br />
            {artisan.about}
          </p>

          <p>
            <strong>Email :</strong>{" "}
            <a href={`mailto:${artisan.email}`}>{artisan.email}</a>
          </p>

          {artisan.website && (
            <p>
              <strong>Site web :</strong>{" "}
              <a href={artisan.website} target="_blank" rel="noreferrer">
                Visiter le site
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ArtisanDetail;
