const { Router } = require('express');
const router = Router();
const {Book} = require('../controllers');

router.get('/search', Book.searchBooks);
router.get('/:id', Book.getBook);
router.post('/', Book.addBook);
router.put('/:id', Book.updateBook);

module.exports = router;