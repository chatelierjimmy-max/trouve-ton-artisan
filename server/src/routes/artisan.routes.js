const express = require("express");
const router = express.Router();

const {
  getAllArtisans,
  getTopArtisans,
  getArtisanBySlug,
  searchArtisans,
  getArtisansByCategory,
} = require("../controllers/artisan.controller");

router.get("/", getAllArtisans);
router.get("/top", getTopArtisans);
router.get("/search", searchArtisans);
router.get("/category/:category", getArtisansByCategory);
router.get("/:slug", getArtisanBySlug);

module.exports = router;
