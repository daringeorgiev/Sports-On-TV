(function() {
    'use strict';
    var Sport = require('../models/sport');

    module.exports = {
        getTodaySports: function(req, res) {
            Sport.find({
                // ToDo
                // startTime:
            }).sort({
                startTime: 'asc'
            }).exec(function(err, sports) {
                if (err) {
                    throw err;
                }
                res.json(sports);
            });
        },

        getAllSports: function(req, res) {
            Sport.find({}).sort({
                startTime: 'asc'
            }).exec(function(err, sports) {
                if (err) {
                    throw err;
                }
                res.json(sports);
            });
        },

        getSportById: function(req, res) {
            Sport.find({
                _id: req.query.id
            }, function(err, sport) {
                if (err) {
                    res.send(err);
                    throw err;
                }
                res.send(sport);
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

        updateSport: function(req, res) {
            Sport.findOne({
                _id: req.body.id
            }, function(err, sport) {
                if (err) {
                    res.send(err);
                    throw err;
                }

                if (!sport) {
                    return res.status(404)
                        .send('Sport not found');
                }

                sport.sportName = req.body.sportName;
                sport.startTime = new Date(req.body.startTime);
                sport.tv = req.body.tv;
                sport.sportType = req.body.sportType;
                sport.descr = req.body.descr;

                sport.save(function(err, sport) {
                    if (err) {
                        res.send(err);
                        throw err;
                    }
                    res.send(sport);
                });
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
