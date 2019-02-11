
$(document).ready(function() {

// SHOW MAIN MENU
	/*$('.button-menu').click(function(e) {
			$(this).toggleClass('active');
			$('.box-main-menu').toggleClass('open');
			e.stopPropagation();
			e.preventDefault();
		});
		
	
		$('.close-menu').click(function() {
			$('.button-menu').removeClass('active');
			$('.box-main-menu').removeClass('open');
		});
	
		$('body').click(function(e){
			e.stopPropagation();
			$('.button-menu').removeClass('active');
			//$('.box-main-menu').removeClass('open');
		});*/

    // SLIDER TOP
    $('.slider-top').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        //variableWidth: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        //centerMode: true,
        //centerPadding: '4px',
        /*appendArrows: $('.b-nav'),
        prevArrow: '<button id="prev" type="button" class="slick-arrow--prev"></button>',
        nextArrow: '<button id="next" type="button" class="slick-arrow--next"></button>',*/
        /*responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true
                }
            }
        ]*/
    });

    // TAB SLIDER
    $('.slider-product').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        //fade: true,
        //variableWidth: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2000,
        //arrows: false,
        dots: false,
        //centerMode: true,
        //centerPadding: '4px',
        /*appendArrows: $('.b-nav'),
         prevArrow: '<button id="prev" type="button" class="slick-arrow--prev"></button>',
         nextArrow: '<button id="next" type="button" class="slick-arrow--next"></button>',*/
        responsive: [
             {
                 breakpoint: 992,
                 settings: {
                     slidesToShow: 3
                 }
             },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
         ]
    });

    // TAB
    $(function() {

        $('.tabs-caption').on('click', '.tabs-caption__item:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.tabs').parent().parent().find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
                $('.slider-product').slick("reinit");
        });

    });

});