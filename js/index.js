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

	var schools = ["Abraham Lincoln High School", "Adrian C. Wilcox High School", "Alameda Community Learning Center", "Alameda High School", "Alameda Science and Technology Institute", "Albany High School", "Amador Valley High School", "American High School", "Andrew Hill High School", "Ann Sobrato High School", "Aptos High School", "Aragon High School", "Archbishop Mitty High School", "Arroyo High School", "Baden High School", "Bay Area Technology School", "Beacon School", "Bear Creek High School", "Bellarmine College Preparatory", "Berkeley High School", "Bishop O'Dowd High School", "Boynton High School", "Branham High School", "Burlingame High School", "Calla Alternative High School", "Capuchino High School", "Carlmont High School", "Castlemont Community of Small Schools", "Castro Valley High School", "Cesar Chavez High School", "Christopher High School", "Conley-Caraballo High School", "Costanoa Continuation High School", "Cupertino High School", "Cypress Charter High School", "Del Mar High School", "Delta Charter School", "Design and Technology High School", "Downtown College Prep", "Dublin High School", "East Side Cadet Academy", "East Union High School", "Edison High School", "El Camino High School", "Emery Secondary School", "Encinal High School", "Everest Public High School", "Evergreen Valley High School", "Foothill High School", "Franklin High School", "Fremont Federation of High Schools", "Fremont High School", "Georgiana Bruce Kirby Preparatory School", "Gilroy Early College Academy", "Gilroy High School", "Granada High School", "Gunderson High School", "Half Moon Bay High School", "Harbor High School", "Hayward High School", "Henry M. Gunn High School", "Hillsdale High School", "Hillwood Academic Day School", "Holy Names High School", "Homestead High School", "Horizon High School", "Independence High School", "Irvington High School", "Island High School", "James Lick High School", "James Logan High School", "Jefferson High School", "John F. Kennedy High School", "Junípero Serra High School", "Lathrop High School", "Leigh High School", "Leland High School", "Liberty Baptist School", "Lincoln High School", "Lincoln High School", "Live Oak High School", "Livermore High School", "Lodi High School", "Los Altos High School", "Los Gatos High School", "Lynbrook High School", "MacGregor High School", "MACSA Academia Calmecac School", "MACSA Elementary Portal Leadership Academy", "Manteca Day School", "Manteca High School", "McClymonds Educational Complex", "MCP Middle and High School", "Menlo-Atherton High School", "Mercy High School", "Merrill F. West High School", "Middle College High", "Middle College High School", "Millennium High School", "Mills High School", "Milpitas High School", "Mission San Jose High School", "Monta Vista High School", "Monte Vista Christian School", "Monterey Bay Academy", "Moreau Catholic High School", "Mount Eden High School", "Mount Pleasant High School", "Mountain View Academy", "Mountain View High School", "New Vision Alternative High School", "Newark Memorial High School", "Notre Dame High School", "Notre Dame High School", "Oak Grove High School", "Oakland High School", "Oakland International High School", "Oakland Military Institute", "Oakland School for the Arts", "Oakland Technical High School", "Oakwood High School", "Oceana High School", "Our Shepherd's Academy", "Pacific Collegiate School", "Pajaro Valley High School", "Palo Alto High School", "Palo Alto Preparatory School", "Piedmont High School", "Piedmont Hills High School", "Pine Hill School", "Pioneer High School", "Presentation High School", "Prospect High School", "Ravenswood High School", "Redwood Alternative High School", "Ripon High School", "Sacred Heart Preparatory", "Saint Francis Central Coast Catholic High School", "Saint Francis High School", "San Jose Conservation Corps", "San Jose High Academy", "San Leandro High School", "San Lorenzo High School", "San Lorenzo Valley High School", "San Mateo High School", "Santa Clara High School", "Santa Cruz High School", "Santa Cruz Waldorf High School", "Santa Teresa High School", "Saratoga High School", "Scotts Valley High School", "Sequoia High School", "Sierra High School", "Silicon Valley Essential High School", "Silver Creek High School", "Skyline High School", "Soquel High School", "South San Francisco High School", "St. Elizabeth High School", "St. Joseph Notre Dame High School", "St. Mary's College High School", "Stagg High School", "Stellar Learning Academy", "Stockton Collegiate International Schools", "Stockton Early College Academy", "Summit Preparatory Charter High School", "Sunset High School", "Tennyson High School", "Terra Nova High School", "Tokay High School", "Tracy High School", "University Preparatory Charter Academy", "Urban Pioneer Experiential Academy", "Village High School", "Washington High School", "Watsonville High School", "Westmont High School", "Westmoor High School", "Weston Ranch High School", "White Road Baptist Academy", "William C. Overfelt High School", "Willow Glen High School", "Woodside High School", "Woodside International School", "Woodside Priory School", "Yerba Buena High School"];
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
	$('#radioDietOther').is(':checked') ? $('#detOther').prop('disabled', false) : $('#dietOther').prop('disabled', true);
});