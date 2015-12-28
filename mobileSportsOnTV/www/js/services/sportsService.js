(function(){
    'use strict';
    app.factory('sportsService', ['$http', function($http){
        function getTodaySports() {
            return $http.get('/api/sports/getByDaysDiff' + '?days=' + 0)
        };

        function getTomorrowSports() {
            return $http.get('/api/sports/getByDaysDiff' + '?days=' + 1)
        };

        return {
            getTodaySports: getTodaySports,
            getTomorrowSports: getTomorrowSports
        };
    }]);
}())
