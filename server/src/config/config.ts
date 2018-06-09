import { Options } from 'sequelize';

const config: { [index: string]: Options } = {
  development: {
    username: 'postgres',
    password: 'helloworld',
    database: 'postgres',
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
  },
  test: {
    username: 'database_test',
    password: 'testtest',
    database: 'database_test',
    host: '127.0.0.1',
    port: 5433,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres'
  }
};

module.exports = config;
export default config;
