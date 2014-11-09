(function (angular) {
  'use strict';

  angular.module('deltron')
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/songs/:trackNumber', {
          templateUrl: 'scripts/songs-detail/songs-detail.html',
          controller: 'SongsDetailCtrl'
        });
    }]);
}(window.angular));
