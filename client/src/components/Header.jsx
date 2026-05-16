import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

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
          <div className="ms-auto d-flex align-items-center gap-4 flex-column flex-lg-row">
            <SearchBar />

            <ul className="navbar-nav mb-2 mb-lg-0">
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
