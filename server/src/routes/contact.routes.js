/**
 * Import Express
 */
const express = require("express");

/**
 * Import des validateurs Express
 */
const { body } = require("express-validator");

/**
 * Import du contrôleur contact
 */
const { createContactMessage } = require("../controllers/contact.controller");

/**
 * Création du routeur Express
 */
const router = express.Router();

/**
 * Route :
 * Création message contact artisan
 */
router.post(
  "/",

  [
    /**
     * Validation nom utilisateur
     */
    body("name")
      .trim()

      .notEmpty()

      .withMessage("Le nom est obligatoire.")

      .isLength({
        min: 2,
        max: 150,
      })

      .withMessage("Le nom doit contenir entre 2 et 150 caractères."),

    /**
     * Validation email utilisateur
     */
    body("email")
      .trim()

      .notEmpty()

      .withMessage("L’email est obligatoire.")

      .isEmail()

      .withMessage("L’email est invalide.")

      .normalizeEmail(),

    /**
     * Validation sujet message
     */
    body("subject")
      .trim()

      .notEmpty()

      .withMessage("L’objet est obligatoire.")

      .isLength({
        min: 2,
        max: 255,
      })

      .withMessage("L’objet doit contenir entre 2 et 255 caractères."),

    /**
     * Validation contenu message
     */
    body("message")
      .trim()

      .notEmpty()

      .withMessage("Le message est obligatoire.")

      .isLength({
        min: 10,
        max: 3000,
      })

      .withMessage("Le message doit contenir entre 10 et 3000 caractères."),

    /**
     * Validation artisan sélectionné
     */
    body("artisanId")
      .notEmpty()

      .withMessage("L’artisan est obligatoire.")

      .isInt()

      .withMessage("L’identifiant artisan est invalide."),
  ],

  /**
   * Contrôleur création message
   */
  createContactMessage,
);

/**
 * Export du routeur contact
 */
module.exports = router;
