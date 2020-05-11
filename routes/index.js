const book = require('./book');
const author = require('./author');

const { Router } = require('express');
const router = Router();

router.use('/book', book);
router.use('/author', author);
router.use('/test', (req, res) => {
  res.send("Hello World");
});

module.exports = router;