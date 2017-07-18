// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    var delay;

    var menuIndex = 0
    var iScrollPos = 0;
    var $window = $(window)
    var menuBtn = $('.menu-btn');
    var menuItems = $('.menu-item');
    var mediaItems = $('.social-media-item')
    
    $window.scroll(function () {

        var iCurScrollPos = $(this).scrollTop();
        //menuItems.toggleClass('scale-in', iCurScrollPos < iScrollPos);
        //mediaItems.toggleClass("scale-in", iCurScrollPos < iScrollPos);
        
        if (iCurScrollPos  > iScrollPos) {
            //down
            menuBtn.removeClass("menu-open");
            menuBtn.addClass("menu-closed");
            closeMenuWithDelay();
            //menuIndex = -1;

        } else {
            //up
            menuBtn.removeClass("menu-closed");
            menuBtn.addClass("menu-open");
            openMenuWithDelay();
            //menuIndex = 4;
        }
        iScrollPos = iCurScrollPos;
        
    });

    menuBtn.click(function(){
        if (menuBtn.hasClass('menu-closed')){
            openMenuWithDelay();
        } else {
            closeMenuWithDelay();
        }
    });

    function closeMenuWithDelay(){ 

        clearInterval( delay )

        delay = setInterval( function(){
            console.log("index: " + menuIndex)
            if ( menuIndex >= 0 ){
                $( menuItems[ menuIndex ] ).removeClass( 'scale-in' );
                menuIndex -= 1;
            } else{
                clearInterval( delay );
            }
        }, 100 );   
        
        menuBtn.removeClass("menu-open");
        menuBtn.addClass("menu-closed");
    }
    
    function openMenuWithDelay(){

        clearInterval( delay )

        delay = setInterval( function(){
            console.log("index: " + menuIndex)
            if ( menuIndex <  menuItems.length ){
                $( menuItems[ menuIndex ] ).addClass( 'scale-in' );
                menuIndex += 1;
            } else{
                clearInterval( delay );
            }
        }, 150);

        menuBtn.removeClass("menu-closed");
        menuBtn.addClass("menu-open");
    }

    function showSocialMediaWithDelay(){
        setTimeout(function(){
            mediaItems.addClass("scale-in");
        }, 500);
    }

    function landingPageFlow() {
        //title animation
        setTimeout( function(){
            $('#Title').addClass('fadeInDown')
            $('#subTitle').addClass('fadeInDown')
        }, 100)

        //menuopen
        setTimeout(openMenuWithDelay, 1000)

        //chevron
        setTimeout( function(){
            $('#scroll-down-icon').addClass('scale-in')
        }, 2500)
    }

    landingPageFlow();
    
});