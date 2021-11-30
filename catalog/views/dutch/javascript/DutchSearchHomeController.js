(function () {
  goog.provide('abc');

  var module = angular.module('dutch_search_home_controller', []);

  module.controller('DutchSearchHomeController', ['$scope', '$location', '$log',
    function ($scope, $location, $log) {

      $scope.resetHomeParams = function () {
        $scope.searchHomeParams = {
          any: null,
          geometry: null,
          fast: 'index'
        };
      };

      $scope.mySlides = [
        { 'image': 'https://interfax.by/upload/iblock/d3f/d3f878c23adb8e5f18ede9addeacbd33.jpg' }
      ];

      $scope.performSearchHome = function () {
        var searchParams = angular.extend({}, $scope.searchHomeParams)
        if (!$scope.searchHomeParams.geometry) {
          delete searchParams.geometry;
        }

        $location.path('/search').search(searchParams);

      };


      $scope.$on('$locationChangeSuccess', function (event, newUrl) {
        var activeTab = $location.path().match(/^(\/[a-zA-Z0-9]*)($|\/.*)/)[1];
        // reset search paramameters
        if (activeTab === '/home') {
          $scope.resetHomeParams();
        }
      });

      // Init search params
      $scope.resetHomeParams();
    }]);


})();
