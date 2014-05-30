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

	$(window).resize(function(event) {
		setup.positionChange();
	});

	var setup = {
		positionChange : function() {
			var h = Math.floor($(window).innerHeight()*.3)
			$('.splash').css('top', h);
		}
	}

	setup.positionChange();


});

