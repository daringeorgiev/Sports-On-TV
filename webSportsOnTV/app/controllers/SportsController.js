(function() {
    'use strict';
    var Sport = require('../models/sport');

    module.exports = {
        getTodaySports : function(req, res) {
            Sport.find({}, function(err, sports) {
                if (err) {
                    throw err;
                }
                res.json(sports);
            });
        }
    };
}());
