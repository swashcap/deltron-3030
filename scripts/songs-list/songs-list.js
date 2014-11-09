(function (angular) {
  'use strict';

  angular.module('deltron')
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/songs', {
          templateUrl: 'scripts/songs-list/songs-list.html',
          controller: 'SongsListCtrl'
        });
    }]);
}(window.angular));