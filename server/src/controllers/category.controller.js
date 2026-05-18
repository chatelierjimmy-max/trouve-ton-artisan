/**
 * Import des modèles Sequelize
 */
const { Category, Specialty } = require("../models");

/**
 * Récupérer toutes les catégories
 * avec leurs spécialités
 */
exports.getAllCategories = async (req, res) => {
  try {
    /**
     * Récupération catégories + spécialités
     */
    const categories = await Category.findAll({
      include: [
        {
          model: Specialty,
        },
      ],
    });

    /**
     * Réponse JSON API
     */
    res.json(categories);
  } catch (error) {
    /**
     * Gestion erreur serveur
     */
    res.status(500).json({
      message: "Erreur serveur",
    });
  }
};
