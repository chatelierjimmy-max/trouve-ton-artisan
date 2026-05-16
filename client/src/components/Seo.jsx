import { useEffect } from "react";

function Seo({ title, description }) {
  useEffect(() => {
    document.title = title
      ? `${title} - Trouve ton artisan`
      : "Trouve ton artisan";

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content =
      description ||
      "Plateforme de recherche d’artisans en Auvergne-Rhône-Alpes.";
  }, [title, description]);

  return null;
}

export default Seo;
