'use strict';
module.exports = (sequelize, DataTypes) => {
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
