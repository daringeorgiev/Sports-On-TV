var Sport = require('../models/sport');

module.exports = {
    getTodaySports: function(req, res) {
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
        var days = parseInt(req.query.days);
        if (isNaN(days) || days < 0 || days > 2) {
            res.status(501).send({
                message: 'Invalide day diff'
            });
            return;
        };

        var day = new Date(),
            secondDay = new Date();
        day = day.setDate(day.getDate() + days);
        secondDay = secondDay.setDate(secondDay.getDate() + days + 1);

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
            }
        })
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
