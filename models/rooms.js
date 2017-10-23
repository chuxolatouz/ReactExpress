'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rooms = sequelize.define('Rooms', {
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rooms;
};
