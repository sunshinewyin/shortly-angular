angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  $scope.data = {};
  $scope.data.links = [];
  $scope.getLinks = function() {
    console.log("I GOT CONSOLED BY INIT");
    $http.get('/api/links')
      .success(function(data, status, headers, config){
        $scope.data.links = $scope.data.links.concat(data);
      }).
      error(function(data, status, headers, config){
        console.log("RAN INTO ERROR");

      });
    }
  // $scope.getLinks();
  // ^ that's for the tests
});
