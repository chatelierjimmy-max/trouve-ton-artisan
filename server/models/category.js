'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Specialty, {
        foreignKey: 'categoryId',
        as: 'specialties',
      });
    }
  }

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

  return Category;
};