import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark text-white">
      <div className="container py-3 d-flex justify-content-between">
        <Link to="/" className="text-white fw-bold">
          Trouve ton artisan
        </Link>

        <nav>
          <Link to="/" className="text-white me-3">
            Accueil
          </Link>
          <Link to="/artisans" className="text-white">
            Artisans
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
