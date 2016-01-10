(function() {
  'use strict';
  app.controller('SportsController', ['$scope', '$ionicModal', '$timeout', 'sportsService', function($scope, $ionicModal, $timeout, sportsService) {
    var self = this;

    self.getTodaySports = function() {
      sportsService.getTodaySports()
        .then(function successCallback(response) {
          self.sports = response.data;
          console.log(self.sports);
        }, function errorCallback(response) {
          console.log(response);
        });
    };

    self.getTomorrowSports = function() {
      sportsService.getTomorrowSports()
        .then(function successCallback(response) {
          self.sports = response.data;
          console.log(self.sports);
        }, function errorCallback(response) {
          console.log(response);
        });
    };

    self.getDayAfterTomorrowSports = function() {
      sportsService.getDayAfterTomorrowSports()
        .then(function successCallback(response) {
          self.sports = response.data;
          console.log(self.sports);
        }, function errorCallback(response) {
          console.log(response);
        });
    };

    self.tvChannels = sportsService.getTvChannels();
    self.sportTypes = sportsService.getSportTypes();

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/types.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modalTypes = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tvChannels.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modalTvs = modal;
    });

    // Triggered in the login modal to close it
    self.closeModal = function() {
      $scope.modalTypes.hide();
      $scope.modalTvs.hide();
    };

    // Open the login modal
    self.showSportTypes = function() {
      $scope.modalTypes.show();
    };

    self.showTvs = function() {
      $scope.modalTvs.show();
    };

    // Perform the login action when the user submits the login form
    self.doTypeFilters = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };

    self.doTvFilters = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  }])
}())
