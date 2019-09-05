const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's Tomb?"});
});

module.exports = router;