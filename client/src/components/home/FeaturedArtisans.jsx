// On importe les données locales des artisans (pas d'API ici)
import { artisans } from "../../data/artisans";
// Composant qui affiche une carte pour chaque artisan
import ArtisanCard from "../artisan/ArtisanCard";

// Composant qui affiche les artisans "mis en avant"
function FeaturedArtisans() {

  // On filtre les artisans pour garder seulement ceux marqués comme "top"
  // Puis on limite à 3 artisans maximum avec slice(0, 3)
  const featured = artisans.filter((artisan) => artisan.isTop).slice(0, 3);

  return (
    <section className="bg-light py-5">
      <div className="container">
        {/* Titre de la section */}
        <h2 className="text-center mb-4">Artisans du mois</h2>

        <div className="row g-4">
          {/* On parcourt la liste des artisans sélectionnés */}
          {featured.map((artisan) => (
            <div className="col-12 col-md-6 col-lg-4" key={artisan.id}>
              {/* Affichage d’une carte artisan */}
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Export du composant
export default FeaturedArtisans;
