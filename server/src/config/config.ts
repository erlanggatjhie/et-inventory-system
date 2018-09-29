import { Options } from 'sequelize';

const config: { [index: string]: Options } = {
  development: {
    username: 'postgres',
    password: 'helloworld',
    database: 'postgres',
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    operatorsAliases: false
  },
  test: {
    username: 'postgres_test',
    password: 'helloworld',
    database: 'postgres_test',
    host: 'localhost',
    port: 5434,
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false
  }
};

module.exports = config;
export default config;
