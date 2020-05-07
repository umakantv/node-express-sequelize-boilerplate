const { Router } = require('express');
const router = Router();

router.get('/:name', (req, res) => {
  var name = req.params.name;
  res.send(`Welcome to ${name}'s page`);
})

module.exports = router;