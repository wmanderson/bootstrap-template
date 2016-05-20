$(document).ready(function() {

  $(window).on("scroll", function() {
    var scrollDistance = $(window).scrollTop();

    // If scroll distance is more than 50, add/remove the following classes
    if (scrollDistance >= 50) {
      $("#mainNav").removeClass("affix-top").addClass("affix");
    }

    // If scroll distance is less than 50, add/remove the following classes
    else {
      $("#mainNav").removeClass("affix").addClass("affix-top");
    }
    });

    $(document).on("click", "#about", function(){
      $("body").animate({
        scrollTop: $("#about").offset().top
    });
  });





});
