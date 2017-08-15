// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    var delay;
    var scrolling = false;
    var menuIndex = 0
    var iScrollPos = 0;
    var $window = $(window)
    var nav = $('.custom-nav');
    var menuBtn = $('.menu-btn');
    var closeBtn = $('.menu-btn.close')
    var openBtn = $('.menu-btn.open')
    var menuItems = $('.menu-item');
    var mediaItems = $('.social-media-item');
    var fullHeight = $(".full-height");

    /*
    function resizeBackground() {
        fullHeight.height($window.height());
    }

    $window.resize(resizeBackground);
    */
    
    $window.scroll(function () {
        var iCurScrollPos = $(this).scrollTop();
        
        //close menu
        if(nav.hasClass('menu-open')){
            closeMenuWithDelay();
            nav.removeClass("menu-open");
            nav.addClass("menu-closed");
            closeBtn.removeClass('scale-in');
            openBtn.addClass('scale-in');
        }

       /*
        if (scrolling == false){
            scrolling = true;
            if (iCurScrollPos  > iScrollPos) {
                //down
                closeMenuWithDelay();
                nav.removeClass("menu-open");
                nav.addClass("menu-closed");               
            } else {
                //up
                openMenuWithDelay();
                nav.removeClass("menu-closed")
                nav.addClass("menu-open")             
            }

            var delay =setInterval( function(){
                console.log("TIMEOUT")
                scrolling = false;
                clearInterval( delay );
            }, 600)         
        } 
        */

        iScrollPos = iCurScrollPos;
        
    });
    
    

    menuBtn.click(function(){
        if (nav.hasClass('menu-closed')){
            openMenuWithDelay();
            nav.removeClass("menu-closed")
            nav.addClass("menu-open")
            closeBtn.addClass('scale-in');
            openBtn.removeClass('scale-in');

        } else {
            closeMenuWithDelay();
            nav.removeClass("menu-open");
            nav.addClass("menu-closed");
            closeBtn.addClass('scale-in');
            openBtn.removeClass('scale-in');
            closeBtn.removeClass('scale-in');
            openBtn.addClass('scale-in');
        }
    });

    function closeMenuWithDelay(){ 

        //clearInterval( delay )
        if (nav.hasClass('menu-open')){
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
            var delay = setInterval( function(){
                console.log("index: " + menuIndex)
                if ( menuIndex <  menuItems.length ){
                    $( menuItems[ menuIndex ] ).addClass( 'scale-in' );
                    menuIndex += 1;
                } else{
                    clearInterval( delay );
                }
            }, 100);
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


        setTimeout(function(){
            closeBtn.addClass('scale-in');
        }, 1000)
        //menuopen
        setTimeout(openMenuWithDelay, 1000)

        
        setTimeout(function(){
            nav.removeClass("menu-closed")
            nav.addClass("menu-open") 
        },1100)
        

        //chevron
        setTimeout( function(){
            $('#scroll-down-icon').addClass('scale-in')
        }, 2500)
    }

    landingPageFlow();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();
    resizeBackground();
    
});