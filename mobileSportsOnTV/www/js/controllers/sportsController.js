(function(){
    'use strict';
    app.controller('SportsController', ['sportsService', function(sportsService){
        var self = this;

        self.getTodaySports = function(){
            sportsService.getTodaySports()
                .then(function successCallback(response) {
                    self.todaySports = response;
                    console.log(self.todaySports);
                // this callback will be called asynchronously
                // when the response is available
                }, function errorCallback(response) {
                    console.log(response);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                });
        };
    }])
}())
