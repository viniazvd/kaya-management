module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Activities',
      [
        {
          name: 'fisioterapia',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'massagem',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Activities', null, {})
  }
}
