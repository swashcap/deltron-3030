(function (angular) {
  'use strict';

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
      }, {
        id: 3,
        title: 'Sit Amet'
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
}(window.angular));
