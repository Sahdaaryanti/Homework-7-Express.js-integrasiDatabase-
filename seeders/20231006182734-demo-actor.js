'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = [
      { first_name: 'Sahda', last_name: 'Aryanti', last_update: new Date() },
      { first_name: 'Choi', last_name: 'Hyunsuk', last_update: new Date() },
      { first_name: 'Kim', last_name: 'Jisoo', last_update: new Date() },
      { first_name: 'Ridho', last_name: 'Roma', last_update: new Date() },
      { first_name: 'Anisa', last_name: 'Rahma', last_update: new Date() }
    ];

    await queryInterface.bulkInsert('actor', seedData, {});
  },

//Menghapus semua data yang di-seed
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('actor', null, {});
  }
};