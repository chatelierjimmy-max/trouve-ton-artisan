function FeaturedArtisans() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Artisans du mois</h2>

        <div className="row">
          <div className="col-md-4">
            <div className="card p-3">
              <h5>Menuiserie Dupont</h5>
              <p>Menuisier</p>
              <p>Note : ⭐⭐⭐⭐</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h5>Plomberie Martin</h5>
              <p>Plombier</p>
              <p>Note : ⭐⭐⭐⭐⭐</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h5>Electricité Bernard</h5>
              <p>Électricien</p>
              <p>Note : ⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArtisans;
