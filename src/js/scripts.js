// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    $('.btn-floating').click(function(){
        $(this).addClass('scale-out')
    });
});