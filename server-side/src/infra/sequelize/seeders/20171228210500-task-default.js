module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks',
      [
        {
          name: 'task1',
          date: '01/01/2018',
          hour: '18:30',
          price: '200,00',
          createdAt: new Date(),
          updatedAt: new Date(),
          id_client: '6',
          id_activity: '1'
        }
      ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {})
  }
}
