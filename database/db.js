const mongoose = require('mongoose');

module.exports = {
  connect() {
    mongoose.connect('mongodb://admin:admin@ds139761.mlab.com:39761/sztymel');
    return mongoose.connection;
  }
};