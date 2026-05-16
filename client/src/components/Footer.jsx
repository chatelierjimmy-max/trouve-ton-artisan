import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-6">
            <h2 className="h5">Trouve ton artisan</h2>
            <p className="mb-1">101 cours Charlemagne</p>
            <p className="mb-1">CS 20033</p>
            <p className="mb-1">69269 LYON CEDEX 02</p>
            <p className="mb-1">France</p>
            <p className="mb-0">+33 (0)4 26 73 40 00</p>
          </div>

          <div className="col-md-6">
            <h2 className="h5">Informations légales</h2>
            <ul className="list-unstyled">
              <li>
                <Link className="text-white" to="/mentions-legales">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/donnees-personnelles">
                  Données personnelles
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/accessibilite">
                  Accessibilité
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/cookies">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
