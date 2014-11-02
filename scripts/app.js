(function (angular) {
  angular.module('deltron', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/lyrics', {
          templateUrl: 'lyrics-list.html',
          controller: 'LyricsListCtrl'
        })
        .when('/lyrics/:lyricId', {
          templateUrl: 'lyrics-detail.html',
          controller: 'LyricsDetailCtrl'
        })
        .otherwise({
          redirectTo: '/lyrics'
        });
    }]);

  angular.module('deltron')
    .service('Lyrics', [function () {
      /** @todo Attach this service to a back-end */

      var lyrics = [{
        id: 0,
        title: 'Lorem'
      }, {
        id: 1,
        title: 'Ipsum'
      }, {
        id: 2,
        title: 'Dolor'
      }];

      this.index = function () {
        return lyrics;
      };
      this.show = function (id) {
        for (var i = 0; i < lyrics.length; i++) {
          if (lyrics[i].id == id) {
            return lyrics[i];
            break;
          }
        }
      };
    }]);

  angular.module('deltron')
    .controller('LyricsListCtrl', ['$scope', 'Lyrics', function ($scope, Lyrics) {
      $scope.lyrics = Lyrics.index();
    }]);

  angular.module('deltron')
    .controller('LyricsDetailCtrl', ['$scope', '$routeParams', 'Lyrics', function ($scope, $routeParams, Lyrics) {
        var lyricId = $routeParams.lyricId;

        $scope.lyric = Lyrics.show(lyricId);
    }]);
}(window.angular));
