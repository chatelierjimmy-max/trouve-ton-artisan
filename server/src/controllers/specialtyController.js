// Import des modèles nécessaires
const { Specialty, Category } = require("../../models");

// Récupérer toutes les spécialités
const getAllSpecialties = async (req, res) => {
  try {
    // Recherche de toutes les spécialités
    const specialties = await Specialty.findAll({
      include: [
        {
          model: Category,
          as: "category",
        },
      ],
      order: [["name", "ASC"]],
    });

    // Gestion des erreurs serveur
    res.json(specialties);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

// Export du controller
module.exports = {
  getAllSpecialties,
};
