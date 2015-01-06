$( document ).ready(function(){
	$('#signup').submit(function(){
		if ( $('#signup').hasClass('valid')){
			$( '#signup' ).addClass('sent');
			$.ajax({
				url: "//formspree.io/info@gunnhacks.com", 
				method: "POST",
				data: {message: $('.email').val()},
				dataType: "json"
			}).done(function( data ) {
				});

				//$('input[type="submit"]').val('Thank you! ♥ We\'ll email ' + $('.email').val() + ' when registration opens.');
				$('input[type="submit"]').val('Thank you! ♥');
		}
				return false;
		});
});

$('.email').keyup(function(){
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	re.test(this.value)  ? $( '#signup' ).addClass( 'valid' ) : $( '#signup' ).removeClass( 'valid' );
});