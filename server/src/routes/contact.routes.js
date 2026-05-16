const express = require("express");
const { body } = require("express-validator");

const { createContactMessage } = require("../controllers/contact.controller");

const router = express.Router();

router.post(
  "/",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Le nom est obligatoire.")
      .isLength({ min: 2, max: 150 })
      .withMessage("Le nom doit contenir entre 2 et 150 caractères."),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("L’email est obligatoire.")
      .isEmail()
      .withMessage("L’email est invalide.")
      .normalizeEmail(),

    body("subject")
      .trim()
      .notEmpty()
      .withMessage("L’objet est obligatoire.")
      .isLength({ min: 2, max: 255 })
      .withMessage("L’objet doit contenir entre 2 et 255 caractères."),

    body("message")
      .trim()
      .notEmpty()
      .withMessage("Le message est obligatoire.")
      .isLength({ min: 10, max: 3000 })
      .withMessage("Le message doit contenir entre 10 et 3000 caractères."),

    body("artisanId")
      .notEmpty()
      .withMessage("L’artisan est obligatoire.")
      .isInt()
      .withMessage("L’identifiant artisan est invalide."),
  ],
  createContactMessage,
);

module.exports = router;
