(function() {
    'use strict';
    var mongoose = require('mongoose');

    var sportSchema = mongoose.Schema({
        name: String,
        date: Date,
        startHour: Date,
        tv: String,
        type: String,
        descr: String
    });

    module.exports = mongoose.model('Sport', sportSchema);
}());
