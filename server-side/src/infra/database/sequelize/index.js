const Sequelize = require('sequelize')
const sequelize = new Sequelize('dbkaya', 'admin01', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
  define: {
    timestamps: false
  },
  freezeTableName: true,
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado com sucesso!')
  })
  .catch(err => {
    console.error('Falha ao conectar. Erro:', err)
  })

module.exports = sequelize
