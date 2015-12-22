var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = Schema ({
    userName: {
        type: 'String',
        unique: true
    },
    password: 'String',
    email: 'String'
});

module.exports = mongoose.model('User', userSchema); 
