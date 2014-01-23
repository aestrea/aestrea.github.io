$(function(){
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 100
    });
});

$(window).load(function(){

    if ( $(window).width() >= 1200 ) {
        $('.clients-flexslider').flexslider({
            animation: "slide",
            easing: "swing",
            animationLoop: true,
            animationSpeed: 5000,
            itemWidth: 300,
            itemMargin: 149,
            minItems: 2,
            maxItems: 3,
            controlNav: false,
            directionNav: false,
            move: 1,
            pauseOnHover: true
        });
    }else if ($(window).width() >= 1024 && $(window).width() <= 1199 ) {
        $('.clients-flexslider').flexslider({
            animation: "slide",
            easing: "swing",
            animationLoop: true,
            animationSpeed: 5000,
            itemWidth: 300,
            itemMargin: 40,
            minItems: 2,
            maxItems: 3,
            controlNav: false,
            directionNav: false,
            move: 1,
            pauseOnHover: true
        });
    }

});

$(window).resize(function(){
    if ( $(window).width() >= 1200 ) {
        $('.clients-flexslider').flexslider({
            animation: "slide",
            easing: "swing",
            animationLoop: true,
            animationSpeed: 5000,
            itemWidth: 300,
            itemMargin: 149,
            minItems: 2,
            maxItems: 3,
            controlNav: false,
            directionNav: false,
            move: 1,
            pauseOnHover: true
        });
    }else if ($(window).width() >= 1024 && $(window).width() <= 1199 ) {
        $('.clients-flexslider').flexslider({
            animation: "slide",
            easing: "swing",
            animationLoop: true,
            animationSpeed: 5000,
            itemWidth: 300,
            itemMargin: 40,
            minItems: 2,
            maxItems: 3,
            controlNav: false,
            directionNav: false,
            move: 1,
            pauseOnHover: true
        });
    }
})

var $container = $('#portfolio-container');
// initialize
$container.masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.thumbnail',
    gutter: 20

    });

var $head = $( '#ha-header' );
$( '.ha-waypoint' ).each( function(i) {
    var $el = $( this ),
    animClassDown = $el.data( 'animateDown' ),
    animClassUp = $el.data( 'animateUp' );

    $el.waypoint( function( direction ) {
    if( direction === 'down' && animClassDown ) {
    $head.attr('class', 'ha-header ' + animClassDown);
    }
else if( direction === 'up' && animClassUp ){
    $head.attr('class', 'ha-header ' + animClassUp);
    }
}, { offset: '100%' } );
} );

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-80
        }, 1000, 'easeInOutCirc' );
});
});

$('.navbar .navbar-right li > a').click(function() {
    var navbar_toggle = $('.navbar-toggle');
    if (navbar_toggle.is(':visible')) {
    navbar_toggle.trigger('click');
    }
});

$(window).load(function() {
    $('#slider').nivoSlider( {
        animSpeed:500, // Slide transition speed
        pauseTime:5000, // How long each slide will show
        startSlide:0, // Set starting Slide (0 index)
        controlNav:true,
        directionNav:true, // Next & Prev navigation
        directionNavHide:false, // Only show on hover
        keyboardNav:true, // Use left & right arrows
        pauseOnHover:false, // Stop animation while hovering
        manualAdvance:false, // Force manual transitions
        prevText: 'Prev', // Prev directionNav text
        nextText: 'Next' // Next directionNav text
    });
});


