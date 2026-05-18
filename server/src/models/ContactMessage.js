/**
 * Import des types Sequelize
 */
const { DataTypes } = require("sequelize");

/**
 * Import connexion Sequelize
 */
const sequelize = require("../config/database");

/**
 * Modèle ContactMessage
 */
const ContactMessage = sequelize.define(
  "ContactMessage",
  {
    /**
     * Identifiant message
     */
    id: {
      type: DataTypes.INTEGER,

      primaryKey: true,

      autoIncrement: true,
    },

    /**
     * Nom expéditeur
     */
    name: {
      type: DataTypes.STRING(150),

      allowNull: false,
    },

    /**
     * Email expéditeur
     */
    email: {
      type: DataTypes.STRING(255),

      allowNull: false,

      validate: {
        isEmail: true,
      },
    },

    /**
     * Sujet message
     */
    subject: {
      type: DataTypes.STRING(255),

      allowNull: false,
    },

    /**
     * Contenu message
     */
    message: {
      type: DataTypes.TEXT,

      allowNull: false,
    },

    /**
     * Référence artisan
     */
    artisan_id: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },
  },
  {
    /**
     * Nom table SQL
     */
    tableName: "contact_messages",

    /**
     * Désactivation timestamps automatiques
     */
    timestamps: false,
  },
);

/**
 * Export modèle ContactMessage
 */
module.exports = ContactMessage;
