
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { artisans } from '../data/artisans'
import ArtisanCard from '../components/artisan/ArtisanCard'

function ArtisanList() {
  const [searchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category')

  const filteredArtisans = useMemo(() => {
    if (!selectedCategory) return artisans
    return artisans.filter((artisan) => artisan.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section className="container py-5">
      <h1 className="mb-4">Liste des artisans</h1>

      {selectedCategory && (
        <p className="mb-4">
          <strong>Catégorie sélectionnée :</strong> {selectedCategory}
        </p>
      )}

      <div className="row g-4">
        {filteredArtisans.map((artisan) => (
          <div className="col-12 col-md-6 col-lg-4" key={artisan.id}>
            <ArtisanCard artisan={artisan} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ArtisanList