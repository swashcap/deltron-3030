(function (angular) {
  'use strict';

  angular.module('deltron')
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'scripts/main/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          resolveTo: '/'
        });
    }]);
}(window.angular));
