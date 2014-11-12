(function (angular) {
  'use strict';

  angular.module('deltron')
    .service('Lyrics', [function () {
      /** @todo Attach this service to a back-end */

      var lyrics = [{
        id: 0,
        content: 'It’s the year thirty-thirty.',
        trackNumber: 1
      }, {
        id: 1,
        content: 'We find ourselves reflecting. Finding out that in fact we came back. We were always coming back.',
        trackNumber: 1
      }, {
        id: 2,
        content: 'Yo, it’s three thousand thirty',
        trackNumber: 2
      }, {
        id: 3,
        content: 'I’ll raid the grave<br>Anything it takes to save the day',
        trackNumber: 2
      }, {
        id: 4,
        content: 'Use my rappin’ so you can all see the hazards',
        trackNumber: 2
      }, {
        id: 5,
        content: 'We high-tech archeologists searchin’ for knick-knacks',
        trackNumber: 2
      }, {
        id: 6,
        content: 'I used to be a Mech solder but didn’t respect orders<br>Had to step forward<br>Tell them, “this ain’t for us”',
        trackNumber: 2
      }, {
        id: 7,
        content: 'Yo, it’s three thousand thirty<br>I want y’all to meet Deltron 0 and Automator',
        trackNumber: 2
      }, {
        id: 8,
        content: 'They said my sentence was equivalent to murder<br>Just another hurdle<br>I bounce through a portal',
        trackNumber: 2
      }, {
        id: 9,
        content: 'My ears morph to receptors that catch a<br>Every word about gravity control and the families they hold for handsome randsome',
        trackNumber: 2
      }, {
        id: 10,
        content: 'On the run with a handgun',
        trackNumber: 2
      }, {
        id: 11,
        content: '<em>Fuck dying</em><br>I hijack a mech',
        trackNumber: 2
      }, {
        id: 12,
        content: 'All citizens empowered with rhythm<br>We keep the funk alive by talking with idioms',
        trackNumber: 2
      }, {
        id: 13,
        content: 'Telepathic mind that takes its greatness from the Matrix',
        trackNumber: 2
      }, {
        id: 14,
        content: 'Cannibals eat human brains for dessert<br>Buried in the deep dirt, mobility inert',
        trackNumber: 2
      }, {
        id: 15,
        content: 'I insert these code for the cataclysm',
        trackNumber: 2
      }, {
        id: 16,
        content: 'Its going to be <em>interspectacular</em><br><em>Fantabulous</em>',
        trackNumber: 3
      }, {
        id: 17,
        content: 'Its one of those things where machine versus man. Man versus woman. Woman versus your mother.',
        trackNumber: 3
      }, {
        id: 18,
        content: 'Running amuck with technology with no apology<br>Shout it out to my colony with third eye physiology',
        trackNumber: 4
      }, {
        id: 19,
        content: 'With nuclear rockets they glued to your optics with sci-fi<br>Unsettling man and metal blends',
        trackNumber: 4
      }, {
        id: 20,
        content: 'Chillin’ with the mole man and his whole fam’',
        trackNumber: 4
      }, {
        id: 21,
        content: 'Never let a computer tell me shit!',
        trackNumber: 4
      }, {
        id: 22,
        content: 'Then I flip the bio-techs right into the wireless<br>Your third eye is hit with psoriasis',
        trackNumber: 4
      }, {
        id: 23,
        content: 'The flexibility of my engine is never-failing',
        trackNumber: 4
      }, {
        id: 24,
        content: 'Use my hydrometer to see how warm you are<br>Watch me form a star',
        trackNumber: 4
      }, {
        id: 25,
        content: 'Spit infinity<br>Hitting energies too dope for our planet',
        trackNumber: 4
      }, {
        id: 26,
        content: 'My science is eerier',
        trackNumber: 4
      }, {
        id: 27,
        content: 'Defies excepted methods<br>Development most unique<br>Paralyze central nervous when you close to me',
        trackNumber: 4
      }, {
        id: 28,
        content: 'My pistons glisten ultra high performance<br>Inside your private quarters where I fry your components',
        trackNumber: 4
      }, {
        id: 29,
        content: 'Hit ya with nerve gas, absurd blasts',
        trackNumber: 5
      }, {
        id: 30,
        content: 'Super slueth a new race<br>Mad creator, savage nature',
        trackNumber: 5
      }, {
        id: 31,
        content: 'World wide web, the ebb and flow',
        trackNumber: 5
      }, {
        id: 32,
        content: 'Asteroid surfing, castor-oil burping<br>The darkest side of humanity animated',
        trackNumber: 5
      }, {
        id: 33,
        content: 'Many MCs cruise low Earth orbit<br>Easier for me to use my search warrant',
        trackNumber: 5
      }, {
        id: 34,
        content: 'My galaxy is gorgeous<br>Quantum jump, I’m right at your doorstep',
        trackNumber: 5
      }, {
        id: 35,
        content: 'Tamper with napalm<br>I want y’all to stay calm…<br>Alien annihilation',
        trackNumber: 5
      }, {
        id: 36,
        content: 'I rise like helium, you’re falling rapidly<br>Trapped in apathy, while I track your speed',
        trackNumber: 5
      }, {
        id: 37,
        content: 'Implications of information<br>Information and entertainment',
        trackNumber: 5
      }, {
        id: 38,
        content: 'I’m like a Gamera to amateurs<br>Hit ‘em with a cannonball',
        trackNumber: 5
      }, {
        id: 39,
        content: 'Don’t panic, I landed on planet Mercury<br>Gave it atmosphere<br>Set up my headquarters<br>I’ll never get captured here',
        trackNumber: 5
      }, {
        id: 40,
        content: 'I hold a comet in bondage with my dominance',
        trackNumber: 5
      }, {
        id: 41,
        content: 'Bounce through the Milky Way<br>Not many MCs feel this way',
        trackNumber: 5
      }, {
        id: 42,
        content: 'World War two, three, four, ya knawimean?',
        trackNumber: 6
      }, {
        id: 43,
        content: 'Global controls with have to be imposed and a world-governing body will be created to enforce them.<br>Crisis precipitate change.',
        trackNumber: 7
      }, {
        id: 44,
        content: 'I wanna devise a virus<br>To bring dire straits to your environment',
        trackNumber: 7
      }, {
        id: 45,
        content: 'Crushin’ corporations with a mild touch<br>Trash your whole computer system and revert you to papyrus',
        trackNumber: 7
      }, {
        id: 46,
        content: 'I wanna make a super virus<br>Strong enough to cause blackouts in every single metropolis<br>‘Cause they don’t want to unify us<br>So, fuck it, total anarchy and can’t nobody stop us',
        trackNumber: 7
      }, {
        id: 47,
        content: 'You see, late in the evening<br>Fucked up on my computer and my mind starts roaming<br>I create like a heathen<br>The first cycles of this virus I can send through a modem',
        trackNumber: 7
      }, {
        id: 48,
        content: 'Society things their safe when<br><em>Bingo</em>, hard drive crashes from the rending',
        trackNumber: 7
      }, {
        id: 49,
        content: 'A lot of hackers tried viruses before<br>Vaporizing text like so much whiteout',
        trackNumber: 7
      }, {
        id: 50,
        content: 'I want it where file replication is a chore<br>Lights out, shut down entire White House',
        trackNumber: 7
      }, {
        id: 51,
        content: 'I wanna develop a super virus<br>Better by far than that old Y2K',
        trackNumber: 7
      }, {
        id: 52,
        content: 'Terminals, burn ‘em all',
        trackNumber: 7
      }, {
        id: 53,
        content: 'Everybody loot the stores, get your canned goods<br>Even space stations are havin’ a hard time (damn)',
        trackNumber: 7
      }, {
        id: 54,
        content: 'Human rights come in a hundredth place<br>Mass production has always been number one',
        trackNumber: 7
      }, {
        id: 55,
        content: 'Upgrade your gray matter, ‘cause one day it may matter',
        trackNumber: 8
      }, {
        id: 56,
        content: 'Time for you to upgrade,<br>Fuck save! Time to load.',
        trackNumber: 8
      }, {
        id: 57,
        content: 'I school you on the art of how to texture map',
        trackNumber: 8
      }, {
        id: 58,
        content: 'Get your act together<br>My style is mega',
        trackNumber: 8
      }, {
        id: 59,
        content: 'My programming language is the strangest to come to grips with',
        trackNumber: 8
      }, {
        id: 60,
        content: 'A new machine<br>Real artists are few between<br>You better lube your screen',
        trackNumber: 8
      }, {
        id: 61,
        content: 'Such as the G-bomb<br>Cyborg with three arms',
        trackNumber: 8
      }, {
        id: 62,
        content: 'Translate the ancient language with a brain dish',
        trackNumber: 8
      }, {
        id: 63,
        content: 'When are they going to start showing those Mr. T reruns? I used to love that guy.',
        trackNumber: 9
      }, {
        id: 64,
        content: 'All that base is gonna break my ears',
        trackNumber: 9
      }, {
        id: 65,
        content: 'Who fuses the music with no illusions, producing the blueprints?<br>Clueless?<br>Automator, defies the laws of nature<br>Electronic monolith, throw a jam upon the disk',
        trackNumber: 10
      }, {
        id: 66,
        content: 'I applied a flow cannon with combos so slammin’<br>Atomically reconstruct the whole canvas',
        trackNumber: 10
      }, {
        id: 67,
        content: 'Yeah, Latin, patent, you can call it a gift',
        trackNumber: 10
      }, {
        id: 68,
        content: 'Psyonically, bionically forget how you feel<br>Especially formulated the rest of you fornicated',
        trackNumber: 10
      }, {
        id: 69,
        content: 'Watch Automater draw a laser of a higher intensity<br>And instantly, miss a beat, create a symphony',
        trackNumber: 10
      }, {
        id: 70,
        content: 'We give it three thumbs up',
        trackNumber: 11
      }, {
        id: 71,
        content: 'I must appeal to you people with your faculties<br>‘Cause everyone else is gonna laugh at me',
        trackNumber: 12
      }, {
        id: 72,
        content: 'The universe is one and I see what rap can be<br>Glorious, put in the Smithsonian on podiums for holy hymns',
        trackNumber: 12
      }, {
        id: 73,
        content: 'They say we not compatible like dears and cows and owls<br>So many rules and regulations say you’re not allowed',
        trackNumber: 12
      }, {
        id: 74,
        content: 'Why should I hate you, we ain’t that different<br>We may act different in some ways<br>But we still grouped together like a fuckin’ survey',
        trackNumber: 12
      }, {
        id: 75,
        content: 'Sell your Marlboros and car insurance<br>Put niggas on the moon and can’t pay for their burdens',
        trackNumber: 12
      }, {
        id: 76,
        content: 'But music is there without you or me<br>We just manipulate<br>For better or worse<br>So let it situate',
        trackNumber: 12
      }, {
        id: 77,
        content: 'You may have this Maglite, it survived the apocalypse.<br>And for the fragile force of an agile horse here’s a handful of very special chocolate chips.',
        trackNumber: 13
      }, {
        id: 78,
        content: 'I send men with torches to rend your fortress<br>And in the process radiate your optics',
        trackNumber: 14
      }, {
        id: 79,
        content: 'Let my lasers clap at you',
        trackNumber: 14
      }, {
        id: 80,
        content: 'Whatchu laughin’ ‘bout imitations<br>Getting penetrated in 3D simulations',
        trackNumber: 14
      }, {
        id: 81,
        content: 'I remake my universe every time I use a verse to<br>Fulfill my destiny, MCs rest in peace',
        trackNumber: 14
      }, {
        id: 82,
        content: 'MCs siphon my likeness<br>Biting my insights like five enchiladas',
        trackNumber: 14
      }, {
        id: 83,
        content: 'Mathematical astro, grapple flow<br>Pterodactyl<br>Very factual crash course<br>Last resort',
        trackNumber: 14
      }, {
        id: 84,
        content: 'Open the air shafts I’ll be there fast<br>With spare raps to tear back their mass',
        trackNumber: 14
      }, {
        id: 85,
        content: 'Brand the planet like a band of bandits<br>Who man the cannons and guns with random',
        trackNumber: 14
      }, {
        id: 86,
        content: 'Alien life form mail in a pipe bomb',
        trackNumber: 14
      }, {
        id: 87,
        content: 'Fuck the system<br>Non-conformist humans walk around because of their ordinance<br>Just ornaments',
        trackNumber: 16
      }, {
        id: 88,
        content: 'I’m shit-faced<br>Which way, but loose<br>In a hover craft<br>Not no bubble bath, turbo boost',
        trackNumber: 16
      }, {
        id: 89,
        content: 'Fuck Earth<br>I wanna live on Mars<br>So I’m closer to the stars<br>And farther away from dumb civilization',
        trackNumber: 16
      }, {
        id: 90,
        content: 'The online is touchin’ your head<br>With brain washing with propaganda about your fearless leader<br>Who got 200 body guards so you can’t touch him either',
        trackNumber: 16
      }, {
        id: 91,
        content: 'I steal computer disc files, drink water from drains',
        trackNumber: 16
      }, {
        id: 92,
        content: 'Missile launches haunt you in your nightmares<br>It ain’t quite fair',
        trackNumber: 16
      }, {
        id: 93,
        content: 'Aliens landed, said our planet wasn’t worth invading<br>‘Cause all the natural resources are fading',
        trackNumber: 16
      }, {
        id: 94,
        content: 'Make sure you see the intergalactic rap battle. Three thousand thirty.',
        trackNumber: 17
      }, {
        id: 95,
        content: 'Interplanetary adversaries battling for supremacy<br>Sounds like a good way to build up my infamy',
        trackNumber: 18
      }, {
        id: 96,
        content: 'Next stop, Pluto, to rock these new flows',
        trackNumber: 18
      }, {
        id: 97,
        content: 'Atmosphere: methane,<br>Be strategic like a chess game<br>Leave this MC with chest pains',
        trackNumber: 18
      }, {
        id: 98,
        content: 'It took out the sound man, I’m taking a pounding<br>I bust out an acapella that’s astounding',
        trackNumber: 18
      }, {
        id: 99,
        content: 'I just won ten grand in the galactic rhyme federation championship<br>So I’m lampin’ a bit',
        trackNumber: 19
      }, {
        id: 100,
        content: 'I feel like returning to Earth and burning some earth<br>I’m sick of looking at the inside of space stations<br>Time for Del to take a vacation<br>My expertise in aviation guide us to our destination',
        trackNumber: 19
      }, {
        id: 101,
        content: 'My living quarters is completely froze solid<br>I thaw it out with a heat wave',
        trackNumber: 19
      }, {
        id: 102,
        content: 'Perusing my twenty-first century classic comics<br>The fun is astronomic',
        trackNumber: 19
      }, {
        id: 103,
        content: 'I figured since I’m hear I’ll renew my galactic passport<br>So I’m not persecuted by no galactic assholes',
        trackNumber: 19
      }, {
        id: 104,
        content: 'I’m sittin’ on the porch reading Cosmopolitan<br>Peepin’ all these dumb hoes with enhanced collagen',
        trackNumber: 19
      }, {
        id: 105,
        content: 'I was too scared to try to step<br>So I deployed one of my androids with dialect<br>Synthesized with my voice, perfectly replicated<br>Asked for her name and was she married? “No, we’re separated.”',
        trackNumber: 19
      }, {
        id: 106,
        content: 'I’m my own individual so I know it isn’t true just because you say it is<br>‘Cause anything thats truth got proof<br>That ain’t you, its simply just the way it is',
        trackNumber: 20
      }, {
        id: 107,
        content: 'Look in the past<br>You might have to go farther than the book in your class',
        trackNumber: 20
      }, {
        id: 108,
        content: 'My niggas cookin’ some crack and moms gets the first hit<br>That’s okay with you? That’s okay with me.<br>I’m not here to judge the way you be.',
        trackNumber: 20
      }, {
        id: 109,
        content: 'It’s like I dream when I die I wake up<br>See all the people I disrespected and try to make up<br>It’s praise to the creator, relate to nature',
        trackNumber: 20
      }, {
        id: 110,
        content: 'We were always coming back.',
        trackNumber: 21
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
