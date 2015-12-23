(function() {
    'use strict';
    var mongoose = require('mongoose');

    var sportSchema = mongoose.Schema({
        sportName: String,
        startTime: Date,
        tv: String,
        sportType: String,
        descr: String
    });

    module.exports = mongoose.model('Sport', sportSchema);
}());
