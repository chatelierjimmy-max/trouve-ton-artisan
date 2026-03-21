// Composant NotFound : page affichée lorsqu’une route n’existe pas (erreur 404)
// Permet d’informer l’utilisateur qu’il s’est trompé d’URL
function NotFound() {
  return (
    <div className="container py-5">
      {/* Titre principal */}
      <h2>404 - Page introuvable</h2>
    </div>
  );
}

// Export du composant pour l’utiliser dans le router
export default NotFound;
