import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/categories")
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Erreur lors du chargement des catégories.",
          );
        }

        if (!Array.isArray(data)) {
          throw new Error("Les catégories reçues ne sont pas au bon format.");
        }

        setCategories(data);
        setError("");
      })
      .catch((err) => {
        console.error("Erreur fetch categories :", err);
        setCategories([]);
        setError(err.message || "Impossible de charger les catégories.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Catégories d'artisans</h2>

        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-3">Chargement des catégories...</p>
          </div>
        )}

        {error && <div className="alert alert-danger mt-4">{error}</div>}

        {!loading && !error && categories.length > 0 && (
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
