/**
 * Import des types Sequelize
 */
const { DataTypes } = require("sequelize");

/**
 * Import connexion Sequelize
 */
const sequelize = require("../config/database");

/**
 * Modèle Artisan
 */
const Artisan = sequelize.define(
  "Artisan",
  {
    /**
     * Identifiant artisan
     */
    id: {
      type: DataTypes.INTEGER,

      primaryKey: true,

      autoIncrement: true,
    },

    /**
     * Nom artisan
     */
    name: {
      type: DataTypes.STRING(150),

      allowNull: false,
    },

    /**
     * Slug URL artisan
     */
    slug: {
      type: DataTypes.STRING(150),

      allowNull: false,

      unique: true,
    },

    /**
     * Note artisan
     */
    note: {
      type: DataTypes.DECIMAL(2, 1),

      allowNull: false,

      defaultValue: 0,
    },

    /**
     * Localisation artisan
     */
    location: {
      type: DataTypes.STRING(150),

      allowNull: false,
    },

    /**
     * Description artisan
     */
    about: {
      type: DataTypes.TEXT,
    },

    /**
     * Email artisan
     */
    email: {
      type: DataTypes.STRING(255),

      allowNull: false,

      validate: {
        isEmail: true,
      },
    },

    /**
     * Site web artisan
     */
    website: {
      type: DataTypes.STRING(255),
    },

    /**
     * Image artisan
     */
    image: {
      type: DataTypes.STRING(255),
    },

    /**
     * Artisan du mois
     */
    is_top: {
      type: DataTypes.BOOLEAN,

      defaultValue: false,
    },

    /**
     * Référence spécialité
     */
    specialty_id: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },
  },
  {
    /**
     * Nom table SQL
     */
    tableName: "artisans",

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
 * Export modèle Artisan
 */
module.exports = Artisan;
