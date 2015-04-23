angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.link = {};
  $scope.addLink = function(link) {
    link = link || "";
    $http.post('/api/links', link);

  }
  // Your code here
});
