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
      attributes: ['', 'title'],
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
const updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const [ updated ] = await Book.update(req.body, {
      where: { bookId: bookId }
    });
    if (updated) {
      const updatedBook = await Book.findOne({ where: { bookId: bookId } });
      return res.status(200).json({ book: updatedBook });
    }
    throw new Error('Book not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const controller = {
  'name': 'Book',
  'addBook': addBook,
  'getBook': getBook,
  'updateBook': updateBook
}
module.exports = controller;