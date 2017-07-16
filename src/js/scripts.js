// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    var menuIndex = 0
    var menuBtn = $('.menu-btn');
    var menuItems = $('.menu-item');


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
    
    openMenuWithDelay();
    
});