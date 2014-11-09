(function (angular) {
  'use strict';

  angular.module('deltron')
    .controller('MainCtrl', ['$scope', 'Lyrics', 'Songs', function ($scope, Lyrics, Songs) {
      var getSong = function () {
        if ($scope.lyric && 'trackNumber' in $scope.lyric) {
          return Songs.getByTrackNumber($scope.lyric.trackNumber);
        }
      };
      var newLyric = function () {
        $scope.lyric = Lyrics.getRandom();
        $scope.song = getSong();
      };

      $scope.newLyric = newLyric;

      // Initialize controller
      newLyric();
    }]);
}(window.angular));
