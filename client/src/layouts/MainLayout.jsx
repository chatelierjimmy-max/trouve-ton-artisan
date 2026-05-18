/**
 * Import du composant Outlet
 * permettant d’afficher les pages enfants
 */
import { Outlet } from "react-router-dom";

/**
 * Import des composants globaux
 */
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Layout principal de l’application
 * Contient :
 * - le header
 * - le contenu des pages
 * - le footer
 */
function MainLayout() {
  return (
    <>
      {/*
        Header global
      */}
      <Header />

      {/*
        Contenu principal
        des différentes pages
      */}
      <main>
        <Outlet />
      </main>

      {/*
        Footer global
      */}
      <Footer />
    </>
  );
}

/**
 * Export du layout principal
 */
export default MainLayout;
