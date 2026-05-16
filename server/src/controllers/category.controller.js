const { Category, Specialty } = require("../models");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Specialty,
        },
      ],
    });

    res.json(categories);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
    });
  }
};
