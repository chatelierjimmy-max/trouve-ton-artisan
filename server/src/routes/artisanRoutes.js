// Import du framework Express
const express = require("express");
// Création du routeur
const router = express.Router();
// Import des fonctions du controller artisan
const {
  getAllArtisans,
  getTopArtisans,
  getArtisanBySlug,
} = require("../controllers/artisanController");

// ROUTES ARTISANS
router.get("/top", getTopArtisans);
router.get("/:slug", getArtisanBySlug);
router.get("/", getAllArtisans);

// Route pour récupérer les artisans mis en avant
// GET /api/artisans/top
module.exports = router;
