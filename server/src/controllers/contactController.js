const sendContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message, artisanId } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "Tous les champs obligatoires doivent être remplis.",
      });
    }

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

module.exports = {
  sendContactMessage,
};
