const { Router } = require('express');
const router = Router();
const {Book} = require('../controllers');

router.get('/:id', Book.getBook);

router.post('/', Book.addBook);

module.exports = router;