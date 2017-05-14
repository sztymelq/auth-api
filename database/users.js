const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    surname: {
        type: 'String'
    },
    token: {
        type: 'String',
        required: true
    }
})

module.exports = mongoose.model('user', userSchema);

