import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ArtisanDetail from "./pages/ArtisanDetail";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:slug" element={<Category />} />
        <Route path="/artisan/:slug" element={<ArtisanDetail />} />

        <Route
          path="/mentions-legales"
          element={<LegalPage title="Mentions légales" />}
        />
        <Route
          path="/donnees-personnelles"
          element={<LegalPage title="Données personnelles" />}
        />
        <Route
          path="/accessibilite"
          element={<LegalPage title="Accessibilité" />}
        />
        <Route path="/cookies" element={<LegalPage title="Cookies" />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
