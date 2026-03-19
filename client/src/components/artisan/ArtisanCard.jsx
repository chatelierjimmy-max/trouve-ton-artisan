import { Link } from "react-router-dom";

function ArtisanCard({ artisan }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {hasHalfStar && "⯨"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

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

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <p className="mb-0">
              <strong>Note :</strong> {artisan.rating} / 5
            </p>

            <div className="text-warning fs-5">
              {renderStars(artisan.rating)}
            </div>
          </div>

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
