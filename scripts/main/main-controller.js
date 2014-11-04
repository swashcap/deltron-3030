(function (angular) {
  'use strict';

  angular.module('deltron')
    .controller('MainCtrl', ['$scope', 'Lyrics', function ($scope, Lyrics) {
      $scope.lyric = Lyrics.getRandom();

      $scope.newLyric = function () {
        $scope.lyric = Lyrics.getRandom();
      };
    }]);
}(window.angular));
