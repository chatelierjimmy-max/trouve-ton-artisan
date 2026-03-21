// Import des composants utilisés sur la page d’accueil
import Hero from '../components/home/Hero'
import Steps from '../components/home/Steps'
import CategoryList from '../components/home/CategoryList'
import FeaturedArtisans from '../components/home/FeaturedArtisans'

// Composant Home : page d’accueil du site
function Home() {
  return (
    <>
      {/* Section principale (titre + description du site) */}
      <Hero />
      {/* Étapes pour expliquer le fonctionnement */}
      <Steps />
      {/* Liste des catégories d’artisans */}
      <CategoryList />
      {/* Artisans mis en avant */}
      <FeaturedArtisans />
    </>
  )
}

// Export de la page pour l’utiliser dans le router
export default Home
