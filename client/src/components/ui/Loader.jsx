// Composant Loader : affiche un indicateur de chargement
// Utilisé pendant les appels API ou le chargement de données

function Loader({ text = "Chargement des données...", className = "" }) {
  return (
    <div className={`text-center py-5 ${className}`}>

      {/* Spinner Bootstrap (animation de chargement) */}
      <div className="spinner-border text-primary" role="status"></div>
      
      {/* Texte affiché sous le spinner */}
      <p className="mt-3">{text}</p>
    </div>
  );
}

// Export du composant pour l’utiliser partout dans le projet
export default Loader;
