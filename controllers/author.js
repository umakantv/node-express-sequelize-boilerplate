const {Book, Sequelize, Author} = require('../database/models');
const Op = Sequelize.Op;

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    return res.status(200).json({
      author: author,
    });
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}
const getAuthor = async (req, res) => {
  console.log("get author with id")
  try {
    const author = await Author.findOne({
      attributes: ['id', 'name'],
      include: [
        {
          model: Book,
          as: 'books', 
          attributes: ['id', 'title']
        }
      ],
      where: {
        id: req.params.id
      }
      
    });
    if(author) {
      return res.status(200).json({
        author: author,
      });
    } else {
      return res.status(400).json({error: "Could not find an author with the provided ID."});
    }
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

const searchAuthors = async (req, res) => {
  console.log('Searching author');
  try {
    const authors = await Author.findAll({
      attributes: ["id", "name"],
      where: {
        name: {
          [Op.iLike]: `%${req.query.name}%`
        }
      }
    });
    if(authors) {
      return res.status(200).json({
        authors,
      });
    } else {
      return res.status(400).json({error: "Could not find any author with that name."});
    }
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}
const controller = {
  'name': 'Author',
  addAuthor,
  searchAuthors,
  getAuthor,
}
module.exports = controller;