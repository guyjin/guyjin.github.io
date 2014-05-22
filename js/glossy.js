$(function() {
	var cat = $('.categories');
	$('.categoryTrigger').on('mouseenter', function(e){
		cat.stop().animate({
			opacity: 1
		},500);
	}
	);

	$('.categories').on('mouseleave', function() {
		cat.stop().animate({
			opacity: 0
		},500);
	});


});