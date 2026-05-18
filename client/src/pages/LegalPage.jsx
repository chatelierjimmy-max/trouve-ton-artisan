/**
 * Composant LegalPage
 * Affiche les pages légales :
 * - mentions légales
 * - cookies
 * - accessibilité
 * - données personnelles
 */
function LegalPage({ title }) {
  return (
    /**
     * Contenu principal page légale
     */
    <section className="container py-5">
      {/*
        Titre de la page
      */}
      <h1>{title}</h1>

      {/*
        Message temporaire
      */}
      <p>Page en construction.</p>
    </section>
  );
}

/**
 * Export du composant LegalPage
 */
export default LegalPage;
