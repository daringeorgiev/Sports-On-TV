var sportsCtrl = require('./controllers/SportsController'),
    usersCtrl = require('./controllers/UsersController');

module.exports = function(app) {
    'use strict';
    // Sports ===============================================
    app.get('/api/sports/today', sportsCtrl.getTodaySports);

    // Users =================================================
    app.post('/api/users/login', usersCtrl.userLogin);
    app.post('/api/users/register', usersCtrl.userRegister);
    app.get('/api/users/getAll', usersCtrl.getAllUsers);

    // Indes =================================================
    app.get('/', function(req, res) {
        // res.sendFile(__dirname + '/public/index.html');
        res.send('index file');
    });
};
