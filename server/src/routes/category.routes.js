/**
 * Import Express
 */
const express = require("express");

/**
 * Création du routeur Express
 */
const router = express.Router();

/**
 * Import du contrôleur catégories
 */
const { getAllCategories } = require("../controllers/category.controller");

/**
 * Route :
 * Récupérer toutes les catégories
 */
router.get("/", getAllCategories);

/**
 * Export du routeur catégories
 */
module.exports = router;
