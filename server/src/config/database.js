/**
 * Import Sequelize ORM
 */
const { Sequelize } = require("sequelize");

/**
 * Chargement des variables d’environnement
 */
require("dotenv").config();

/**
 * Création de la connexion MySQL
 */
const sequelize = new Sequelize(
  /**
   * Nom base de données
   */
  process.env.DB_NAME,

  /**
   * Utilisateur MySQL
   */
  process.env.DB_USER,

  /**
   * Mot de passe MySQL
   */
  process.env.DB_PASSWORD,

  {
    /**
     * Adresse serveur MySQL
     */
    host: process.env.DB_HOST,

    /**
     * Port MySQL
     */
    port: process.env.DB_PORT,

    /**
     * Type base de données
     */
    dialect: "mysql",

    /**
     * Désactivation logs SQL console
     */
    logging: false,
  },
);

/**
 * Export connexion Sequelize
 */
module.exports = sequelize;
