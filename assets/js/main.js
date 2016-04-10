$(document).ready(function() {
	/* Navbar animation */
	$(window).bind('mousewheel', function(event) {
	    if (event.originalEvent.wheelDelta >= 0) {
	        $('.fixed.top.menu').removeClass('slide up');
	    } else {
	        $('.fixed.top.menu').addClass('slide up');
	        $('.vertical.menu.collapse').removeClass('slide down');
	    }

	});

	/* Back to top fade */
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
	    $('#toTop').hide();
	    if (scroll > 200) {
	    	$('#toTop').show();
	    } else {
	    	$('#toTop').hide();
	    }

	    if (scroll == 0) {
	    	$('.fixed.top.menu').removeClass('slide up');
	    }
	});

	/* Scroll Event*/
    $('a[data-slide="slide"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 90
        }, 900, 'swing');
    });

	/* Responsive Event */
	var navbarMenu = $('.fixed.top.menu .center.menu').clone();
	$('.vertical.menu.collapse').html(navbarMenu);

	$('#trigger').click(function(e) {
		e.preventDefault();
		$('.vertical.menu.collapse').toggleClass('slide down');
	});

	/* First Slider */
	$('#single-slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	$('#multiple-slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});
	
});