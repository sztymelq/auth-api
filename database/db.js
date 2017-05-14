const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds139761.mlab.com:39761/sztymel')
const connection = mongoose.connection;

module.exports = connection;