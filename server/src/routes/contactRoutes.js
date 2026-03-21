// Import du framework Express
const express = require("express");
// Création du routeur
const router = express.Router();
// Import du controller de contact
const { sendContactMessage } = require("../controllers/contactController");

// ROUTES CONTACT

// Route pour envoyer un message via le formulaire de contact
// POST /api/contact
router.post("/", sendContactMessage);

// Export du routeur
module.exports = router;
