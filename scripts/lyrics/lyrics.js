(function (angular) {
  'use strict';

  angular.module('deltron')
    .service('Lyrics', [function () {
      /** @todo Attach this service to a back-end */

      var lyrics = [{
        id: 0,
        title: 'Lorem',
        trackNumber: 1
      }, {
        id: 1,
        title: 'Ipsum',
        trackNumber: 10
      }, {
        id: 2,
        title: 'Dolor',
        trackNumber: 4
      }, {
        id: 3,
        title: 'Sit Amet',
        trackNumber: 10
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
      this.getRandom = function () {
        return lyrics[Math.floor(Math.random() * lyrics.length)];
      };
      this.getByTrackNumber = function (trackNumber) {
        return lyrics.filter(function (lyric) {
          return lyric.trackNumber == trackNumber;
        });
      };
    }]);
}(window.angular));
