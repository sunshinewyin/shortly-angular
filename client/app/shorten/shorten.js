angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.link.url = "";

  $scope.addLink = new Links.addLink;
  console.log($scope.addLink);
  // Your code here
});
