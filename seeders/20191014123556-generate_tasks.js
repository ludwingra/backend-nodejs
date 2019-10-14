'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert('tasks', [
      {
        id: 1,
        description: 'Grabar curso Backend',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        description: 'Editar videos del curso Backend',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        description: 'Subir los videos del curso Backend',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    // Add reverting commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkDelete('tasks', null, {});

  }
};
