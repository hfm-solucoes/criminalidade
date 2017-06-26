var lugares;

function getCrimes() {
    $.ajax({
		type: 'get',
		url:'http://hfmsolucoes.kinghost.net/crimes',
		async: false,
	}).done(function(data) {
    	lugares = JSON.parse(data);
	});

	return lugares;
};

var locations = getCrimes();

function initMap() {
	let latitude = parseInt(locations[0].latitude);
	let longitude = parseInt(locations[0].longitude);

	var uluru = {lat: latitude, lng: longitude};
	

	 // Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			uluru = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			map.setCenter(uluru);
		});
	} 
      
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: uluru
	});

	let infowindow = new google.maps.InfoWindow();
	let marker, i;

	for (i = 0; i < locations.length; i++) {  
		console.log(locations.length)
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
			map: map,
			title: locations[i].tipo,
		});
	
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i].descricao);
				infowindow.open(map, marker);
			}
		})
		(marker, i));
	}
}


