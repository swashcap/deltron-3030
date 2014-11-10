(function (angular) {
  'use strict';

  angular.module('deltron')
    .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
      /**
       * @{@link http://stackoverflow.com/a/12306136}
       */
      $scope.isActive = function (route) {
        var routePattern = new RegExp('^' + route +  '$', 'gi');

        return routePattern.test($location.path());
      };
    }]);
}(window.angular));
