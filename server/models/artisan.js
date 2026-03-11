'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Artisan extends Model {
    static associate(models) {
      Artisan.belongsTo(models.Specialty, {
        foreignKey: 'specialtyId',
        as: 'specialty',
      });
    }
  }

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

  return Artisan;
};