import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";

function ArtisanDetail() {
  const { slug } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const response = await api.get(`/artisans/${slug}`);
        setArtisan(response.data);
      } catch (error) {
        console.error(error);
        setArtisan(null);
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

  if (!artisan) {
    return (
      <section className="container py-5">
        <h1>Artisan introuvable</h1>
        <p>Aucun artisan ne correspond à cette page.</p>
      </section>
    );
  }

  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-md-5">
          <img
            src={artisan.image}
            alt={artisan.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        <div className="col-md-7">
          <h1>{artisan.name}</h1>

          <p className="lead mb-1">{artisan.Specialty?.name}</p>

          <p className="mb-1">Localisation : {artisan.location}</p>

          <p className="mb-3">Note : ⭐ {artisan.note}/5</p>

          <h2 className="h4">À propos</h2>
          <p>{artisan.about}</p>

          {artisan.website && (
            <a
              href={artisan.website}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              Voir le site web
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ArtisanDetail;
