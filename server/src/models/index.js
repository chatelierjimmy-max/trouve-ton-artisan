const sequelize = require("../config/database");

const Category = require("./Category");
const Specialty = require("./Specialty");
const Artisan = require("./Artisan");
const ContactMessage = require("./ContactMessage");

Category.hasMany(Specialty, {
  foreignKey: "category_id",
});

Specialty.belongsTo(Category, {
  foreignKey: "category_id",
});

Specialty.hasMany(Artisan, {
  foreignKey: "specialty_id",
});

Artisan.belongsTo(Specialty, {
  foreignKey: "specialty_id",
});

Artisan.hasMany(ContactMessage, {
  foreignKey: "artisan_id",
});

ContactMessage.belongsTo(Artisan, {
  foreignKey: "artisan_id",
});

module.exports = {
  sequelize,
  Category,
  Specialty,
  Artisan,
  ContactMessage,
};
