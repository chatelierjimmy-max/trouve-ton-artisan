// Composant Hero : section principale en haut de la page (bannière)
// Sert à présenter le site et attirer l’attention de l’utilisateur
function Hero() {
  return (
    <section className="bg-light py-5">
      {/* Container Bootstrap pour centrer le contenu */}
      <div className="container text-center">
        {/* Titre principal du site */}
        <h1 className="mb-3">Trouvez l’artisan qu’il vous faut</h1>
        <p className="lead">
          Une plateforme simple pour trouver rapidement un artisan qualifié près
          de chez vous.
        </p>
      </div>
    </section>
  );
}

// Export du composant pour l’utiliser dans une page
export default Hero;
