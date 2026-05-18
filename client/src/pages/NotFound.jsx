/**
 * Import du composant Link
 * permettant la navigation React Router
 */
import { Link } from "react-router-dom";

/**
 * Import du composant SEO
 */
import Seo from "../components/Seo";

/**
 * Import de l’image 404
 */
import notFoundImage from "../assets/404.png";

/**
 * Composant NotFound
 * Affiche une page personnalisée
 * lorsqu’une route n’existe pas
 */
function NotFound() {
  return (
    <>
      {/*
        SEO page 404
      */}
      <Seo
        title="Page non trouvée"
        description="La page demandée est introuvable."
      />

      {/*
        Contenu principal page 404
      */}
      <section className="container py-5 text-center">
        {/*
          Image erreur 404
        */}
        <img
          src={notFoundImage}
          alt="Page non trouvée"
          className="img-fluid mb-4"
          style={{
            maxWidth: "320px",
          }}
        />

        {/*
          Titre principal
        */}
        <h1 className="display-4 mb-3">Page non trouvée</h1>

        {/*
          Texte explicatif
        */}
        <p className="lead mb-4">La page demandée n’existe pas.</p>

        {/*
          Bouton retour accueil
        */}
        <Link to="/" className="btn btn-primary">
          Retour à l’accueil
        </Link>
      </section>
    </>
  );
}

/**
 * Export du composant NotFound
 */
export default NotFound;
