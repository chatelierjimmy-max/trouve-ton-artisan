import { Link } from "react-router-dom";

import Seo from "../components/Seo";

import notFoundImage from "../assets/404.png";

function NotFound() {
  return (
    <>
      <Seo
        title="Page non trouvée"
        description="La page demandée est introuvable."
      />

      <section className="container py-5 text-center">
        <img
          src={notFoundImage}
          alt="Page non trouvée"
          className="img-fluid mb-4"
          style={{
            maxWidth: "320px",
          }}
        />

        <h1 className="display-4 mb-3">Page non trouvée</h1>

        <p className="lead mb-4">La page demandée n’existe pas.</p>

        <Link to="/" className="btn btn-primary">
          Retour à l’accueil
        </Link>
      </section>
    </>
  );
}

export default NotFound;
