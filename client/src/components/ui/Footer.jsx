function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          {/* Bloc adresse */}
          <div className="col-md-6">
            <h5>Contact</h5>
            <a
              href="https://www.google.com/maps?q=101+cours+Charlemagne+Lyon"
              target="_blank"
              rel="noreferrer"
              className="text-white text-decoration-none"
            >
              101 cours Charlemagne CS 20033 69269 LYON CEDEX 02 FRANCE
            </a>
          </div>

          {/* Bloc téléphone */}
          <div className="col-md-6">
            <h5>Téléphone</h5>
            <p>
              <a
                href="tel:+33426734000"
                className="text-white text-decoration-none"
              >
                +33 (0)4 26 73 40 00
              </a>
            </p>
          </div>
        </div>

        {/* Ligne du bas */}
        <hr className="border-light" />

        <p className="text-center mb-0">
          © Trouve ton artisan - Région Auvergne-Rhône-Alpes
        </p>
      </div>
    </footer>
  );
}

export default Footer;
