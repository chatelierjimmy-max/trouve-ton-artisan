import { Link } from "react-router-dom";

function ArtisanCard({ artisan }) {
  return (
    <article className="card h-100 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-start">
        {/* Partie gauche : infos artisan */}

        <div>
          <h3 className="h5 card-title">{artisan.name}</h3>

          <p className="mb-1">
            <strong>Spécialité :</strong> {artisan.specialty?.name}
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

        {/* Logo à droite */}

        <img
          src="/logo1.png"
          alt="logo artisan"
          style={{ width: "60px", height: "60px", objectFit: "contain" }}
        />
      </div>
    </article>
  );
}

export default ArtisanCard;
