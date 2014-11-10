(function (angular) {
  'use strict';

  angular.module('deltron')
    .controller('LyricsDetailCtrl', ['$scope', '$routeParams', 'Lyrics', 'Songs', function ($scope, $routeParams, Lyrics, Songs) {
        var lyricId = $routeParams.lyricId;

        $scope.lyric = Lyrics.show(lyricId);
        $scope.song = Songs.getByTrackNumber($scope.lyric.trackNumber);
    }]);
}(window.angular));