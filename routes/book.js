const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/:id', controllers.getBook);

router.post('/', controllers.addBook);

module.exports = router;