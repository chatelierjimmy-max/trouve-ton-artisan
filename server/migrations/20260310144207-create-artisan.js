'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Artisans');
  }
};