Cookie Clicker Plugin
=====================

Original Site: http://orteil.dashnet.org/cookieclicker/

Usage
-----
Run the enable script on developer tools console.
Or use the bookmarklet.(Add it as bookmark)

enable script
-------------
::

    var script = document.createElement('script');
    script.src = 'https://rawgithub.com/darkgerm/CookieClickerPlugin/master/dkgPlugin.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

bookmarklet
-----------
::
    
    javascript:(function(){
    var script = document.createElement('script');
    script.src = 'https://rawgithub.com/darkgerm/CookieClickerPlugin/master/dkgPlugin.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    })();

