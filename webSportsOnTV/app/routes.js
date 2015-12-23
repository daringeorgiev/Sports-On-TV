(function() {
    'use strict';
    var sportsCtrl = require('./controllers/SportsController'),
        usersCtrl = require('./controllers/UsersController'),
        auth = require('./auth');

    module.exports = function(app) {
        // Sports ===============================================
        app.get('/api/sports/today', sportsCtrl.getTodaySports);
        app.post('/api/sports/create', sportsCtrl.createSport);

        // Users =================================================
        app.post('/api/users/login', usersCtrl.userLogin);
        app.post('/api/users/register', usersCtrl.userRegister);
        app.get('/api/users/getAll', usersCtrl.getAllUsers);

        // Index =================================================
        app.get('/', function(req, res) {
            // res.sendFile(__dirname + '/public/index.html');
            res.send('index file');
        });
    };
}());
