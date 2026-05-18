/**
 * Import de la validation Express
 */
const { validationResult } = require("express-validator");

/**
 * Import des modèles Sequelize
 */
const { Artisan, ContactMessage } = require("../models");

/**
 * Import du service email
 */
const { sendContactEmail } = require("../services/mail.service");

/**
 * Création d’un message de contact
 */
exports.createContactMessage = async (req, res) => {
  /**
   * Récupération des erreurs validation
   */
  const errors = validationResult(req);

  /**
   * Vérification validation formulaire
   */
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Données invalides",

      errors: errors.array(),
    });
  }

  try {
    /**
     * Récupération données formulaire
     */
    const { name, email, subject, message, artisanId } = req.body;

    /**
     * Vérification artisan existant
     */
    const artisan = await Artisan.findByPk(artisanId);

    if (!artisan) {
      return res.status(404).json({
        message: "Artisan introuvable",
      });
    }

    /**
     * Création message en base
     */
    const contactMessage = await ContactMessage.create({
      name,

      email,

      subject,

      message,

      artisan_id: artisanId,
    });

    /**
     * Envoi email artisan
     */
    await sendContactEmail({
      artisan,

      name,

      email,

      subject,

      message,
    });

    /**
     * Réponse succès API
     */
    return res.status(201).json({
      message: "Message envoyé avec succès",

      data: contactMessage,
    });
  } catch (error) {
    /**
     * Affichage erreur console serveur
     */
    console.error("Erreur contact :", error);

    /**
     * Réponse erreur serveur
     */
    return res.status(500).json({
      message: "Erreur lors de l’envoi du message",

      detail: error.message,
    });
  }
};
