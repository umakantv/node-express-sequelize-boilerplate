'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false 
    }
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    // For simplicity, let's assume a book has only one author
    Book.belongsTo(models.Author, {
      foreignKey: 'authorId',
      as: 'author'
    });
  };
  return Book;
};