import { useParams } from 'react-router-dom'
import { artisans } from '../data/artisans'

function ArtisanDetail() {
  const { slug } = useParams()

  const artisan = artisans.find((item) => item.slug === slug)

  if (!artisan) {
    return (
      <section className="container py-5">
        <h1>Artisan introuvable</h1>
        <p>La fiche demandée n’existe pas.</p>
      </section>
    )
  }

  return (
    <section className="container py-5">
      <h1 className="mb-4">{artisan.name}</h1>

      <p><strong>Spécialité :</strong> {artisan.specialty}</p>
      <p><strong>Ville :</strong> {artisan.city}</p>
      <p><strong>Note :</strong> {artisan.rating} / 5</p>
      <p><strong>À propos :</strong> {artisan.about}</p>
      <p><strong>Email :</strong> {artisan.email}</p>

      {artisan.website && (
        <p>
          <strong>Site web :</strong>{' '}
          <a href={artisan.website} target="_blank" rel="noreferrer">
            Visiter le site
          </a>
        </p>
      )}
    </section>
  )
}

export default ArtisanDetail