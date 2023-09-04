$(document).ready(function() {
	$('.tabs-triggers_item').click(function(e){
		e.preventDefault();

		$('.tabs-triggers_item').removeClass('tabs-triggers_item-active');
		$('.tabs-content_item').removeClass('tabs-content_item-active');

		$(this).addClass('tabs-triggers_item-active');
		$($(this).attr('href')).addClass('tabs-content_item-active')
	});

	$('.tabs-triggers_item:first').click();
});
$(document).ready(function() {
	$('.Intels-triggers_item').click(function(e){
		e.preventDefault();

		$('.Intels-triggers_item').removeClass('Intels-triggers_item-active');
		$('.Intels-content_item').removeClass('Intels-content_item-active');

		$(this).addClass('Intels-triggers_item-active');
		$($(this).attr('href')).addClass('Intels-content_item-active')
	});

	$('.Intels-triggers_item:first').click();
});

