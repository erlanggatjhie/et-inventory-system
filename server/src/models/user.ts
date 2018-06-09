import { Sequelize, DataTypes } from 'Sequelize';

const User = (sequelize: Sequelize, DataTypes: DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      userName: DataTypes.STRING,
      passwordHash: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

export default User;
