/*	################################################################
	File Name: custom.js
	Template Name: Opekkha
	Created By: Shah Zobayer Ahmed
	http://themencoder.com

	1) PRELOADER
	2) FIX MENU
	3) YOUTUBE VIDEO
    4) OWL QUOTE ACTIVATION
    5) ISOTOPE WORK
    6) OWL CLIENT ACTIVATION
    7) OWL TESTIMONIAL ACTIVATION
    8) SKILL PROGRESS BAR
    9) COUNTER UP
    10) NICESCROLL

################################################################# */
jQuery(document).ready(function($) {

    "use strict";

     /*==============================
       FIX MENU
    ==============================*/
    (function($){
        // menu fixed
        var nav = $('.header-section');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 62) {
                nav.addClass("fixed");
            } else {
                nav.removeClass("fixed");
            }
        });

        var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight()+15,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

        // so we can get a fancy scroll animation
        menuItems.click(function(e){
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();
        });

        // Bind to scroll
        $(window).scroll(function(){
            var fromTop = $(this).scrollTop()+topMenuHeight;
            var cur = scrollItems.map(function(){
                if ($(this).offset().top < fromTop)
                return this;
            });
           cur = cur[cur.length-1];
           var id = cur && cur.length ? cur[0].id : "";
           if (lastId !== id) {
                lastId = id;
                menuItems
                 .parent().removeClass("active")
                 .end().filter("[href=#"+id+"]").parent().addClass("active");
            }
        });
    })(jQuery);

    /**************
    Window Load
    ***************/
    (function($){
        $(window).load(function() {
    	    $('#preloader').hide();
        });
    })(jQuery);

    /**************
    Jquery Counter
    ***************/
    (function($){
        $('.countdown').downCount({
    		date: '06/06/2016 12:00:00',
            offset: +1
    	});
    })(jQuery);

    /*==============================
       FIX MENU
    ==============================*/
    (function($){

        var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight()+15,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

        // so we can get a fancy scroll animation
        menuItems.click(function(e){
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();
        });

        // Bind to scroll
        $(window).scroll(function(){
            var fromTop = $(this).scrollTop()+topMenuHeight;
            var cur = scrollItems.map(function(){
                if ($(this).offset().top < fromTop)
                return this;
            });
           cur = cur[cur.length-1];
           var id = cur && cur.length ? cur[0].id : "";
           if (lastId !== id) {
                lastId = id;
                menuItems
                 .parent().removeClass("active")
                 .end().filter("[href=#"+id+"]").parent().addClass("active");
            }
        });
    })(jQuery);

    /* LINK SCROLL ANIMATION */
    (function($){
        $('.go-to-about').click(function(){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });
    })(jQuery);

    /* WOW */
    (function($){
        new WOW().init();
    })(jQuery);
    
});

/*==============================
    OWL WORKS ACTIVATION
==============================*/
(function($){
    var owl = $("#works");
    owl.owlCarousel({
        items : 3,
        itemsDesktop : [1000,3],
        itemsDesktopSmall : [900,2],
        itemsTablet: [600,1],
        itemsMobile : false
    });

    // Custom Navigation Events
    $(".works-next").click(function(){
        owl.trigger('owl.next');
    })
    $(".works-prev").click(function(){
        owl.trigger('owl.prev');
    })
})(jQuery);

/*==============================
        PRETTY PHOTO
==============================*/
    (function($){
        $("area[data-gal^='prettyPhoto']").prettyPhoto();
        $(".gallery:first a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false, social_tools:''});
        $(".gallery:gt(0) a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
    })(jQuery);





