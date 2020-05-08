const {Author} = require('../database/models');

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
  try {
    const author = await Author.findOne({
      attributes: ['authorId', 'name'],
      where: {
        authorId: req.params.id
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
const controller = {
  'name': 'Author',
  'addAuthor': addAuthor,
  'getAuthor': getAuthor,
}
module.exports = controller;