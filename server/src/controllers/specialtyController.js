const { Specialty, Category } = require("../../models");

const getAllSpecialties = async (req, res) => {
  try {
    const specialties = await Specialty.findAll({
      include: [
        {
          model: Category,
          as: "category",
        },
      ],
      order: [["name", "ASC"]],
    });

    res.json(specialties);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

module.exports = {
  getAllSpecialties,
};
