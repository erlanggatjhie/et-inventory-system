import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import dbConfig from '../config/config';

const basename = path.basename(__filename);
let env = 'development';

if (['development', 'test', 'production'].indexOf(process.env.NODE_ENV) > -1) {
  env = process.env.NODE_ENV;
}

const config = dbConfig[env];

const db: any = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
