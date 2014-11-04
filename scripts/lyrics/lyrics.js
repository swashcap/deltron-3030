(function (angular) {
  'use strict';

  angular.module('deltron')
    .service('Lyrics', [function () {
      /** @todo Attach this service to a back-end */

      var lyrics = [{
        id: 0,
        title: 'Lorem',
        song: 1
      }, {
        id: 1,
        title: 'Ipsum',
        song: 10
      }, {
        id: 2,
        title: 'Dolor',
        song: 4
      }, {
        id: 3,
        title: 'Sit Amet',
        song: 10
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
    }]);
}(window.angular));
