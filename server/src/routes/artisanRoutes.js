const express = require("express");
const router = express.Router();
const {
  getAllArtisans,
  getTopArtisans,
  getArtisanBySlug,
} = require("../controllers/artisanController");

router.get("/top", getTopArtisans);
router.get("/:slug", getArtisanBySlug);
router.get("/", getAllArtisans);

module.exports = router;
