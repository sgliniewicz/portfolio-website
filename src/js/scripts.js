// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    $('#scale-demo').click(function(){
        $(this).addClass('scale-out')
    });
});