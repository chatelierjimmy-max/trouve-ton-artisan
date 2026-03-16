import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark text-white">
      <div className="container py-3 d-flex justify-content-between align-items-center">
        <Link
          to="/"
          className="d-flex align-items-center text-white text-decoration-none"
        >
          <img
            src="/logo2.png"
            alt="Trouve ton artisan"
            className="logo me-2"
          />
        </Link>

        <nav>
          <Link to="/" className="text-white me-3">
            Accueil
          </Link>
          <Link to="/artisans" className="text-white me-3">
            Artisans
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
