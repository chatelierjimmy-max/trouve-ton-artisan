'use strict';
const { Model } = require('sequelize');

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

  return Specialty;
};