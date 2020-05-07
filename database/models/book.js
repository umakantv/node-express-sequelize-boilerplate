'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.hasMany(models.Author, {
      foreignKey: 'authorId',
      onDelete: 'CASCADE'
    });
  };
  return Book;
};