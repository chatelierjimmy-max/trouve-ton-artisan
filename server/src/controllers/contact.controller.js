const { validationResult } = require("express-validator");
const { Artisan, ContactMessage } = require("../models");
const { sendContactEmail } = require("../services/mail.service");

exports.createContactMessage = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Données invalides",
      errors: errors.array(),
    });
  }

  try {
    const { name, email, subject, message, artisanId } = req.body;

    const artisan = await Artisan.findByPk(artisanId);

    if (!artisan) {
      return res.status(404).json({
        message: "Artisan introuvable",
      });
    }

    const contactMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
      artisan_id: artisanId,
    });

    await sendContactEmail({
      artisan,
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      message: "Message envoyé avec succès",
      data: contactMessage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de l’envoi du message",
    });
  }
};
