Cookie Clicker Plugin
=====================

Original Site: http://orteil.dashnet.org/cookieclicker/

:Auther: darkgerm
:Create Date: 2014/04/13
:Usage:
     Run the enable script on developer tools console.
     Or use the bookmarklet.(Add it as bookmark)

enable script
-------------
::

    var script = document.createElement('script');
    script.src = '<url_here>';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

bookmarklet
-----------
::
    
    javascript:(function(){
    var script = document.createElement('script');
    script.src = '<url_here>';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    })();

