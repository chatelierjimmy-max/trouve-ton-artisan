import { Link } from "react-router-dom";

import artisanDefault from "../assets/artisan-default.png";

function ArtisanCard({ artisan }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <article className="card h-100 shadow-sm border-0">
        <img
          src={artisan.image || artisanDefault}
          alt={artisan.name}
          className="card-img-top"
          onError={(e) => {
            e.target.src = artisanDefault;
          }}
        />

        <div className="card-body">
          <h2 className="h5">{artisan.name}</h2>

          <p className="mb-1">
            <strong>{artisan.Specialty?.name}</strong>
          </p>

          <p className="mb-1">{artisan.location}</p>

          <p className="mb-2">⭐ {artisan.note}/5</p>

          <p className="small text-muted">{artisan.about?.slice(0, 100)}...</p>
        </div>

        <div className="card-footer bg-white border-0">
          <Link
            to={`/artisan/${artisan.slug}`}
            className="btn btn-primary w-100"
            aria-label={`Voir le profil de ${artisan.name}`}
          >
            Voir le profil
          </Link>
        </div>
      </article>
    </div>
  );
}

export default ArtisanCard;
