const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const users = require('../database/users');
const config = require('../bin/config');

router.get('/', (req, res, next) => {
  res.json({
    message: 'Register route'
  });
});

module.exports = router;