module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    name: DataTypes.STRING
  })

  Activity.associate = models => Activity.hasMany(models.Task)

  return Activity
}
