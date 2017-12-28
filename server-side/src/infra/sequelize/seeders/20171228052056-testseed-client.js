module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clients', [{
      name: 'name-seed',
      email: 'email-seed@email.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clients', null, {})
  }
}
