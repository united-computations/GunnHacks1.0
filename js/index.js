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

	var substringMatcher = function(strs) {
		return function findMatches(q, cb) {
			var matches, substrRegex;

			// an array that will be populated with substring matches
			matches = [];

			// regex used to determine if a string contains the substring `q`
			substrRegex = new RegExp(q, 'i');

			// iterate through the pool of strings and for any string that
			// contains the substring `q`, add it to the `matches` array
			$.each(strs, function(i, str) {
				if (substrRegex.test(str)) {
					// the typeahead jQuery plugin expects suggestions to a
					// JavaScript object, refer to typeahead docs for more info
					matches.push({ value: str });
				}
			});

			cb(matches);
		};
	};

	var schools = ["Abraham Lincoln High School (San Francisco)", "Abraham Lincoln High School (San Jose)", "Academy of Arts & Sciences", "Adrian C. Wilcox High School", "Andrew P. Hill High School", "Ann Sobrato High School", "Aragon High School", "Archbishop Mitty High School", "Archbishop Riordan High School", "Aurora High School", "Baden High School", "Balboa High School", "BASIS Independent Silicon Valley", "Beacon School", "Bellarmine College Preparatory", "Boynton High School", "Branham High School", "Burlingame High School", "Cambrian Academy", "Capuchino High School", "Carlmont High School", "Castilleja School", "Christopher High School", "City Arts & Technology", "Communitas Charter High School", "Convent of the Sacred Heart High School", "Cornerstone Academy", "Crystal Springs Uplands School", "Cupertino High School", "Del Mar High School", "Downtown College Prep", "Downtown High School", "Dr. TJ Owens Gilroy Early College Academy (GECA)", "Drew School", "East Palo Alto Phoenix Academy", "East Side Cadet Academy", "Eastside College Preparatory School", "El Camino High School", "Everest Public High School", "Evergreen Valley High School", "Fremont High School", "Fusion Academy", "Galileo Academy of Science and Technology", "Gateway High School", "George Washington High School", "Gilroy High School", "Gunderson High School", "Henry M. Gunn High School", "Half Moon Bay High School", "Hillsdale High School", "Hillwood Academic Day School", "Homestead High School", "Ida B. Wells Continuation High School", "Immaculate Conception Academy", "Independence High School (San Francisco)", "Independence High School (San Jose)", "International High School of San Francisco", "International Studies Academy", "James Lick High School", "Jefferson High School", "Jewish Community High School of the Bay", "John A. O'Connell High School", "June Jordan School for Equity", "Jun&iacute;pero Serra High School", "Kehillah Jewish High School", "KIPP San Francisco College Preparatory", "Leadership High School", "Leigh High School", "Leland High School", "Liberty Baptist School", "Lick-Wilmerding High School", "Live Oak High School", "Los Altos High School", "Los Gatos High School", "Lowell High School", "Lyc&eacute;e Fran&ccedil;ais La P&eacuterouse", "Lynbrook High School", "MACSA Academia Calmecac School", "MACSA Elementary Portal Leadership Academy", "Menlo School", "Menlo-Atherton High School", "Mercy High School (Burlingame)", "Mercy High School (San Francisco)", "Mid-Peninsula High School", "Middle College High", "Mills High School", "Milpitas High School", "Mission High School", "Monta Vista High School", "Mount Pleasant High School", "Mountain View Academy", "Mountain View High School", "Notre Dame High School", "Notre Dame High School", "Oak Grove High School", "Oakwood High School", "Oceana High School", "Our Shepherd's Academy", "Pacific Rim International School", "Palo Alto High School", "Palo Alto Preparatory School", "Peninsula Christian School", "Pescadero High School", "Phillip & Sala Burton High School", "Piedmont Hills High School", "Pine Hill School", "Pinewood School", "Pioneer High School", "Presentation High School", "Prospect High School", "Raoul Wallenberg Traditional High School", "Ravenswood High School", "Roman Catholic Archdiocese of San Francisco", "Roman Catholic Diocese of San Jose", "Sacred Heart Cathedral Preparatory", "Sacred Heart Preparatory", "Saint Francis High School", "Saint John of San Francisco Orthodox Academy", "San Francisco Christian", "San Francisco Flex Academy", "San Francisco International High School", "San Francisco University High School", "San Francisco Waldorf High School", "San Jose Conservation Corps Charter School", "San Jose High Academy", "San Mateo High School", "Santa Clara High School", "Santa Teresa High School", "Saratoga High School", "School of the Arts (SOTA)", "Sequoia High School", "Silicon Valley Essential High School", "Silver Creek High School", "South San Francisco High School", "St. Ignatius College Preparatory", "Stellar Learning Academy", "Stuart Hall High School", "Summit Preparatory Charter High School", "Terra Nova High School", "The Bay School of San Francisco", "The Harker School", "The King's Academy", "The Urban School of San Francisco", "Thomas More School", "Thurgood Marshall Academic High School", "University Preparatory Academy", "Urban Pioneer Experiential Academy", "Valley Christian High School", "Westmont High School", "Westmoor High School", "White Road Baptist Academy", "William C. Overfelt High School", "Willow Glen High School", "Woodside High School", "Woodside International School", "Woodside Priory School", "Yerba Buena High School", "Youth Chance High School"];
	$('#school #inputSchool').typeahead({
		hint: true,
		highlight: true,
		minLength: 1
	},
	{
		name: 'schools',
		displayKey: 'value',
		source: substringMatcher(schools)
	});
});

$('#radioMale, #radioFemale, #radioOther').change(function(){
	$('#radioOther').is(':checked') ? $('#genderOther').prop('disabled', false) : $('#genderOther').prop('disabled', true);
});

$('#radioNone, #radioVegetarian, #radioVegan, #radioDietOther').change(function(){
	$('#radioDietOther').is(':checked') ? $('#dietOther').prop('disabled', false) : $('#dietOther').prop('disabled', true);
});