// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    var menuIndex = 0
    var iScrollPos = 0;
    var $window = $(window)
    var menuBtn = $('.menu-btn');
    var menuItems = $('.menu-item');
    var mediaItems = $('.social-media-item')

    $window.scroll(function () {

        var iCurScrollPos = $(this).scrollTop();
        menuItems.toggleClass('scale-in', iCurScrollPos < iScrollPos);
        mediaItems.toggleClass("scale-in", iCurScrollPos < iScrollPos);
        
        if (iCurScrollPos  > iScrollPos) {
            //down
            menuBtn.removeClass("menu-open");
            menuBtn.addClass("menu-closed");
            menuIndex = -1;

        } else {
            //up
            menuBtn.removeClass("menu-closed");
            menuBtn.addClass("menu-open");
            menuIndex = 4;
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

        var delay = setInterval( function(){
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
        var delay = setInterval( function(){
            console.log("index: " + menuIndex)
            if ( menuIndex <  menuItems.length ){
                $( menuItems[ menuIndex ] ).addClass( 'scale-in' );
                menuIndex += 1;
            } else{
                clearInterval( delay );
            }
        }, 100);

        menuBtn.removeClass("menu-closed");
        menuBtn.addClass("menu-open");
    }

    function showSocialMediaWithDelay(){
        setTimeout(function(){
            mediaItems.addClass("scale-in");
        }, 500);
    }
    
    openMenuWithDelay();
    showSocialMediaWithDelay();
    
});