(function() {
  'use strict';
  app.controller('SportsController', ['$scope', '$ionicModal', '$timeout', 'sportsService', function($scope, $ionicModal, $timeout, sportsService) {
    var self = this;

    self.getTodaySports = function() {
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

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/types.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modalTypes = modal;
    });

    $ionicModal.fromTemplateUrl('templates/tvs.html', {
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

    self.sportTypes = [{
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
      'selected': true
    }, {
      'typeId': 4,
      'name': 'Мотосни спортове',
      'selected': true
    }, {
      'typeId': 5,
      'name': 'Други спортове',
      'selected': true
    }];

    self.tvs = [{
      'tvId': 1,
      'pic': 'bnt1',
      'name': 'БНТ',
      'selected': true
    }, {
      'tvId': 2,
      'pic': 'bntHd',
      'name': 'БНТ HD',
      'selected': true
    }, {
      'tvId': 3,
      'pic': 'btv',
      'name': 'BTV',
      'selected': false
    }, {
      'tvId': 4,
      'pic': 'btvAction',
      'name': 'BTV Action',
      'selected': false
    }, {
      'tvId': 5,
      'pic': 'ring',
      'name': 'Ring',
      'selected': true
    }, {
      'tvId': 6,
      'pic': 'nova',
      'name': 'Nova',
      'selected': false
    }, {
      'tvId': 7,
      'pic': 'novaSport',
      'name': 'Nova Sport',
      'selected': true
    }, {
      'tvId': 8,
      'pic': 'diema',
      'name': 'Diema',
      'pic': 'bnt1',
      'selected': true
    }, {
      'tvId': 9,
      'pic': 'diemaSport',
      'name': 'Diema Sport',
      'selected': true
    }, {
      'tvId': 10,
      'pic': 'diemaSport2',
      'name': 'Diema Sport 2',
      'selected': true
    }, {
      'tvId': 11,
      'pic': 'eurosport',
      'name': 'Eurosport',
      'selected': true
    }, {
      'tvId': 12,
      'pic': 'eurosport2',
      'name': 'Eurosport 2',
      'selected': true
    }, {
      'tvId': 13,
      'pic': 'tv7',
      'name': 'TV 7',
      'selected': true
    }, {
      'tvId': 14,
      'pic': 'ek',
      'name': 'ЕК',
      'selected': true
    }, {
      'tvId': 15,
      'pic': 'other',
      'name': 'Други',
      'selected': true
    }];



    self.sports = [{
      "_id": "5679f46e72407444219c4789",
      "sportName": "Левски - Цска",
      "startTime": "1970-01-01T11:20:00.000Z",
      "tv": "Диема +",
      'tvId': 12,
      "sportType": "футбол",
      "descr": "Приятелкси мач",
      "__v": 0
    }, {
      "_id": "5679f521fc724a68296b9d02",
      "sportName": "Левски - Цска1",
      "startTime": "1970-01-01T10:50:00.000Z",
      "tv": "Нова",
      'tvId': 12,
      "sportType": "футбол",
      "descr": "Приятелкси мач",
      "__v": 0
    }, {
      "_id": "5679f522fc724a68296b9d03",
      "sportName": "Левски - Цска2",
      "startTime": "1970-01-01T00:00:00.000Z",
      "tv": "Ring",
      'tvId': 5,
      "sportType": "футбол",
      "descr": "Приятелкси мач",
      "__v": 0
    }, {
      "_id": "5679f524fc724a68296b9d04",
      "sportName": "Левски - Цска3",
      "startTime": "1970-01-01T08:40:00.000Z",
      "tv": "БТВ",
      'tvId': 3,
      "sportType": "футбол",
      "descr": "Приятелкси мач",
      "__v": 0
    }, {
      "_id": "5679f524fc724a68296b9d05",
      "sportName": "Левски - Цска4",
      "startTime": "1970-01-01T00:00:00.000Z",
      "tv": "Btv",
      "sportType": "футбол",
      "descr": "Приятелкси мач",
      "__v": 0
    }, {
      "_id": "5679f525fc724a68296b9d06",
      "sportName": "Левски - Цска5",
      "startTime": "1970-01-01T00:00:00.000Z",
      "tv": "Диема СПорт 2",
      'tvId': 2,
      "sportType": "футбол",
      "descr": "Приятелкси мач",
      "__v": 0
    }, {
      "_id": "5679f56576132b7809d46352",
      "sportName": "Левски - Цска6",
      "startTime": "1970-01-01T00:00:00.000Z",
      "tv": "БНТ",
      'tvId': 1,
      "sportType": "футбол",
      "descr": "Приятелкси мач",
      "__v": 0
    }];
  }])
}())
