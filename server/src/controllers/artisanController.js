const { Artisan, Specialty, Category } = require("../../models");

const getAllArtisans = async (req, res) => {
  try {
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

    res.json(artisans);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

const getTopArtisans = async (req, res) => {
  try {
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

    res.json(artisans);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

const getArtisanBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

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

    if (!artisan) {
      return res.status(404).json({
        message: "Artisan introuvable",
      });
    }

    res.json(artisan);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

module.exports = {
  getAllArtisans,
  getTopArtisans,
  getArtisanBySlug,
};
