$( document ).ready(function(){
	$('#signup').submit(function(){
		if ( $('#signup').hasClass('valid')){
			$.ajax({
				url: "https://docs.google.com/forms/d/1XP0D4xLrAWxO0PVhzGtWm61hmjBwn4ljQkXKrVOxs1c/formResponse", 
				method: "POST",
				data: {"entry.1190056938": $('.email').val()},
				dataType: "xml"
			}).done(function( data ) {
				});

			//$('input[type="submit"]').val('Thank you! ♥ We\'ll email ' + $('.email').val() + ' when registration opens.');

			// Uncomment to deploy registration
			// $('#inputEmail').val( $('.email').val() );
			// PageTransitions.nextPage( $('#submit') );
			// document.getElementById('inputName').focus();

			// Comment out when enabling registration
			$( '#signup' ).addClass('sent');
			$('input[type="submit"]').val('Thank you! ♥');

		}
		return false;
	});

	$('#registration').submit(function(){
		$( '#signup' ).addClass('sent');

		$.ajax({
			url: "https://docs.google.com/forms/d/1gw8CcNFUIQPnYtsiuIMFNYMpc4zwPCB5dfk4vXKei70/formResponse", 
			method: "POST",
			data: {
				"entry.1329019569": $('#inputName').val(),
				"entry.1672038254": $('#inputEmail').val(),
				"entry.129183011": $('#inputPhone').val(),
				"entry.1703554458": $('#inputText').val(),
				"entry.252876870": $('#inputSchool').val(),
				"entry.51384848": $('#inputAge').val(),
				"entry.1195499678": $('#radioFreshman').val(),
				"entry.1265397744": $('#radioSophomore').val(),
				"entry.1569566681": $('#radioJunior').val(),
				"entry.483327531": $('#radioSenior').val(),
				"entry.984089881": $('#radioMale').val(),
				"entry.1986352261": $('#radioFemale').val(),
				"entry.1588954907": $('#radioOther').val(),
				"entry.2125284338": $('#genderOther').val(),
				"entry.2089511535": $('#radioExtraSmall').val(),
				"entry.1824583845": $('#radioSmall').val(),
				"entry.1470106745": $('#radioMedium').val(),
				"entry.41123227": $('#radioLarge').val(),
				"entry.1532256680": $('#radioExtraLarge').val(),
				"entry.1048428711": $('#radioNone').val(),
				"entry.1370720311": $('#radioVegetarian').val(),
				"entry.102106713": $('#radioVegan').val(),
				"entry.2122108574": $('#radioDietOther').val(),
				"entry.696923945": $('#dietOther').val(),
				"entry.551301075": $('#inputFirst').val(),
				"entry.286314095": $('#inputHardware').val(),
				"entry.1067756311": $('#inputResume').val(),
				"entry.855370543": $('#inputWebsite').val(),
				"entry.1235285041": $('#inputGitHub').val(),
				"entry.1957040337": $('#inputLinkedIn').val(),
				"entry.1561818636": $('#inputFriend1').val(),
				"entry.1546163091": $('#inputFriend2').val(),
				"entry.2097407123": $('#inputFriend3').val()
			},
			dataType: "xml"
		}).done(function( data ) {
			});

		$('input[type="submit"]').val('Thank you! ♥');
		PageTransitions.nextPage( $('#submit') );
		document.getElementById('inputName').focus();
		return false;
	});

	$('#cancel').click(function(){
		PageTransitions.nextPage( $('#submit') );
		return false;
	});
});

$('.email').keyup(function(){
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	re.test(this.value) ? $( '#signup' ).addClass( 'valid' ) : $( '#signup' ).removeClass( 'valid' );
});

// Disabled texting phone validation
// $('#inputText').change(function(){
// 	var regex = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
// 	if ( !regex.test($('#inputPhone').val()) && !$('#inputText').is(':checked') ) {
// 		$( '#inputText' ).attr('checked', false);
// 	}
// });