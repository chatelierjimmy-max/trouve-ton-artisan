// Active le mode strict
'use strict';
// Import du Model Sequelize
const { Model } = require('sequelize');

// Export du modèle
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate(models) {
      Specialty.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category',
      });

      Specialty.hasMany(models.Artisan, {
        foreignKey: 'specialtyId',
        as: 'artisans',
      });
    }
  }

  // Initialisation du modèle avec ses champs
  Specialty.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Specialty',
    }
  );

  // Retour du modèle
  return Specialty;
};