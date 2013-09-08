      document.getElementById('sleep').addEventListener('touchstart', function(event) { 
        document.getElementById('sleep').src = '/img/sleep_pressed.png';
        console.log('press sleep')
      },false);

      document.getElementById('sleep').addEventListener('touchend', function(event) { 
        document.getElementById('sleep').src = '/img/sleep_unpressed.png';
        console.log('press sleep')
      },false);

      document.getElementById('options').addEventListener('touchstart', function(event) { 
        document.getElementById('options').src = '/img/options_pressed.png';

      },false);

      document.getElementById('options').addEventListener('touchend', function(event) { 
        document.getElementById('options').src = '/img/options_unpressed.png';

      },false);

      document.getElementById('stats').addEventListener('touchstart', function(event) { 
        document.getElementById('stats').src = '/img/mystats_pressed.png';

      },false);

      document.getElementById('stats').addEventListener('touchend', function(event) { 
        document.getElementById('stats').src = '/img/mystats_unpressed.png';

      },false);