// var TV = require('./tv');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sportSchema = mongoose.Schema({
    sportName: {
        type: 'String',
        required: true
    },
    startTime: {
        type: 'Date',
        required: true
    },
    tvId: {
        // type: 'String',
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'TV'
    },
    sportType: String,
    descr: String
});

module.exports = mongoose.model('Sport', sportSchema);
