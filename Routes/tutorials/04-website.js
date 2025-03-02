const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('tutorials/04-website');

});

module.exports = router