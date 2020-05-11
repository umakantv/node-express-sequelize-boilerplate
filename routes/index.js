const books = require('./book');
const authors = require('./author');

const { Router } = require('express');
const router = Router();

router.use('/book', books);
router.use('/author', authors);
router.use('/test', (req, res) => {
  res.send("Hello World");
});

module.exports = router;