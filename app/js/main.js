$(function () {







	$('.product-slider-inner').slick({
		dots: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$"
	});

	$('.product__one-tabs .tab, .settings-tabs').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.product__one-tabs, .settings-tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.product__one-tabs .tabs, .settings-tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	$(".menu__btn").on('click', function () {
		$(".menu__list").slideToggle();
	});


	$(".header__btn-menu").on('click', function () {
		$(".header__box").toggleClass('active');
	});

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: '12px',
		readOnly: true
	});





	var mixer = mixitup('.product__inner-box');

});