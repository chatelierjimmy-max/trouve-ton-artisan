// Composant Steps : explique les étapes pour utiliser le site
// Sert à guider l’utilisateur dans son parcours (UX)
function Steps() {
  return (
    <section className="py-5">
      {/* Container Bootstrap pour centrer le contenu */}
      <div className="container">
        {/* Titre de la section */}
        <h2 className="text-center mb-4">Comment trouver mon artisan ?</h2>

        <div className="row text-center">
          <div className="col-md-3">
            <h4>1</h4>
            <p>Choisir la catégorie d’artisan</p>
          </div>

          <div className="col-md-3">
            <h4>2</h4>
            <p>Choisir un artisan</p>
          </div>

          <div className="col-md-3">
            <h4>3</h4>
            <p>Le contacter via le formulaire</p>
          </div>

          <div className="col-md-3">
            <h4>4</h4>
            <p>Recevoir une réponse rapidement</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export du composant pour l’utiliser dans une page (ex: Home)
export default Steps;
