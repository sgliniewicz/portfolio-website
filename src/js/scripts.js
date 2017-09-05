// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    var delay;
    var scrolling = false;
    var menuIndex = 0
    var iScrollPos = 0;
    var $window = $(window)
    var menuItems = $('.menu-item');
    var mediaItems = $('.social-media-item');
    var fullHeight = $(".full-height");

    function landingPageFlow() {
        //title animation
        $('#title').addClass('fadeInDown')
        $('#subTitle').addClass('fadeInDown')
        $('#me').addClass('fadeInDown')
    

        //chevron
        setTimeout( function(){
            $('#scroll-down-icon').addClass('scale-in')
        }, 2500)
    }

    landingPageFlow();
    $('.parallax').parallax();
    
});