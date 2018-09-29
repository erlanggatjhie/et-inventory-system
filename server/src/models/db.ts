import Sequelize from 'sequelize';
import dbConfig from '../config/config';

let env = 'development';

if (['development', 'test', 'production'].indexOf(process.env.NODE_ENV) > -1) {
  env = process.env.NODE_ENV;
}

const config = dbConfig[env];

export default new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
