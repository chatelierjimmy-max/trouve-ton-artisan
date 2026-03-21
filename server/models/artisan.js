// Active le mode strict (sécurité JS)
'use strict';
// Import de Model depuis Sequelize
const { Model } = require('sequelize');

// Export du modèle
module.exports = (sequelize, DataTypes) => {
    class Artisan extends Model {
    // Méthode pour définir les relations entre modèles
    static associate(models) {
      Artisan.belongsTo(models.Specialty, {
        foreignKey: 'specialtyId',
        as: 'specialty',
      });
    }
  }

  // Initialisation du modèle avec ses champs
  Artisan.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      about: DataTypes.TEXT,
      email: DataTypes.STRING,
      website: DataTypes.STRING,
      city: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      isTop: DataTypes.BOOLEAN,
      specialtyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Artisan',
    }
  );

  // Retour du modèle
  return Artisan;
};