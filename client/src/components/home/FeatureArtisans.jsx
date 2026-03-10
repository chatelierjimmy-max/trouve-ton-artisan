import { artisans } from '../../data/artisans'
import ArtisanCard from '../artisan/ArtisanCard'

function FeaturedArtisans() {
  const featured = artisans.filter((artisan) => artisan.isTop).slice(0, 3)

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Artisans du mois</h2>

        <div className="row g-4">
          {featured.map((artisan) => (
            <div className="col-12 col-md-6 col-lg-4" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArtisans