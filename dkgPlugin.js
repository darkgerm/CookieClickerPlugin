// Name:        Cookie Clicker Plugin
// Auther:      darkgerm
// Create Date: 2014/04/13
// Usage:
//      Run the enable script on developer tools console.
//      Or use the bookmarklet.(Add it as bookmark)
//
// More info at https://github.com/darkgerm/CookieClickerPlugin

// settings
DKG_BIGCOOKIE_CLICK_MS = 5;
DKG_GOLDENCOOKIE_CLICK_MS = 1000;
DKG_SEASONPOPUP_CLICK_MS = 1000;

// load jQuery and bind onload
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-2.1.0.js';
script.type = 'text/javascript';
script.onload = jquery_ready;
document.getElementsByTagName('head')[0].appendChild(script);

// main
function jquery_ready() {
    var BIG_COOKIE = $('#bigCookie');
    var GOLDEN_COOKIE = $('#goldenCookie');
    var SEASON_POPUP = $('#seasonPopup');
    var timer_bc = null;
    var timer_gc = null;
    var timer_sp = null;

    var makeTooltip = function(name) {
        var desc = '<div style="min-width:200px;">' +
            '<div style="float:right;"><span class="price">0</span></div>' +
            '<small>[DKG Plugin]</small>' +
            '<div class="name">' + name + '</div>' +
            '</div>';
        return "Game.tooltip.draw(this, '" + encodeURI(desc) + "', 'store');";
    };

    if($('#dkgPlugin').length != 0) return;     //don't add again

    $('<div id="dkgPlugin" class="storeSection">').insertAfter('#storeTitle');

    $('<div id="dkg0" class="crate">')
        .css('background-position', '-570px -618px')
        .attr('onmouseover', makeTooltip('Auto Click Big Cookie'))
        .click(function(){
            if($(this).hasClass('enabled')) {
                $(this).removeClass('enabled');
                clearInterval(timer_bc);
            }else{
                $(this).addClass('enabled');
                timer_bc = setInterval(
                    function() { BIG_COOKIE.click(); },
                    DKG_BIGCOOKIE_CLICK_MS
                );
            }
        })
        .appendTo(dkgPlugin);

    $('<div id="dkg1" class="crate">')
        .css('background-position', '-474px -42px')
        .attr('onmouseover', makeTooltip('Auto Click Golden Cookie'))
        .click(function(){
            if($(this).hasClass('enabled')) {
                $(this).removeClass('enabled');
                clearInterval(timer_gc);
            }else{
                $(this).addClass('enabled');
                timer_gc = setInterval(
                    function() { GOLDEN_COOKIE.click(); },
                    DKG_GOLDENCOOKIE_CLICK_MS
                );
            }
        })
        .appendTo(dkgPlugin);

    $('<div id="dkg2" class="crate">')
        .css('background-position', '-570px -426px')
        .attr('onmouseover', makeTooltip('Auto Click Season Popup'))
        .click(function(){
            if($(this).hasClass('enabled')) {
                $(this).removeClass('enabled');
                clearInterval(timer_sp);
            }else{
                $(this).addClass('enabled');
                timer_sp = setInterval(
                    function() { SEASON_POPUP.click(); },
                    DKG_SEASONPOPUP_CLICK_MS
                );
            }
        })
        .appendTo(dkgPlugin);

    $('<div id="dkg3" class="crate enabled">')
        .css('background-position', '-282px -186px')
        .attr('onmouseover', makeTooltip('Save Shortcut'))
        .click(function(){
            Game.WriteSave();
        })
        .appendTo(dkgPlugin);

    $('<div id="dkg4" class="crate enabled">')
        .css('background-position', '-330px -186px')
        .attr('onmouseover', makeTooltip('Export Save Shortcut'))
        .click(function(){
            Game.ExportSave();
            $('#prompt textarea').select();
        })
        .appendTo(dkgPlugin);
}
