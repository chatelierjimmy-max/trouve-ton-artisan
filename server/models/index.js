// Active le mode strict de JavaScript
'use strict';

// Import du module fs pour lire les fichiers du dossier
const fs = require('fs');
// Import du module path pour gérer les chemins
const path = require('path');
// Import de Sequelize
const Sequelize = require('sequelize');
// Import de process pour lire les variables d’environnement
const process = require('process');
// Nom du fichier actuel (index.js)
const basename = path.basename(__filename);
// Environnement actuel : development par défaut
const env = process.env.NODE_ENV || 'development';
// Récupération de la configuration correspondant à l’environnement
const config = require(__dirname + '/../config/config.json')[env];
// Objet qui contiendra tous les modèles
const db = {};

// Variable qui contiendra l’instance Sequelize
let sequelize;
// Si une variable d’environnement est utilisée pour la connexion
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Lecture de tous les fichiers du dossier models
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Parcourt tous les modèles pour créer les associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Ajoute Sequelize et l’instance sequelize dans l’objet exporté
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Exporte tous les modèles + la connexion
module.exports = db;
