// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    var delay;
    var flag;

    var menuIndex = 0
    var iScrollPos = 0;
    var $window = $(window)
    var nav = $('.custom-nav');
    var menuBtn = $('.menu-btn');
    var menuItems = $('.menu-item');
    var mediaItems = $('.social-media-item');
    
    $window.scroll(function () {

        var iCurScrollPos = $(this).scrollTop();
        //menuItems.toggleClass('scale-in', iCurScrollPos < iScrollPos);
        //mediaItems.toggleClass("scale-in", iCurScrollPos < iScrollPos);
        
        if (iCurScrollPos  > iScrollPos) {
            //down
            closeMenuWithDelay();
        } else {
            //up
            openMenuWithDelay();
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

        //clearInterval( delay )
        if (nav.hasClass('menu-open')){
            nav.removeClass("menu-open");
            nav.addClass("menu-closed");
            var delay = setInterval( function(){
                console.log("index: " + menuIndex)
                if ( menuIndex >= 0 ){
                    $( menuItems[ menuIndex ] ).removeClass( 'scale-in' );
                    menuIndex -= 1;
                } else{
                    clearInterval( delay );
                }
            }, 100 );

        }   
        
        
    }
    
    function openMenuWithDelay(){
        //clearInterval( delay )
        if (nav.hasClass('menu-closed')){
            nav.removeClass("menu-closed")
            nav.addClass("menu-open")
            var delay = setInterval( function(){
                console.log("index: " + menuIndex)
                if ( menuIndex <  menuItems.length ){
                    $( menuItems[ menuIndex ] ).addClass( 'scale-in' );
                    menuIndex += 1;
                } else{
                    clearInterval( delay );

                }
            }, 150);
        }

    }

    function showSocialMediaWithDelay(){
        setTimeout(function(){
            mediaItems.addClass("scale-in");
        }, 500);
    }

    function landingPageFlow() {
        //title animation
        $('#Title').addClass('fadeInDown')
        $('#subTitle').addClass('fadeInDown')
        

        setTimeout(function(){
            mediaItems.addClass("scale-in");
        }, 750);

        //menuopen
        setTimeout(openMenuWithDelay, 1000)


        //chevron
        setTimeout( function(){
            $('#scroll-down-icon').addClass('scale-in')
        }, 2500)
    }

    landingPageFlow();
    
});