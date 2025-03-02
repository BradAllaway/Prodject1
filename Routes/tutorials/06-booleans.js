const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('tutorials/06-booleans');

});

module.exports = router