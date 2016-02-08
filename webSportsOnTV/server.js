// set up =======================================
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    database = require('./config/database'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cors = require('cors'),
    configPort = 8080;

// configuration ================================
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(methodOverride());
app.use(cors());

//routes ========================================
require('./app/routes')(app);

// start app ====================================
app.listen(configPort);
console.log('Server start on: ' + configPort + ' port!');
