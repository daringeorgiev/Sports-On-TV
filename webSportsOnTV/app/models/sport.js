(function() {
    'use strict';
    var mongoose = require('mongoose');

    var sportSchema = mongoose.Schema({
        sportName: {
            type: 'String',
            required: true
        },
        startTime: {
            type: 'Date',
            required: true
        },
        tv: {
            type: 'String',
            required: true
        },
        sportType: String,
        descr: String
    });

    module.exports = mongoose.model('Sport', sportSchema);
}());
