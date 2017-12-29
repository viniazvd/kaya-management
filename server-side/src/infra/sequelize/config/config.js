module.exports = {
  development: {
    username: 'admin01',
    password: 'root',
    database: 'dbkaya',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
  },
  test: {
    username: 'admin01',
    password: 'root',
    database: 'dbkaya_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: 'postgres'
  }
}
