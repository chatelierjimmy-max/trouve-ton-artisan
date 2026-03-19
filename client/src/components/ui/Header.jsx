import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/artisans?search=${search}`);
    }
  };

  return (
    <header className="bg-dark text-white">
      <div className="container py-3 d-flex align-items-center">
        {/* LOGO */}

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

        {/* BARRE DE RECHERCHE */}

        <form onSubmit={handleSearch} className="mx-4 flex-grow-1">
          <input
            type="text"
            placeholder="Rechercher un artisan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
          />
        </form>

        {/* MENU */}

        <nav className="ms-auto">
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
