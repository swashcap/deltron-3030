(function (angular) {
  'use strict';

  angular.module('deltron')
    .service('Songs', function () {
      var songs = [{
        trackNumber: 1,
        title: 'State of the Nation',
        featuring: 'Damon Albarn',
        length: '0:25',
        link: 'https://www.youtube.com/watch?v=ctc7cqQoO7Q&list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 2,
        title: '3030',
        length: '7:29',
        link: 'http://youtu.be/Q7_jbluF0qo?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 3,
        title: 'The Fantabulous Rap Extravaganza',
        featuring: 'Prince Paul ',
        length: '0:21',
        link: 'http://youtu.be/gbT9sMzqKxo?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 4,
        title: 'Things You Can Do',
        length: '4:59',
        link: 'http://youtu.be/Pr9SQri2884?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 5,
        title: 'Positive Contact',
        length: '4:42',
        link: 'http://youtu.be/dSH8lAYn4XE?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 6,
        title: 'St. Catherine St.',
        featuring: 'Beans, Mr. Lif, P. Wingerter, Peanut Butter Wolf, Verna Brown',
        length: '0:43',
        link: 'http://youtu.be/SqwNcY96Yhs?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 7,
        title: 'Virus',
        length: '4:26',
        link: 'http://youtu.be/FrEdbKwivCI?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 8,
        title: 'Upgrade (A Brymar College Course)',
        length: '4:10',
        link: 'http://youtu.be/XzE7S3na3J0?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 9,
        title: 'New Coke',
        featuring: 'Mark Ramos-Nishita',
        length: '0:41',
        link: 'http://youtu.be/quaEoN0VAm4?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 10,
        title: 'Mastermind',
        length: '3:34',
        link: 'http://youtu.be/yf9OAFML_Eg?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 11,
        title: 'National Movie Review',
        featuring: 'Brad Roberts',
        length: '0:53',
        link: 'http://youtu.be/csrVmkBCkFw?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 12,
        title: 'Madness',
        length: '4:38',
        link: 'http://youtu.be/v_HW_AQiKkc?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 13,
        title: 'Meet Cleofis Randolph the Patriarch',
        featuring: 'MC Paul Barman',
        length: '0:36',
        link: 'http://youtu.be/2pMK-2n8G_Y?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 14,
        title: 'Time Keeps On Slipping',
        featuring: 'Damon Albarn',
        length: '4:59',
        link: 'http://youtu.be/q2jYGNtOqtE?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 15,
        title: 'The News (A Wholly Owned Subsidiary of Microsoft, Inc.)',
        featuring: 'Hafdís Huld',
        length: '0:49',
        link: 'http://youtu.be/IyJe68DA1No?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 16,
        title: 'Turbulence',
        featuring: 'Remixed by Mark Bell',
        length: '3:33',
        link: 'http://youtu.be/pAa0gOv8K1I?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 17,
        title: 'The Fantabulous Rap Extravaganza Part II',
        featuring: 'Prince Paul',
        length: '0:37',
        link: 'http://youtu.be/zMX5bmUTgWM?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 18,
        title: 'Battlesong',
        length: '4:07',
        link: 'http://youtu.be/XOwtX7Xx3pk?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 19,
        title: 'Love Story',
        length: '3:26',
        link: 'http://youtu.be/JZ0Hv3yJsGE?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 20,
        title: 'Memory Loss',
        featuring: 'Sean Lennon',
        length: '4:39',
        link: 'http://youtu.be/4k18VIqM764?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }, {
        trackNumber: 21,
        title: 'The Assmann 640 Speaks',
        featuring: 'Damon Albarn',
        length: '0:31',
        link: 'http://youtu.be/gUj396VEJ4k?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF'
      }];

      this.index = function () {
        return songs;
      };
      this.show = function (index) {
        return songs[index];
      };
      this.getByTrackNumber = function (trackNumber) {
        var selectedSong = songs.filter(function (song) {
          return song.trackNumber == trackNumber;
        });

        if (selectedSong.length) {
          return selectedSong.pop();
        }
      };
    });
}(window.angular))