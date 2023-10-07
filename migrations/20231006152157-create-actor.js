'use strict';

/** @type {import('sequelize-cli').Migration} */
//Menambahkan kolom 'age' pada tabel 'actor'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('actor', 'age', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  //Menghapus kolom 'age' dari tabel 'actor'
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('actor', 'age');
  }
};