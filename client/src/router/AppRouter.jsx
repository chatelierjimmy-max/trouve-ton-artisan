import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import ArtisanList from "../pages/ArtisanList";
import ArtisanDetail from "../pages/ArtisanDetail";
import Legal from "../pages/Legal";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/artisans" element={<ArtisanList />} />
        <Route path="/artisan/:id" element={<ArtisanDetail />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
