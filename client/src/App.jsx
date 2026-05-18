/**
 * Import des composants React Router
 * permettant la gestion des routes
 */
import { Routes, Route } from "react-router-dom";

/**
 * Import du layout principal
 */
import MainLayout from "./layouts/MainLayout";

/**
 * Import des différentes pages
 */
import Home from "./pages/Home";
import Category from "./pages/Category";
import ArtisanDetail from "./pages/ArtisanDetail";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";

/**
 * Composant principal App
 * Gère toutes les routes de l’application
 */
function App() {
  return (
    /**
     * Déclaration des routes React Router
     */
    <Routes>
      {/*
        Layout principal partagé
        par toutes les pages
      */}
      <Route element={<MainLayout />}>
        {/*
          Page accueil
        */}
        <Route path="/" element={<Home />} />

        {/*
          Page catégorie artisan
        */}
        <Route path="/categorie/:slug" element={<Category />} />

        {/*
          Page détail artisan
        */}
        <Route path="/artisan/:slug" element={<ArtisanDetail />} />

        {/*
          Page mentions légales
        */}
        <Route
          path="/mentions-legales"
          element={<LegalPage title="Mentions légales" />}
        />

        {/*
          Page données personnelles
        */}
        <Route
          path="/donnees-personnelles"
          element={<LegalPage title="Données personnelles" />}
        />

        {/*
          Page accessibilité
        */}
        <Route
          path="/accessibilite"
          element={<LegalPage title="Accessibilité" />}
        />

        {/*
          Page cookies
        */}
        <Route path="/cookies" element={<LegalPage title="Cookies" />} />

        {/*
          Page recherche artisans
        */}
        <Route path="/recherche" element={<SearchPage />} />

        {/*
          Route 404
        */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

/**
 * Export du composant App
 */
export default App;
