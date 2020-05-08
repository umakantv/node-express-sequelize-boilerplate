const { Router } = require('express');
const router = Router();
const {Author} = require('../controllers');

router.get('/:id', Author.getAuthor);
router.post('/', Author.addAuthor);

module.exports = router;