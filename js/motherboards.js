$(document).ready(function() {
	$('boards-triggers_item').click(function(e){
		e.preventDefault();

		$('.boards-triggers_item').removeClass('boards-triggers_item-active');
		$('.boards-content_item').removeClass('boards-content_item-active');

		$(this).addClass('boards-triggers_item-active');
		$($(this).attr('href')).addClass('boards-content_item-active')
	});

	$('.boards-triggers_item:first').click();
});