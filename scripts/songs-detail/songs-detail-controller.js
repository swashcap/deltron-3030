(function (angular) {
  'use strict';

  angular.module('deltron')
    .controller('SongsDetailCtrl', ['$scope', '$routeParams', 'Songs', 'Lyrics', function ($scope, $routeParams, Songs, Lyrics) {
      var trackNumber = $routeParams.trackNumber;

      $scope.song = Songs.getByTrackNumber(trackNumber);
      $scope.lyrics = Lyrics.getByTrackNumber(trackNumber);
    }]);
}(window.angular));
