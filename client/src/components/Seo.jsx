/**
 * Import du hook useEffect
 */
import { useEffect } from "react";

/**
 * Composant Seo
 * Permet de modifier dynamiquement :
 * - le titre de la page
 * - la meta description
 */
function Seo({ title, description }) {
  useEffect(() => {
    /**
     * Mise à jour du titre HTML
     */
    document.title = title
      ? `${title} - Trouve ton artisan`
      : "Trouve ton artisan";

    /**
     * Recherche de la balise meta description
     */
    let metaDescription = document.querySelector('meta[name="description"]');

    /**
     * Création de la balise
     * si elle n’existe pas
     */
    if (!metaDescription) {
      metaDescription = document.createElement("meta");

      metaDescription.name = "description";

      document.head.appendChild(metaDescription);
    }

    /**
     * Mise à jour de la description SEO
     */
    metaDescription.content =
      description ||
      "Plateforme de recherche d’artisans en Auvergne-Rhône-Alpes.";
  }, [title, description]);

  /**
   * Aucun affichage HTML
   */
  return null;
}

/**
 * Export du composant Seo
 */
export default Seo;
