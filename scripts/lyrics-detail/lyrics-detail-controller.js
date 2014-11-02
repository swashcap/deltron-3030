(function (angular) {
  'use strict';

  angular.module('deltron')
    .controller('LyricsDetailCtrl', ['$scope', '$routeParams', 'Lyrics', function ($scope, $routeParams, Lyrics) {
        var lyricId = $routeParams.lyricId;

        $scope.lyric = Lyrics.show(lyricId);
    }]);
}(window.angular));