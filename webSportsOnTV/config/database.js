module.exports = {
    'url': 'mongodb://localhost/sports2'
};

var TV = require('../app/models/tv');

var tvChannels = [{
    'id': 1,
    'picture': 'bnt1',
    'name': 'БНТ',
}, {
    'id': 2,
    'picture': 'bntHd',
    'name': 'БНТ HD',
}, {
    'id': 3,
    'picture': 'btv',
    'name': 'BTV',
}, {
    'id': 4,
    'picture': 'btvAction',
    'name': 'BTV Action',
}, {
    'id': 5,
    'picture': 'ring',
    'name': 'Ring',
}, {
    'id': 6,
    'picture': 'nova',
    'name': 'Nova',
}, {
    'id': 7,
    'picture': 'novaSport',
    'name': 'Nova Sport',
}, {
    'id': 8,
    'picture': 'diema',
    'name': 'Diema',
}, {
    'id': 9,
    'picture': 'diemaSport',
    'name': 'Diema Sport',
}, {
    'id': 10,
    'picture': 'diemaSport2',
    'name': 'Diema Sport 2',
}, {
    'id': 11,
    'picture': 'eurosport',
    'name': 'Eurosport',
}, {
    'id': 12,
    'picture': 'eurosport2',
    'name': 'Eurosport 2',
}, {
    'id': 13,
    'picture': 'tv7',
    'name': 'TV 7',
}, {
    'id': 14,
    'picture': 'ek',
    'name': 'ЕК',
}, {
    'id': 15,
    'picture': 'other',
    'name': 'Други',
}];

//Create default team
TV.find({}, function(err, tvs) {
    'use strict';
    if (err) {
        throw err;
    }
    if (tvs.length === 0) {
        tvChannels.forEach(function(tv) {
            TV.create(tv,
                function(err, team) {
                    if (err) {
                        throw err;
                    }
                });
        });
        console.log("Default TV Chanels created");
    }
});
