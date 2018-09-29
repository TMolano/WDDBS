/*

- DOMReady -
$( document ).ready(function() {
    console.log( "ready!" );
});

If you are writing code that people who aren't experienced with jQuery may see, it's best to use the long form.
jQuery waits for the DOM to be ready and then calls the callback function at the appropriate time

- DOMReady SHORTHAND -
$(function() {
    console.log( "ready!" );
});

Experienced developers sometimes use the shorthand

- MODULE -
(function($) { })(jQuery);

A Module is a pattern or immediately invoking function that executes
immediately after it’s defined.

*/

$( "#alert" ).click(function(){
$("#alertModal").alert();
    });

$( "#success" ).click(function(){
    $("#successModal").success();
});

$( "#warning" ).click(function(){
    $("#warningModal").warning();
});

$( "#error" ).click(function(){
    $("#errorModal").error();
});