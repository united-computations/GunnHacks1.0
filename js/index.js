$(document).ready(function(){
	setContainerWidth();

	var colors = ["#385c78", "#be0b20", "#7caf14", "#ccb40a", "#2f2f2f"],
	selectedColor = colors[Math.floor(Math.random()*colors.length)]
	$("div#faq").css("background-color", selectedColor);
});

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
