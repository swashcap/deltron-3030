(function (angular) {
  'use strict';

  angular.module('deltron')
    .service('Lyrics', [function () {
      /** @todo Attach this service to a back-end */

      var lyrics = [{
        id: 0,
        title: 'Proin vestibulum nunc in metus cursus at aliquam neque mollis.',
        trackNumber: 1
      }, {
        id: 1,
        title: ' Curabitur hendrerit porta nibh, a dignissim diam tempor eu.<br>Nam id erat dictum velit facilisis tincidunt.<br>Etiam auctor, felis et auctor blandit, eros quam aliquam orci, ac mollis neque dui vitae arcu.',
        trackNumber: 10
      }, {
        id: 2,
        title: 'Fusce fringilla lectus ut ipsum condimentum a egestas odio pretium. Fusce vehicula erat a eros fermentum vestibulum.<br>In a nisi eu dolor adipiscing facilisis sed et est. Suspendisse potenti.',
        trackNumber: 4
      }, {
        id: 3,
        title: 'Praesent nec nulla elit, sit amet molestie metus.',
        trackNumber: 10
      }, {
        id: 4,
        title: 'Curabitur consectetur, ipsum sit amet fringilla imperdiet<br>nisi nulla pharetra nunc, et consectetur nulla nisl a dolor.',
        trackNumber: 4
      }, {
        id: 5,
        title:  'Phasellus suscipit ipsum nec purus luctus<br>ut euismod nisi dapibus.<br>Vestibulum eget metus in lorem dignissim<br>condimentum mattis non lorem.',
        trackNumber: 4
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
