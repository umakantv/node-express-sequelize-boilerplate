const models = require('../database/models');

const addBook = async (req, res) => {
  try {
    const book = await models.Book.create(req.body);
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
    const book = await models.Book.findOne({bookId: req.params.id});
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

module.exports = {
  addBook, getBook,
}