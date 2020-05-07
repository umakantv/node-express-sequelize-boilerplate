'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
    Author.hasMany(models.Book, {
      foreignKey: 'bookId',
      onDelete: 'CASCADE'
    });
  };
  return Author;
};