$(document).ready(function () {
		svg4everybody({});

		var sandwich = function () {
			$(document).on('click', '.catalog-nav__header', function () {
				var sandwich = $(this).find('.sandwich');
				var catalog = $(this).parent();
				sandwich.toggleClass('sandwich--active');
				catalog.toggleClass('catalog-nav--active');

			});
	};


	var popularCategoriesSlider = function(){
		if($(window).width() < 768){
			$('.js-categories-prev').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
			})
		}
	};

	var productPrevSlider = function(){
		var sliderCoutn = $('.product-slider__count'),
		prodSlider = 	$('.js-products-slider');

		prodSlider.on('init afterChange', function(event, slick, currentSlide, nextSlide){
			var i = (currentSlide ? currentSlide : 0) + 1;
			sliderCoutn.text('Страница '+ i + ' из ' + slick.slideCount);
		})

		$('.js-products-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '.slider-nav--prev',
			nextArrow: '.slider-nav--next',
			infinite: false,
			
		})
	};

	var catelogNavHover = function(){
		$('.catalog-nav__item').hover(function(){
			var catelogBody = $(this).closest('.catalog-nav__body');
			catelogBody.css('width', 825)
		},
		function(){
			var catelogBody = $(this).closest('.catalog-nav__body');
			catelogBody.css('width', 'auto')

		});
	};

	var locationChoose = function(){
		$(document).on('click','.location-question__btn', function(){
			var answer = $(this).data('location');
			$(this).closest('.location-question').hide();
			if(answer === 'no'){
				$(this).closest('.location__body').addClass('is-location-choose');
			}
		})
		
		$(document).on('click','.location-choose__item', function(){
			$(this).closest('.location__body').removeClass('is-location-choose');
		})

		$(document).on('click','.location__header', function(){
			$(this).siblings('.location__body').addClass('is-location-choose');
		})

	};

	var popupLink =function(){
		$('.js-popup-link ').magnificPopup({
			showCloseBtn: false
		});
		$(document).on('click', '.popup__close', function(){
			$.magnificPopup.close();
		})
		
	}
	
	$('.js-popup-link ').on('click', function () {
		$('.hide-on-success').show().siblings('.show-on-success').hide();

	});

	var formValidate = function () {
		$('form').each(function () {
			$(this).on('submit', function(){
				$(this).validate( {
					rules: {
						name: 'required',
						phone: 'required',
						email: 'required',
						password: 'required',
						message: 'required'
					},
					messages: {
						name: 'Введите корректное имя',
						phone: 'Введите корректное номер',
						email: 'Введите корректное email',
						password: 'Введите корректное пароль',
						message: 'Заполните поле'
					},
					errorPlacement: function (error, elemtnt) {
						elemtnt.attr('placeholder', error[0].outerText);
					}
				});
				if ($(this).valid()){
					var wrap = $(this)[0].closest('.hide-on-success');
					if (wrap){
						$(wrap).siblings('.show-on-success').show();
						$(wrap).hide();
					}
				}
				
				return false;
			});
			
		});
		
	}
	

	popularCategoriesSlider();
	sandwich();
	productPrevSlider();
	catelogNavHover();
	locationChoose();
	popupLink();
	formValidate();
});

var popularCategoriesSlider = function(){
	var sliderElement = $('.js-categories-prev');

	if($(window).width() < 768 && !(sliderElement.hasClass('slick-initialized'))){
		sliderElement.slick({
			slidesToShow: 2,
			slidesToScroll: 1,
		})
	} else if($(window).width() > 768 && sliderElement.hasClass('slick-initialized')){
		sliderElement.slick('unslick');
	}
};


$(window).on('resize', function(){
	popularCategoriesSlider();
});

