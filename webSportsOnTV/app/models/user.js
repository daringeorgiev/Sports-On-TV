(function() {
    'use strict';
    var mongoose = require('mongoose'),
        bcrypt = require('bcrypt-nodejs');

    var Schema = mongoose.Schema;
    var userSchema = Schema({
        name: {
            type: 'String',
            unique: true
        },
        password: 'String',
        email: 'String'
    });

    // generating a hash
    userSchema.methods.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // checking if password is valid
    userSchema.methods.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    module.exports = mongoose.model('User', userSchema);
}());
