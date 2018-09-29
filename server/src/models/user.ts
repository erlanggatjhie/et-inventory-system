import * as Sequelize from 'sequelize';
import db from './db';
export interface UserAttributes {
  id?: string;
  userName: string;
  passwordHash: string;
  createdAt?: string;
  updatedAt?: string;
}

type UserInstance = Sequelize.Instance<UserAttributes> & UserAttributes;

const User = db.define<UserInstance, UserAttributes>(
  'User',
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    userName: Sequelize.STRING,
    passwordHash: Sequelize.STRING
  },
  {}
);
User.associate = function() {
  // associations can be defined here
};

export default User;
