// Import du modèle Category
const { Category } = require("../../models");
// Récupérer toutes les catégories
const getAllCategories = async (req, res) => {
  try {
    // Recherche de toutes les catégories
    const categories = await Category.findAll({
      // Tri alphabétique par nom
      order: [["name", "ASC"]],
    });

    // Retour des catégories au format JSON
    res.json(categories);
  } catch (error) {

    // Gestion des erreurs serveur
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

// Export du controller
module.exports = {
  getAllCategories,
};
