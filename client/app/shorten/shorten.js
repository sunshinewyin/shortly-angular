angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.link = {};
  $scope.link.url = "";
  $scope.addLink = function(link) {
    console.log(link)
    $http.post('/api/links', JSON.stringify(link));
  }
  // Your code here
});
