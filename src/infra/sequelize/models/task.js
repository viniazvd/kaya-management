module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    hour: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING
  }, { underscore: true })

  Task.associate = models => Task.belongsTo(models.User)

  return Task
}
