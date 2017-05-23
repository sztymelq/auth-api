const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    surname: {
        type: 'String'
    },
    password: {
        type: 'String',
        required: true
    }
});

const user = module.exports = mongoose.model('user', userSchema);

user.getAll = (callback) => user.find({}, callback);
user.getByName = (name, callback) => user.findOne({ name }, callback);