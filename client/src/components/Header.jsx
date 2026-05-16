import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg container py-3">
        <Link className="navbar-brand fw-bold" to="/">
          Trouve ton artisan
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/categorie/batiment">
                Bâtiment
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/categorie/services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/categorie/fabrication">
                Fabrication
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/categorie/alimentation">
                Alimentation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
