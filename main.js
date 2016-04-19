var app = angular.module('botalog', []);

app.filter('pretty', function() {
  return function(text) {
    text = text.replace("_", " ");

    return text.split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.substr(1)
      })
      .join(" ");
  }
});

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  var categories = [
    'games',
    'productivity',
    'on_demand',
    'fun',
    'money'
  ];

  $scope.chunkedCategories = chunk(categories, 3);
  $scope.categories = {};

  $scope.bots = [];

  $http.get('/api/v1/bots.json')
    .then(function(res) {
      $scope.bots = res.data.bots;
    });

  $scope.applicable = function(bot) {
  }
}]);

// A handy wrapper around the jQuery inArray function.
function inArray(element) { return $.inArray(element) !== -1; }

// A handy wrapper for chunking arrays
function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }

  return newArr;
}
