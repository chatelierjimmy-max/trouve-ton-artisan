// Import des hooks React pour gérer l’état et les effets
import { useEffect, useState } from "react";
// useParams permet de récupérer le paramètre dans l’URL
// Link est importé ici mais n’est pas utilisé dans ce composant
import { useParams, Link } from "react-router-dom";
// Fonction API pour récupérer un artisan à partir de son slug
import { getArtisanBySlug } from "../services/api";
// Composant réutilisable de chargement
import Loader from "../components/ui/Loader";

// Composant de détail d’un artisan
function ArtisanDetail() {
  // Récupère le slug depuis l’URL
  const { slug } = useParams();

  // State pour stocker l’artisan trouvé
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect relancé à chaque changement de slug
  useEffect(() => {
    // Appel API pour récupérer l’artisan correspondant
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

  // Affichage pendant le chargement
  if (loading) {
    return (
      <section className="container py-5">
        <Loader text="Chargement de la fiche artisan..." />
      </section>
    );
  }

  // Affichage en cas d’erreur
  if (error) {
    return (
      <section className="container py-5">
        <div className="alert alert-danger">{error}</div>
      </section>
    );
  }

  // Affichage si aucun artisan n’est trouvé
  if (!artisan) {
    return (
      <section className="container py-5">
        <div className="alert alert-warning">Artisan introuvable.</div>
      </section>
    );
  }

  // Affichage normal de la fiche artisan
  return (
    <section className="container py-5">
      {/* Nom principal de l’artisan */}
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

          {/* Email cliquable */}
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

// Export du composant
export default ArtisanDetail;
