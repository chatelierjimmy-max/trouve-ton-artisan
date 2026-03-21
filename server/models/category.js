// Active le mode strict (sécurité JS)
'use strict';
// Import du Model Sequelize
const { Model } = require('sequelize');

// Export du modèle
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Specialty, {
        foreignKey: 'categoryId',
        as: 'specialties',
      });
    }
  }

  // Initialisation du modèle avec ses champs
  Category.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );

  // Retour du modèle
  return Category;
};