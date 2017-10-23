'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    vip: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
