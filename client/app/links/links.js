angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http, $filter) {
  $scope.data = {};
  $scope.data.masterLinks = [];
  $scope.searchTerm = "";

  $scope.getLinks = function() {
    console.log("I GOT CONSOLED BY INIT");
    $http.get('/api/links')
      .success(function(data, status, headers, config){
        $scope.data.masterLinks = $scope.data.masterLinks.concat(data);
      }).
      error(function(data, status, headers, config){
        console.log("RAN INTO ERROR");

      });
  }
  // below: was trying to do it in javascript but decided to do it in html
  // if ($scope.data.searchTerm !== "") {
  //   console.log("recomputing filteredLinks")
  //   $scope.data.filteredLinks = $scope.data.masterLinks;
  // } else {
  //   console.log("recomputing filteredLinks")
  //   $scope.data.filteredLinks = $filter($scope.data.masterLinks, $scope.searchTerm);
  // }

  // $scope.getLinks();
  // ^ that's for the tests
});
