const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const users = require('../database/users');
const config = require('../bin/config');

router.post('/', (req, res, next) => {
  const userName = req.headers.name;
  if (!userName) return res.status(400).end('Invalid request: User name not provided.');

  users.getByName(userName, (err, user) => {
    console.log('user', user);
    if (err || !user) return res.json({
      success: false, message: 'User not found in database.'
    })

    if (req.headers.password !== user.password) return res.json({
      success: false, message: 'Auth failed, wrong password.'
    });

    res.json({
      success: true,
      message: 'Here is your token',
      token: jwt.sign({
        name: userName,
        password: req.headers.password
      }, config.secret)
    })
  })
}
);

module.exports = router;