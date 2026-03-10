import { Link } from "react-router-dom";

function ArtisanCard({ artisan }) {
  return (
    <article className="card h-100 shadow-sm">
      <div className="card-body">
        <h3 className="h5 card-title">{artisan.name}</h3>

        <p className="mb-1">
          <strong>Spécialité :</strong> {artisan.specialty}
        </p>

        <p className="mb-1">
          <strong>Ville :</strong> {artisan.city}
        </p>

        <p className="mb-3">
          <strong>Note :</strong> {artisan.rating} / 5
        </p>

        <Link to={`/artisan/${artisan.slug}`} className="btn btn-primary">
          Voir la fiche
        </Link>
      </div>
    </article>
  );
}

export default ArtisanCard;
