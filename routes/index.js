const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Please use another endpoint.');
});

module.exports = router;