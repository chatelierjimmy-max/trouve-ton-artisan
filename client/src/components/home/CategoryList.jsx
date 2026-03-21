// On importe les hooks React pour gérer l’état et les effets
import { useEffect, useState } from "react";
// Link permet de naviguer entre les pages sans recharger
import { Link } from "react-router-dom";
// Composant Loader (affichage pendant le chargement)
import Loader from "../ui/Loader";

// Composant principal qui affiche la liste des catégories
function CategoryList() {
  // État pour stocker les catégories récupérées depuis l'API
  const [categories, setCategories] = useState([]);
  // État pour savoir si les données sont en cours de chargement
  const [loading, setLoading] = useState(true);
  // État pour gérer les erreurs éventuelles
  const [error, setError] = useState("");

  // Appel à l'API pour récupérer les catégories
  useEffect(() => {
    fetch("/api/categories")
      .then(async (response) => {
        const data = await response.json();

        // Si la réponse HTTP n’est pas OK (ex: 404, 500)
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
  }, []); // Tableau vide = exécuté une seule fois

  return (
    <section className="py-5">
      <div className="container">
        {/* Titre de la section */}
        <h2 className="text-center mb-4">Catégories d'artisans</h2>

        {/* Affichage du loader pendant le chargement */}
        {loading && <Loader text="Chargement des catégories..." />}

        {/* Affichage d’un message d’erreur */}
        {error && <div className="alert alert-danger mt-4">{error}</div>}

        {!loading && !error && categories.length > 0 && (
          <div className="row g-3 mt-3">
            {categories.map((category) => (
              <div key={category.id} className="col-12 col-md-6 col-lg-3">
                {/* Bouton qui redirige vers la page des artisans filtrés */}
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

// Export du composant pour l’utiliser ailleurs
export default CategoryList;
