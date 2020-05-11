const {Book, Sequelize, Author} = require('../database/models');
const Op = Sequelize.Op;

const addBook = async (req, res) => {
  try {
    const author = await Author.findByPk(req.body.authorId);
    if(author) {
      const book = await Book.create(req.body);
      req.params.id = book.id;
      getBook(req, res);
      // return res.status(200).json({
      //   book,
      // });
    } else {
      return res.status(400).json({error: "Invalid author ID"});
    }
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}
const getBook = async (req, res) => {
  try {
    console.log(req.params.id);
    
    const book = await Book.findByPk(req.params.id, {
      attributes: ["title", "id"],
      include: [{
        model: Author, 
        as: "author",
        attributes: ["name", "id"]
      }]
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

const searchBooks = async (req, res) => {
  try {
    const book = await Book.findAll({
      attributes: ["title", "id"],
      include: [{
        model: Author, 
        as: "author",
        attributes: ["name", "id"]
      }],
      where: {
        title: {
          [Op.iLike]: `%${req.query.name}%`
        }
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
      where: { id: bookId }
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
  'searchBooks': searchBooks,
  'updateBook': updateBook
}
module.exports = controller;