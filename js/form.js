$( document ).ready(function(){
	$('#signup').submit(function(){
		if ( $('#signup').hasClass('valid')){
			$.ajax({
				url: "https://docs.google.com/forms/d/1XP0D4xLrAWxO0PVhzGtWm61hmjBwn4ljQkXKrVOxs1c/formResponse", 
				method: "POST",
				data: {"entry.1190056938": $('.email').val()},
				dataType: "xml"
			}).done(function( data ) { });

			//$('input[type="submit"]').val('Thank you! ♥ We\'ll email ' + $('.email').val() + ' when registration opens.');

			document.getElementById('inputName').focus();

			// Uncomment to deploy registration
			$('#inputEmail').val( $('.email').val() );
			PageTransitions.nextPage( $('#submit') );
			document.getElementById('inputName').focus();
			window.scrollTo(0, 0);

			// Comment out when enabling registration
			// $( '#signup' ).addClass('sent');
			// $('input[type="submit"]').val('Thank you! ♥');

		}
		return false;
	});

	$('#registration').submit(function(){
		$( '#signup' ).addClass('sent');

		var grade = "";
		if ($('#radioFreshman').is(':checked')) grade = "9";
		else if ($('#radioSophomore').is(':checked')) grade = "10";
		else if ($('#radioJunior').is(':checked')) grade = "11";
		else if ($('#radioSenior').is(':checked')) grade = "12";

		var gender = "";
		if ($('#radioMale').is(':checked')) gender = "Male";
		else if ($('#radioFemale').is(':checked')) gender = "Female";
		else if ($('#radioOther').is(':checked')) gender = $('#genderOther').val();
		else if ($('#radioDecline').is(':checked')) gender = "Decline to State";

		var shirt = "";
		if ($('#radioExtraSmall').is(':checked')) shirt = "XS";
		else if ($('#radioSmall').is(':checked')) shirt = "S";
		else if ($('#radioMedium').is(':checked')) shirt = "M";
		else if ($('#radioLarge').is(':checked')) shirt = "L";
		else if ($('#radioExtraLarge').is(':checked')) shirt = "XL";

		var diet = "";
		if ($('#radioNone').is(':checked')) diet = "None";
		else if ($('#radioVegetarian').is(':checked')) diet = "Vegetarian";
		else if ($('#radioVegan').is(':checked')) diet = "Vegan";
		else if ($('#radioDietOther').is(':checked')) diet = $('#dietOther').val();

		var first = "No";
		if ($('#firstYes').is(':checked')) first = "Yes";

		var hardware = "No";
		if ($('#hardwareYes').is(':checked')) hardware = "Yes";

		$.ajax({
			url: "https://docs.google.com/forms/d/1gw8CcNFUIQPnYtsiuIMFNYMpc4zwPCB5dfk4vXKei70/formResponse", 
			method: "POST",
			data: {
				"entry.1329019569": $('#inputName').val(),
				"entry.1672038254": $('#inputEmail').val(),
				"entry.129183011": $('#inputPhone').val(),
				"entry.1703554458": $('#inputText').is(':checked'),
				"entry.252876870": $('#inputSchool').val(),
				"entry.51384848": $('#inputAge').val(),
				"entry.1195499678": grade,
				"entry.984089881": gender,
				"entry.2089511535": shirt,
				"entry.1048428711": diet,
				"entry.551301075": first,
				"entry.286314095": hardware,
				"entry.1067756311": $('#inputResume').val(),
				"entry.855370543": $('#inputWebsite').val(),
				"entry.1235285041": $('#inputGitHub').val(),
				"entry.1957040337": $('#inputLinkedIn').val(),
				"entry.1561818636": $('#inputFriend1').val(),
				"entry.1546163091": $('#inputFriend2').val(),
				"entry.2097407123": $('#inputFriend3').val()
			},
			dataType: "xml"
		}).done(function( data ) { });

		$('input[type="submit"]').val('Thank you! ♥');
		PageTransitions.nextPage( $('#submit') );
		window.scrollTo(0, 0);
		return false;
	});

	$('#cancel').click(function(){
		PageTransitions.nextPage( $('#submit') );
		window.scrollTo(0, 0);
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