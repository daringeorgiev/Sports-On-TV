var mongoose = require('mongoose');

var tvSchema = mongoose.Schema({
    id: Number,
    name: String,
    picture: String
});

module.exports = mongoose.model('TV', tvSchema);
