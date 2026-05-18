/**
 * Import Express
 */
const express = require("express");

/**
 * Création du routeur Express
 */
const router = express.Router();

/**
 * Import des contrôleurs artisans
 */
const {
  getAllArtisans,
  getTopArtisans,
  getArtisanBySlug,
  searchArtisans,
  getArtisansByCategory,
} = require("../controllers/artisan.controller");

/**
 * Route :
 * Récupérer tous les artisans
 */
router.get("/", getAllArtisans);

/**
 * Route :
 * Récupérer les artisans du mois
 */
router.get("/top", getTopArtisans);

/**
 * Route :
 * Rechercher des artisans
 */
router.get("/search", searchArtisans);

/**
 * Route :
 * Récupérer les artisans
 * selon une catégorie
 */
router.get("/category/:category", getArtisansByCategory);

/**
 * Route :
 * Récupérer un artisan
 * selon son slug
 */
router.get("/:slug", getArtisanBySlug);

/**
 * Export du routeur artisans
 */
module.exports = router;
