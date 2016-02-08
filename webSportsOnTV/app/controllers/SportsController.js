var Sport = require('../models/sport');
// TV = require('../models/tv');

module.exports = {
    getTodaySports: function(req, res) {
        'use strict';
        var today = new Date();
        var tomorrow = new Date();
        tomorrow = tomorrow.setDate(tomorrow.getDate() + 1);

        Sport.find({
            startTime: {
                "$gte": today,
                "$lt": tomorrow
            }
        }).sort({
            startTime: 'asc'
        }).exec(function(err, sports) {
            if (err) {
                throw err;
            }
            res.json(sports);
        });
    },

    getSportsByDaysDiff: function(req, res) {
        'use strict';
        var days = parseInt(req.query.days);
        if (isNaN(days) || days < 0 || days > 2) {
            res.status(501).send({
                message: 'Invalide day diff'
            });
            return;
        }

        var day = new Date(),
            secondDay = new Date();
        day.setDate(day.getDate() + days);
        secondDay.setDate(secondDay.getDate() + days + 1);

        // Check if objects are Date
        if ((Object.prototype.toString.call(day) !== '[object Date]') ||
            (Object.prototype.toString.call(secondDay) !== '[object Date]')) {
            res.status(500).send({
                message: 'Invalide object type'
            });
            return;
        }

        Sport.find({
            startTime: {
                "$gte": day,
                "$lt": secondDay
            }
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
        'use strict';
        Sport.find({})
            .populate({
                path: 'tvId',
                select: 'name picture'
            })
            .sort({
                startTime: 'asc'
            }).exec(function(err, sports) {
                if (err) {
                    throw err;
                }
                res.json(sports);
            });
    },

    getSportById: function(req, res) {
        'use strict';
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
        'use strict';
        Sport.find({
            sportName: req.body.sportName,
            startTime: new Date(req.body.startTime),
        }, function(err, data) {
            if (err) {
                res.send(err);
                throw err;
            }
            // Check if sport exists
            if (data.length) {
                return res.status(409)
                    .send('The sport already exist.');
            } else {
                // Check Date
                if (isNaN(new Date(req.body.startTime))) {
                    res.status(422).send({
                        message: 'Invalide date'
                    });
                    return;
                }
                Sport.create({
                    sportName: req.body.sportName,
                    startTime: new Date(req.body.startTime),
                    tvId: req.body.tvId,
                    sportType: req.body.sportType,
                    descr: req.body.descr
                }, function(err, sport) {
                    if (err) {
                        res.send(err);
                        throw err;
                    }
                    res.send(sport);
                });
            }
        });
    },

    updateSport: function(req, res) {
        'use strict';
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
            sport.tvId = req.body.tvId;
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
        'use strict';
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
