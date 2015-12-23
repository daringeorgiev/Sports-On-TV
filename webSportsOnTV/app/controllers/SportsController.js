(function() {
    'use strict';
    var Sport = require('../models/sport');

    module.exports = {
        getTodaySports: function(req, res) {
            Sport.find({}).sort({
                startTime: 'asc'
            }).exec(function(err, sports) {
                if (err) {
                    throw err;
                }
                res.json(sports);
            });
        },

        createSport: function(req, res) {
            Sport.create({
                sportName: req.body.sportName,
                startTime: new Date(req.body.startTime),
                tv: req.body.tv,
                sportType: req.body.sportType,
                descr: req.body.descr
            }, function(err, sport) {
                if (err) {
                    res.send(err);
                    throw err;
                }
                res.send(sport);
            });
        },

        deleteSport: function(req, res) {
            Sport.remove({
                _id: req.body.id
            }, function(err) {
                if (err) {
                    res.send(err);
                    throw err;
                }
                res.json({
                    message: 'Sport deleted successfully'
                });
            });
        }
    };
}());
