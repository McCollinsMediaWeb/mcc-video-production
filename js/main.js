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
        $('[data-fancybox="portfolio1"]').fancybox({
            thumbs : {
                autoStart : true,
                axis      : 'x'
              },
              helpers : { 
                title : { type : 'inside' }
               }
        });
        $('[data-fancybox="portfolio2"]').fancybox({
            thumbs : {
                type: "modern",
                autoStart : true,
                axis      : 'x'
              }
        });
        $('[data-fancybox="portfolio3"]').fancybox({
            thumbs : {
                autoStart : true,
                axis      : 'x'
              }
        });
        $('[data-fancybox="portfolio4"]').fancybox({
            thumbs : {
                autoStart : true,
                axis      : 'x'
              }
        });
        $(".Port1").on("click", () => {
            $(".portfolio1 a:first-child").trigger("click");
        });
        $(".Port2").on("click", () => {
            $(".portfolio2 a:first-child").trigger("click");
        });
        $(".Port3").on("click", () => {
            $(".portfolio3 a:first-child").trigger("click");
        });
        $(".Port4").on("click", () => {
            $(".portfolio4 a:first-child").trigger("click");
        });
        
    
    }
    
)

$(function() {

    var $window = $(window);

    $(document).on('click', '.GoLink', function (e) {
        e.preventDefault();
        var anchor = $(this).attr('data-go');
        $(".GoLink").removeClass("active");
        $(this).addClass("active");
        $('html, body').animate({
            scrollTop: $('#'+anchor).offset().top - 80
        }, 500);
    });
    $(document).on('click', '.GoLink1', function (e) {
        e.preventDefault();
        var anchor = $(this).attr('data-go');
        $(".GoLink").removeClass("active");
        $(this).addClass("active");
        $('html, body').animate({
            scrollTop: $('#'+anchor).offset().top - 80
        }, 500);
        $("body").toggleClass("ActivePanel");
    });
    $(document).on('click', '.BkNw2', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#footer').offset().top - 80
        }, 500);
    });
    $(document).on('click', '.mediaFlex1', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#footer').offset().top - 80
        }, 500);
    });
    $(document).on('click', '.MenuClick', function (e) {
        e.preventDefault();
        $("body").toggleClass("ActivePanel");
    });
    jQuery(".popup2-trigger").click(function () {
        jQuery("body").toggleClass("Popup2active");
        jQuery(".p2HeadText").text($(this).text());
        jQuery(".p2mainContent").text($(this).next("span").text());
      });
      jQuery(".popup2-trigger-1").click(function () {
        jQuery("body").toggleClass("Popup2active");
        jQuery(".p2HeadText").text($(this).prev("div").text());
        jQuery(".p2mainContent").text($(this).next("span").text());
      });
      jQuery(".OverLay2").click(function () {
        jQuery("body").toggleClass("Popup2active");
        jQuery(".p2HeadText").text("Read More Content Looking Empty");
        jQuery(".p2mainContent").text($(this).data("Please click on any Read More Button"));
      });
      jQuery(".cta1").click(function () {
        jQuery("body").toggleClass("Popup2active");
        $('html, body').animate({
            scrollTop: $('#footer').offset().top - 80
        }, 500);
      });
      
    

});