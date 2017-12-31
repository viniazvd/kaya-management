module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clients', [{
      name: 'vini',
      lastName: 'azvd',
      email: 'viniazvd@gmail.com',
      description: 'problema de junta',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clients', null, {})
  }
}
