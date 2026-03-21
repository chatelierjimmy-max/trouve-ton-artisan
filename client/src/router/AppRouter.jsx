// Import des composants de routing de React Router
import { Routes, Route } from "react-router-dom";
// Import du layout principal (Header + Footer + Outlet)
import MainLayout from "../layouts/MainLayout";
// Import des pages du site
import Home from "../pages/Home";
import ArtisanList from "../pages/ArtisanList";
import ArtisanDetail from "../pages/ArtisanDetail";
import Contact from "../pages/Contact";
import Legal from "../pages/Legal";
import NotFound from "../pages/NotFound";

// Composant AppRouter : définit toutes les routes de l’application
function AppRouter() {
  return (
    <Routes>
      {/* Route principale avec layout commun */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/artisans" element={<ArtisanList />} />
        <Route path="/artisan/:slug" element={<ArtisanDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

// Export du router pour l’utiliser dans App.jsx ou main.jsx
export default AppRouter;
