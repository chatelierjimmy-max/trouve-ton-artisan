/**
 * Import des types Sequelize
 */
const { DataTypes } = require("sequelize");

/**
 * Import connexion Sequelize
 */
const sequelize = require("../config/database");

/**
 * Modèle Category
 */
const Category = sequelize.define(
  "Category",
  {
    /**
     * Identifiant catégorie
     */
    id: {
      type: DataTypes.INTEGER,

      primaryKey: true,

      autoIncrement: true,
    },

    /**
     * Nom catégorie
     */
    name: {
      type: DataTypes.STRING(100),

      allowNull: false,

      unique: true,
    },

    /**
     * Slug URL catégorie
     */
    slug: {
      type: DataTypes.STRING(100),

      allowNull: false,

      unique: true,
    },
  },
  {
    /**
     * Nom table SQL
     */
    tableName: "categories",

    /**
     * Activation timestamps
     */
    timestamps: true,

    /**
     * Nom colonne création
     */
    createdAt: "created_at",

    /**
     * Nom colonne modification
     */
    updatedAt: "updated_at",
  },
);

/**
 * Export modèle Category
 */
module.exports = Category;
