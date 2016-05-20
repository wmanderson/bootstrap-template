$(document).ready(function() {




    $(window).on("scroll", function() {
        var scrollDistance = $(window).scrollTop();

        // If scroll distance is more than 50, add/remove the following classes
        if (scrollDistance >= 50) {
            $("#mainNav")
                .removeClass("affix-top")
                .addClass("affix");
        }

        // If scroll distance is less than 50, add/remove the following classes
        else {
            $("#mainNav")
                .removeClass("affix")
                .addClass("affix-top");
        }
    });

    // The flicker that occured was because the browser, by default, will try to scroll to the "href" before the function jumps in. We can prevent this using a 'preventDefault' event.

    $(document).on("click", ".page-scroll", function(event) {
      event.preventDefault();
      var target = $(this).attr("href");
      $("body").animate({
          scrollTop: $(target).offset().top
      }, 'slow');
    });

    // Add in scrollspy
    $('body').scrollspy({ target: '#bs-example-navbar-collapse-1' })

});
