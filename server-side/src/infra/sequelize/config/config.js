module.exports = {
  development: {
    username: 'admin01',
    password: 'root',
    database: 'dbkaya_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
  },
  test: {
    username: process.env.USERNAME || 'postgres',
    password: process.env.PASSWORD || 'root',
    database: process.env.DATABASE_TEST || 'dbkaya_test',
    host: process.env.HOST || '127.0.0.1',
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
