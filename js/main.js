$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 120) {
        $("body").addClass("darkHeader");
    } else {
        $("body").removeClass("darkHeader");
    }
});
$(document).ready(
    function(){
        if (jQuery(window).width() < 1000) {
            jQuery(".ImageSwitcher")
            .fadeOut(400, function() {
              jQuery(this).attr('src',jQuery(this).attr('data-src'));
            })
            .fadeIn(400);
        }
        else {
          jQuery(".ImageSwitcher")
            .fadeOut(400, function() {
              jQuery(this).attr('src',jQuery(this).attr('data-src'));
            })
            .fadeIn(400);
        }
    
    }
)