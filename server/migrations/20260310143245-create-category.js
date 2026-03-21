// Active le mode strict de JavaScript (meilleure sécurité)
'use strict';


/** @type {import('sequelize-cli').Migration} */
// Export de la migration
module.exports = {

  // Fonction exécutée lors de la création de la table
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
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

  // Fonction exécutée lors d’un rollback (annulation)
  async down(queryInterface, Sequelize) {
    // Supprime la table "Categories"
    await queryInterface.dropTable('Categories');
  }
};