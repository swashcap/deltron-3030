(function (angular) {
  'use strict';

  angular.module('deltron')
    .controller('SongsListCtrl', ['$scope', 'Songs', function ($scope, Songs) {
      $scope.songs = Songs.index();
    }]);
}(window.angular));
