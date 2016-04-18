var app = angular.module('botalog', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.bots = [];

  $http.get('/api/v1/bots.json')
    .then(function(res) {
      $scope.bots = res.data.bots;
    });
}]);
