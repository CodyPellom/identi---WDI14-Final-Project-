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
            scrollTop: $("#footText").offset().top
        }, 2000);
    });

    $(".inputNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#languageInput").offset().top
        }, 2000);
    });

    $(".analyzeNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#personalityInput").offset().top
        }, 2000);
    });
    

})