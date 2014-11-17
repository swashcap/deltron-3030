(function (angular) {
  'use strict';

  angular.module('deltron')
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/about', {
          templateUrl: 'scripts/about/about.html',
          controller: 'AboutCtrl'
        })
    }]);
}(window.angular));
