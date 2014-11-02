(function (angular) {
  'use strict';

  angular.module('deltron')
    .controller('LyricsListCtrl', ['$scope', 'Lyrics', function ($scope, Lyrics) {
      $scope.lyrics = Lyrics.index();
    }]);
}(window.angular));
