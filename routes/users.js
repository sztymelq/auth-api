var express = require('express');
var router = express.Router();
const userModel = require('../database/users');

router.get('/', function(req, res, next) {
  userModel.find({}, (err, users) => {
    res.json({
      success: true,
      payload: users
    })
  });
});

module.exports = router;
