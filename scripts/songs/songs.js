(function (angular) {
  'use strict';

  angular.module('deltron')
    .service('Songs', function () {
      var songs = [{
        trackNumber: 1,
        title: 'State of the Nation',
        featuring: 'Damon Albarn',
        length: '0:25',
        links: {
          youtube: 'https://www.youtube.com/watch?v=ctc7cqQoO7Q&list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/4FQVCrUvtl4yRJd5bWpupn',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/State_of_the_Nation/'
        }
      }, {
        trackNumber: 2,
        title: '3030',
        length: '7:29',
        links: {
          youtube: 'http://youtu.be/Q7_jbluF0qo?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/39GBFwBe4GGk7i3yr3F46P',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/3030/'
        }
      }, {
        trackNumber: 3,
        title: 'The Fantabulous Rap Extravaganza',
        featuring: 'Prince Paul ',
        length: '0:21',
        links: {
          youtube: 'http://youtu.be/gbT9sMzqKxo?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/5JxxUeVajSGK4EREc9c39y',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/The_Fantabulous_Rap_Extravaganza/'
        }
      }, {
        trackNumber: 4,
        title: 'Things You Can Do',
        length: '4:59',
        links: {
          youtube: 'http://youtu.be/Pr9SQri2884?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/3LRUR23xkDdMSOPhTnLv2d',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Things_You_Can_Do/'
        }
      }, {
        trackNumber: 5,
        title: 'Positive Contact',
        length: '4:42',
        links: {
          youtube: 'http://youtu.be/dSH8lAYn4XE?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/6mKai3TB6wtorWTX47wHUt',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Positive_Contact/'
        }
      }, {
        trackNumber: 6,
        title: 'St. Catherine St.',
        featuring: 'Beans, Mr. Lif, P. Wingerter, Peanut Butter Wolf, Verna Brown',
        length: '0:43',
        links: {
          youtube: 'http://youtu.be/SqwNcY96Yhs?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/0lLgpQm6oUhditOPXxD1VG',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/St._Catherine_St./'
        }
      }, {
        trackNumber: 7,
        title: 'Virus',
        length: '4:26',
        links: {
          youtube: 'http://youtu.be/FrEdbKwivCI?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/4CpWJkSodVFE3HSylu7ajJ',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Virus/'
        }
      }, {
        trackNumber: 8,
        title: 'Upgrade (A Brymar College Course)',
        length: '4:10',
        links: {
          youtube: 'http://youtu.be/XzE7S3na3J0?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/1vQUA54snqF8dNZsuxVPTo',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Upgrade_(A_Baymar_College_College)/'
        }
      }, {
        trackNumber: 9,
        title: 'New Coke',
        featuring: 'Mark Ramos-Nishita',
        length: '0:41',
        links: {
          youtube: 'http://youtu.be/quaEoN0VAm4?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/6tQUl1w5qZifjObjHUxnX5',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/New_Coke/'
        }
      }, {
        trackNumber: 10,
        title: 'Mastermind',
        length: '3:34',
        links: {
          youtube: 'http://youtu.be/yf9OAFML_Eg?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/0uMn8WKu3qtQLaUyal1bsz',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Mastermind/'
        }
      }, {
        trackNumber: 11,
        title: 'National Movie Review',
        featuring: 'Brad Roberts',
        length: '0:53',
        links: {
          youtube: 'http://youtu.be/csrVmkBCkFw?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/26YXtbip8lII51zOhT1aGA',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/National_Movie_Review/'
        }
      }, {
        trackNumber: 12,
        title: 'Madness',
        length: '4:38',
        links: {
          youtube: 'http://youtu.be/v_HW_AQiKkc?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/2Mh3mh3aKeAgLKaUyDQZbv',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Madness/'
        }
      }, {
        trackNumber: 13,
        title: 'Meet Cleofis Randolph the Patriarch',
        featuring: 'MC Paul Barman',
        length: '0:36',
        links: {
          youtube: 'http://youtu.be/2pMK-2n8G_Y?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/1Om3iM04oZdOZVBdjrtx79',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Meet_Cleofis_Randolph_the_Patriarch/'
        }
      }, {
        trackNumber: 14,
        title: 'Time Keeps On Slipping',
        featuring: 'Damon Albarn',
        length: '4:59',
        links: {
          youtube: 'http://youtu.be/q2jYGNtOqtE?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/4a7iNsBx9sIDcqv0AdmFKn',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Time_Keeps_on_Slipping/'
        }
      }, {
        trackNumber: 15,
        title: 'The News (A Wholly Owned Subsidiary of Microsoft, Inc.)',
        featuring: 'Hafdís Huld',
        length: '0:49',
        links: {
          youtube: 'http://youtu.be/IyJe68DA1No?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/4x8stzSz2sTURPIjZOkQ41',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/The_News_(A_Wholly_Owned_Subsidiary_of_Microsoft_Inc.)/'
        }
      }, {
        trackNumber: 16,
        title: 'Turbulence',
        featuring: 'Remixed by Mark Bell',
        length: '3:33',
        links: {
          youtube: 'http://youtu.be/pAa0gOv8K1I?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/5NEmFuX17Xw7YVFGOKu5nx',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Turbulence_(Remix)/'
        }
      }, {
        trackNumber: 17,
        title: 'The Fantabulous Rap Extravaganza Part II',
        featuring: 'Prince Paul',
        length: '0:37',
        links: {
          youtube: 'http://youtu.be/zMX5bmUTgWM?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/5tL8QHozba3XRrINsbY66Z',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/The_Fantabulous_Rap_Extravaganza_Part_II/'
        }
      }, {
        trackNumber: 18,
        title: 'Battlesong',
        length: '4:07',
        links: {
          youtube: 'http://youtu.be/XOwtX7Xx3pk?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/23t86Wo1tL5Xabo9aDKo9A',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Battlesong/'
        }
      }, {
        trackNumber: 19,
        title: 'Love Story',
        length: '3:26',
        links: {
          youtube: 'http://youtu.be/JZ0Hv3yJsGE?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/5wUtxANidoc8CVyhXgjMUQ',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Love_Story/'
        }
      }, {
        trackNumber: 20,
        title: 'Memory Loss',
        featuring: 'Sean Lennon',
        length: '4:39',
        links: {
          youtube: 'http://youtu.be/4k18VIqM764?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/7lqEuhNhBbpKzgqZEA9y3z',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/Memory_Loss/'
        }
      }, {
        trackNumber: 21,
        title: 'The Assmann 640 Speaks',
        featuring: 'Damon Albarn',
        length: '0:31',
        links: {
          youtube: 'http://youtu.be/gUj396VEJ4k?list=PL47Hb7ZBLHrkjL5386dfHapRNoSn-XWwF',
          spotify: 'https://play.spotify.com/track/65vdGqGnxUoMrlWPwjC3LF',
          rdio: 'http://www.rdio.com/artist/Deltron/album/Deltron_3030/track/The_Assman_640_Speaks/'
        }
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