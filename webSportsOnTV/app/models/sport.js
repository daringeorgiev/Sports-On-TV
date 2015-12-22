var mongoose = require ('mongoose');

var Schema = mongoose.Schema;
var sportSchema = Schema({
    name: String,
    startHour: Date,
    tv: String,
    type: String,
    descr: String
});

module.exports = mongoose.model('Sport', sportSchema);
