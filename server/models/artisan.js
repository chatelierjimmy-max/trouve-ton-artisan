'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artisan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artisan.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    about: DataTypes.TEXT,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    city: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    isTop: DataTypes.BOOLEAN,
    specialtyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Artisan',
  });
  return Artisan;
};