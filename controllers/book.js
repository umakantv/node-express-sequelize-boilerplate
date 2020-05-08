const {Book} = require('../database/models');

const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.status(200).json({
      book,
    });
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}
const getBook = async (req, res) => {
  try {
    console.log(req.params.id);
    const book = await Book.findOne({
      attributes: ['bookId', 'title'],
      where: {
        bookId: req.params.id
      }
      
    });
    if(book) {
      return res.status(200).json({
        book,
      });
    } else {
      return res.status(400).json({error: "Could not find a book with the provided ID."});
    }
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}
const controller = {
  'name': 'Book',
  'addBook': addBook,
  'getBook': getBook,
}
module.exports = controller;