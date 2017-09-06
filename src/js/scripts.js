// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    var delay;
    var scrolling = false;
    var menuIndex = 0;
    var iScrollPos = 0;
    var $window = $(window);
    var menuItems = $('.nav-item');
    var navItemsMobile = $('.nav-item-mobile');
    var mediaItems = $('.social-media-item');
    var fullHeight = $(".full-height");

    function landingPageFlow() {
        //title animation
        $('#title').addClass('fadeInDown');
        $('#subTitle').addClass('fadeInDown');
        $('#me').addClass('fadeInDown');
        
        setTimeout( function(){
            $('.social-media-item').addClass('scale-in');
        }, 500)

        //chevron
        setTimeout( function(){
            $('#scroll-down-icon').addClass('scale-in');
        }, 1000)
    }

    var options = [
        {selector: '#quote1', offset: 200, callback: function() {
            $("#quote1").addClass('show');
          } },
        {selector: '#quote2', offset: 200, callback: function() {
            $("#quote2").addClass('show');
          } },
    ]

    $('#mobile-nav-btn').on('click', function(){
        navItemsMobile.toggleClass('scale-in');
    
    });

    landingPageFlow();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    Materialize.scrollFire(options);
    
});