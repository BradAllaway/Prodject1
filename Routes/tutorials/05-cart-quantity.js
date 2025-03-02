const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('tutorials/05-cart-quantity');

});

module.exports = router