(function() {
  'use strict';
  app.factory('sportsService', ['$http', function($http) {
    var self = this,
      baseUrl = 'http://localhost:8080'

    function getTodaySports() {
      return $http.get(baseUrl + '/api/sports/getAll');
      // return $http.get(baseUrl + '/api/sports/getByDaysDiff' + '?days=' + 0);
    };

    function getTomorrowSports() {
      return $http.get(baseUrl + '/api/sports/getByDaysDiff' + '?days=' + 1)
    };

    function getDayAfterTomorrowSports() {
      return $http.get(baseUrl + '/api/sports/getByDaysDiff' + '?days=' + 2)
    };

    function getTvChannels() {
      // ToDo get tv chanels from server

      var tvChannels = [{
        'tvId': 1,
        'picture': 'bnt1',
        'name': 'БНТ',
        'selected': true
      }, {
        'tvId': 2,
        'picture': 'bntHd',
        'name': 'БНТ HD',
        'selected': true
      }, {
        'tvId': 3,
        'picture': 'btv',
        'name': 'BTV',
        'selected': false
      }, {
        'tvId': 4,
        'picture': 'btvAction',
        'name': 'BTV Action',
        'selected': false
      }, {
        'tvId': 5,
        'picture': 'ring',
        'name': 'Ring',
        'selected': true
      }, {
        'tvId': 6,
        'picture': 'nova',
        'name': 'Nova',
        'selected': false
      }, {
        'tvId': 7,
        'picture': 'novaSport',
        'name': 'Nova Sport',
        'selected': true
      }, {
        'tvId': 8,
        'picture': 'diema',
        'name': 'Diema',
        'picture': 'bnt1',
        'selected': true
      }, {
        'tvId': 9,
        'picture': 'diemaSport',
        'name': 'Diema Sport',
        'selected': true
      }, {
        'tvId': 10,
        'picture': 'diemaSport2',
        'name': 'Diema Sport 2',
        'selected': true
      }, {
        'tvId': 11,
        'picture': 'eurosport',
        'name': 'Eurosport',
        'selected': true
      }, {
        'tvId': 12,
        'picture': 'eurosport2',
        'name': 'Eurosport 2',
        'selected': true
      }, {
        'tvId': 13,
        'picture': 'tv7',
        'name': 'TV 7',
        'selected': true
      }, {
        'tvId': 14,
        'picture': 'ek',
        'name': 'ЕК',
        'selected': true
      }, {
        'tvId': 15,
        'picture': 'other',
        'name': 'Други',
        'selected': true
      }];
      return tvChannels
    }

    function getSportTypes() {
        // ToDo get sport types from server
        var sportTypes = [{
          'typeId': 1,
          'name': 'Футбол',
          'selected': true
        }, {
          'typeId': 2,
          'name': 'Отборни спортове',
          'selected': false
        }, {
          'typeId': 3,
          'name': 'Зимни спортове',
          'selected': false
        }, {
          'typeId': 4,
          'name': 'Мотосни спортове',
          'selected': true
        }, {
          'typeId': 5,
          'name': 'Други спортове',
          'selected': true
        }];

        return sportTypes
    }
    return {
      getTodaySports: getTodaySports,
      getTomorrowSports: getTomorrowSports,
      getDayAfterTomorrowSports: getDayAfterTomorrowSports,
      getTvChannels: getTvChannels,
      getSportTypes: getSportTypes
    };
  }]);
}())
