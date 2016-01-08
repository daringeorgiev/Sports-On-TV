(function(){
    'use strict';
    app.factory('sportsService', ['$http', function($http){
        var self = this,
            baseUrl = 'http://localhost:8080'

        function getTodaySports() {
            return $http.get(baseUrl + '/api/sports/getAll');
            // return $http.get(baseUrl + '/api/sports/getByDaysDiff' + '?days=' + 0);
        };

        function getTomorrowSports() {
            return $http.get(baseUrl + '/api/sports/getByDaysDiff' + '?days=' + 1)
        };

        return {
            getTodaySports: getTodaySports,
            getTomorrowSports: getTomorrowSports
        };
    }]);
}())
