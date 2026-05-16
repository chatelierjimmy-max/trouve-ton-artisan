const { Op } = require("sequelize");
const { Artisan, Specialty, Category } = require("../models");

exports.getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: [{ model: Specialty, include: [Category] }],
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { is_top: true },
      include: [{ model: Specialty, include: [Category] }],
      limit: 3,
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getArtisanBySlug = async (req, res) => {
  try {
    const artisan = await Artisan.findOne({
      where: { slug: req.params.slug },
      include: [{ model: Specialty, include: [Category] }],
    });

    if (!artisan) {
      return res.status(404).json({ message: "Artisan introuvable" });
    }

    res.json(artisan);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.searchArtisans = async (req, res) => {
  try {
    const query = req.query.q || "";

    const artisans = await Artisan.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${query}%` } },
          { location: { [Op.like]: `%${query}%` } },
        ],
      },
      include: [{ model: Specialty, include: [Category] }],
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getArtisansByCategory = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialty,
          required: true,
          include: [
            {
              model: Category,
              required: true,
              where: { slug: req.params.category },
            },
          ],
        },
      ],
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};
