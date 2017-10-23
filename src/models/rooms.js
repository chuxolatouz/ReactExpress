'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rooms = sequelize.define('Rooms', {
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
  });
  return Rooms;
};
