import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="container py-5 text-center">
      <h1>Page non trouvée</h1>
      <p>La page demandée n’existe pas.</p>

      <Link to="/" className="btn btn-primary">
        Retour à l’accueil
      </Link>
    </section>
  );
}

export default NotFound;
