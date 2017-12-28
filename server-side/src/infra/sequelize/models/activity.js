module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Activity
}
