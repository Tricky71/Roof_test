$(function() {

	$('.toggle-menu').click(function() {
		$(this).toggleClass('toggle-menu--active');
		$('.header-top').slideToggle();
	})
   
   
	$('.bullet__toggle').click(function() {
		$(this).toggleClass('bullet__toggle--active');
		$('.bullet').toggleClass('bullet--active');
	})

	$('.contacts__link').click(function() {
		$('.overlay').addClass('overlay--active')
		$('.modal').slideToggle();
	})

	$('.modal__toggle').click(function() {
		$('.overlay').removeClass('overlay--active');
		$('.modal').slideToggle();
		$('.modal__success').removeClass('modal__success--active');
	})

	$('.modal__button').click(function() {
		$('.modal__success').addClass('modal__success--active');
	})

	$('#modal-tel').mask("+7(999) 999-99-99");

});
