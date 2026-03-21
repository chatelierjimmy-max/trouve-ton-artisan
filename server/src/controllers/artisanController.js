// Import des modèles Sequelize nécessaires
const { Artisan, Specialty, Category } = require("../../models");
// Récupérer tous les artisans
const getAllArtisans = async (req, res) => {
  try {
    // Recherche de tous les artisans
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialty,
          as: "specialty",
          include: [
            {
              model: Category,
              as: "category",
            },
          ],
        },
      ],
      order: [["name", "ASC"]],
    });

    // Retourne la liste au format JSON
    res.json(artisans);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

// Récupérer les artisans du mois
const getTopArtisans = async (req, res) => {
  try {
    // Recherche uniquement des artisans mis en avant
    const artisans = await Artisan.findAll({
      where: { isTop: true },
      include: [
        {
          model: Specialty,
          as: "specialty",
          include: [
            {
              model: Category,
              as: "category",
            },
          ],
        },
      ],
      order: [["name", "ASC"]],
    });

    // Retour des données en JSON
    res.json(artisans);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

// Récupérer un artisan via son slug
const getArtisanBySlug = async (req, res) => {
  try {
    // Récupère le slug envoyé dans l’URL
    const { slug } = req.params;

    // Recherche d’un artisan correspondant
    const artisan = await Artisan.findOne({
      where: { slug },
      include: [
        {
          model: Specialty,
          as: "specialty",
          include: [
            {
              model: Category,
              as: "category",
            },
          ],
        },
      ],
    });

    // Si aucun artisan n’est trouvé
    if (!artisan) {
      return res.status(404).json({
        message: "Artisan introuvable",
      });
    }

    // Retourne l’artisan trouvé
    res.json(artisan);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

// Export des fonctions du controller
module.exports = {
  getAllArtisans,
  getTopArtisans,
  getArtisanBySlug,
};
