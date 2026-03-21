// Import du framework Express
const express = require("express");
// Création du routeur
const router = express.Router();
// Import du controller des catégories
const { getAllCategories } = require("../controllers/categoryController");

// ROUTES CATEGORIES

// Route pour récupérer toutes les catégories
// GET /api/categories
router.get("/", getAllCategories);

// Export du routeur
module.exports = router;
