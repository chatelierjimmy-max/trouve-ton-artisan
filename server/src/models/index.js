/**
 * Import connexion Sequelize
 */
const sequelize = require("../config/database");

/**
 * Import des modèles Sequelize
 */
const Category = require("./Category");

const Specialty = require("./Specialty");

const Artisan = require("./Artisan");

const ContactMessage = require("./ContactMessage");

/**
 * Relation :
 * Une catégorie possède plusieurs spécialités
 */
Category.hasMany(Specialty, {
  foreignKey: "category_id",
});

/**
 * Relation :
 * Une spécialité appartient à une catégorie
 */
Specialty.belongsTo(Category, {
  foreignKey: "category_id",
});

/**
 * Relation :
 * Une spécialité possède plusieurs artisans
 */
Specialty.hasMany(Artisan, {
  foreignKey: "specialty_id",
});

/**
 * Relation :
 * Un artisan appartient à une spécialité
 */
Artisan.belongsTo(Specialty, {
  foreignKey: "specialty_id",
});

/**
 * Relation :
 * Un artisan possède plusieurs messages
 */
Artisan.hasMany(ContactMessage, {
  foreignKey: "artisan_id",
});

/**
 * Relation :
 * Un message appartient à un artisan
 */
ContactMessage.belongsTo(Artisan, {
  foreignKey: "artisan_id",
});

/**
 * Export des modèles Sequelize
 */
module.exports = {
  sequelize,

  Category,

  Specialty,

  Artisan,

  ContactMessage,
};
