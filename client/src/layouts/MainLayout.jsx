// Import du Header (barre du haut)
import Header from "../components/ui/Header";
// Import du Footer (bas de page)
import Footer from "../components/ui/Footer";
// Outlet permet d’afficher les pages enfants selon la route
import { Outlet } from "react-router-dom";

// Composant MainLayout : structure globale du site
// Il encadre toutes les pages (Header + contenu + Footer)
function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Export du layout pour l’utiliser dans le router
export default MainLayout;
