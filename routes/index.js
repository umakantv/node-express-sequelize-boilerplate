const books = require('./book');
const authors = require('./author');

const { Router } = require('express');
const router = Router();

router.use('/book', books);
router.use('/author', authors);

module.exports = router;