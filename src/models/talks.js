'use strict';
module.exports = (sequelize, DataTypes) => {
  var Talks = sequelize.define('Talks', {
    name: DataTypes.STRING,
    speaker: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Talks;
};
