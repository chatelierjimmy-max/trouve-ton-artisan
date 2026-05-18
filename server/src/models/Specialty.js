/**
 * Import des types Sequelize
 */
const { DataTypes } = require("sequelize");

/**
 * Import connexion Sequelize
 */
const sequelize = require("../config/database");

/**
 * Modèle Specialty
 */
const Specialty = sequelize.define(
  "Specialty",
  {
    /**
     * Identifiant spécialité
     */
    id: {
      type: DataTypes.INTEGER,

      primaryKey: true,

      autoIncrement: true,
    },

    /**
     * Nom spécialité
     */
    name: {
      type: DataTypes.STRING(100),

      allowNull: false,
    },

    /**
     * Slug URL spécialité
     */
    slug: {
      type: DataTypes.STRING(100),

      allowNull: false,

      unique: true,
    },

    /**
     * Référence catégorie
     */
    category_id: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },
  },
  {
    /**
     * Nom table SQL
     */
    tableName: "specialties",

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
 * Export modèle Specialty
 */
module.exports = Specialty;
