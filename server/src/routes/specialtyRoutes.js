// Import du framework Express
const express = require("express");
// Création du routeur
const router = express.Router();
// Import du controller des spécialités
const { getAllSpecialties } = require("../controllers/specialtyController");

// ROUTES SPECIALTIES

// Route pour récupérer toutes les spécialités
// GET /api/specialties
router.get("/", getAllSpecialties);

// Export du routeur
module.exports = router;
