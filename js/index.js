$(window).resize(function() {
	setContainerWidth();
});

function setContainerWidth() {
	var windowWidth = $(document).width();

	$('#sponsor-container').css('width', 'auto');
	var blockWidth = $('.grid').outerWidth(true);
	var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
	$('#sponsor-container').width(maxBoxPerRow * blockWidth);

	$('#faq-container').css('width', 'auto');
	var blockWidth = $('.faqBlock').outerWidth(true);
	var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
	$('#faq-container').width(maxBoxPerRow * blockWidth);
}

$(document).ready(function() {
	$.material.init();
	smoothScroll.init();
	$('.tooltip').tooltipster({
		position: 'bottom'
	});
});