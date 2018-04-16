$(document).ready(function(){
  
  $( "#message" ).hide()

    $( "#pics" ).mouseover(function() {
        $( "#message" ).fadeIn(2000);
      });

    $("#downArrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#examplesBox").offset().top
        }, 2000);
    });

    $(".about").click(function() {
        $('html, body').animate({
            scrollTop: $("#contactSection").offset().top
        }, 2000);
    });

    $(".languageNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#languageInput").offset().top
        }, 2000);
    });

    $(".personalityNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#personalityInput").offset().top
        }, 2000);
    });
    
    $(".contactNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#footText").offset().top
        }, 2000);
    })

})