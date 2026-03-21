// Active le mode strict (sécurité JS)
'use strict';
/** @type {import('sequelize-cli').Migration} */
// Export de la migration
module.exports = {
  // Fonction exécutée lors de la création de la table
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Specialties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  // Fonction pour annuler la migration
  async down(queryInterface, Sequelize) {
    // Supprime la table "Specialties"
    await queryInterface.dropTable('Specialties');
  }
};