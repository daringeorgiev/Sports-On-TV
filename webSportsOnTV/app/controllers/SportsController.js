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
        },

        createSport : function (req, res) {
            Sport.create({
                sportName: req.body.sportName,
                // ToDo
                // sportDate: Date,
                // startHour: new Date(req.body.startTime),
                tv: req.body.tv,
                sportType: req.body.sportType,
                descr: req.body.descr
            }, function (err, sport){
                if (err) {
                    res.send(err);
                    throw err;
                }
                res.send(sport);
            });
        }
    };
}());
