var sportsCtrl = require('./controllers/SportsController');

module.exports = function (app) {
    'use strict';
    app.get('/api/sports/today', sportsCtrl.getTodaySports);
    app.get('/', function (req, res) {
        // res.sendFile(__dirname + '/public/index.html');
        res.send('index file');
    });
};
