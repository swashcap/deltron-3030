(function (angular) {
  'use strict';

  angular.module('deltron')
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/lyrics', {
          templateUrl: 'scripts/lyrics-list/lyrics-list.html',
          controller: 'LyricsListCtrl'
        })
        .otherwise({
          redirectTo: '/lyrics'
        });
    }]);
}(window.angular));
