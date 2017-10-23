'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Users', [{
      name: 'admin',
      vip: false,
      email: 'admin@tektonlabs.com',
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now')
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
