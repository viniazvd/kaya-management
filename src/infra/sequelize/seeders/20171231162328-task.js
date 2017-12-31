module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks',
      [
        {
          name: 'task1',
          date: '01/01/2018',
          hour: '18:30',
          price: '200,00',
          description: 'bla bla bla...',
          createdAt: new Date(),
          updatedAt: new Date(),
          ClientId: 1,
          ActivityId: 1,
          UserId: 1
        }
      ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {})
  }
}
