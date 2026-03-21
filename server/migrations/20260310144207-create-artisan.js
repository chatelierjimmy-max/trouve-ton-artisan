// Active le mode strict (sécurité JS)
'use strict';
/** @type {import('sequelize-cli').Migration} */
// Export de la migration
module.exports = {
  // Création de la table
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Artisans', {
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
      about: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      isTop: {
        type: Sequelize.BOOLEAN
      },
      specialtyId: {
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

  // Suppression de la table (rollback)
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Artisans');
  }
};