// Envoi d’un message de contact
const sendContactMessage = async (req, res) => {
  try {
    // Récupération des données envoyées dans le body
    const { name, email, subject, message, artisanId } = req.body;

    // Vérification des champs obligatoires
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "Tous les champs obligatoires doivent être remplis.",
      });
    }

    // Réponse simulée de succès
    return res.status(200).json({
      message: "Message envoyé avec succès.",
      data: {
        name,
        email,
        subject,
        message,
        artisanId: artisanId || null,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur serveur.",
      error: error.message,
    });
  }
};

// Export du controller
module.exports = {
  sendContactMessage,
};
