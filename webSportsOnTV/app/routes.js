var sportsCtrl = require('./controllers/SportsController'),
    usersCtrl = require('./controllers/UsersController'),
    auth = require('./auth');

module.exports = function(app) {
    'use strict';
    // Sports ===============================================
    app.get('/api/sports/today', sportsCtrl.getTodaySports);
    app.get('/api/sports/getByDaysDiff', sportsCtrl.getSportsByDaysDiff);


    app.get('/api/sports/getById', auth.isLoggedIn, sportsCtrl.getSportById);
    app.get('/api/sports/getAll', sportsCtrl.getAllSports);
    app.post('/api/sports/create', auth.isLoggedIn, sportsCtrl.createSport);
    app.put('/api/sports/update', auth.isLoggedIn, sportsCtrl.updateSport);
    app.post('/api/sports/delete', auth.isLoggedIn, sportsCtrl.deleteSport);

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
