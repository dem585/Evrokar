$(function(){
	// menu
	$('.header__menu-button').on('click', function(){
    $('.header__menu').toggleClass('menu--active');
    $('.body').toggleClass('body--hiden');
  	});


});