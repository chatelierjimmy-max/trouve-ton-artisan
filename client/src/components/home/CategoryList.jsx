import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setError("");
      })
      .catch((err) => {
        console.error("Erreur fetch categories :", err);
        setError("Impossible de charger les catégories.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Catégories d'artisans</h2>

        {loading && <p>Chargement...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="row g-3 mt-3">
            {categories.map((category) => (
              <div key={category.id} className="col-12 col-md-6 col-lg-3">
                <Link
                  to={`/artisans?category=${category.slug}`}
                  className="btn btn-outline-primary w-100 py-3"
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CategoryList;
