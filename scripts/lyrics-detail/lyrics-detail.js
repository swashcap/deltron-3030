(function (angular) {
  'use strict';

  angular.module('deltron')
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/lyrics/:lyricId', {
          templateUrl: 'scripts/lyrics-detail/lyrics-detail.html',
          controller: 'LyricsDetailCtrl'
        });
    }]);
}(window.angular));
