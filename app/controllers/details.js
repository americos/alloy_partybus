exports.openDetails = function(guest){
	$.addWin.open();
	
	loadGuestDetails(guest);
};


function closeDetails(){
	$.addWin.close();
}


function loadGuestDetails(guest){
	
	$.guest_name.text = guest.get("name");
	$.guest_email.text = guest.get("email");
	$.guest_phone.text = guest.get("phone");
	$.guest_state.text = guest.get("state");
	$.guest_city.text = guest.get("city");
	
	//Saving current model for later use (weather call)
	Alloy.Globals.current_model = guest;
	
}


function loadWeather(){
	var guest = Alloy.Globals.current_model;
	
	getDataFromWeatherAPI();
}

function getDataFromWeatherAPI(){

	var key = "d46b5a966acf0239";
	var state = "VA";
	var city_camel_case = "falls_church";
	    
	var url = "http://api.wunderground.com/api/"+key+"/geolookup/conditions/q/"+state+"/"+city_camel_case+".json";
	console.log(" == Calling Weather WunderGround API with the following URL: " + url);
	var client = Titanium.Network.createHTTPClient({
		//Data ready
		onload: function(e){
			//console.log(" ***** Inside the callback:", this.responseText);
			var response = JSON.parse(this.responseText);
			
			//Temperature "humanize" is on: response['current_observation']['temperature_string'];
			//Observation time: reponse['current_observation']['observation_time'];
			//Humidty: response['current_observation']['relative_humidity']
			
			$.weather_temperature.text = "Temperature: " +  response['current_observation']['temp_f'];
			$.weather_time.text = "" +  response['current_observation']['observation_time'];
			$.weather_humidity.text = "Humidity: " +  response['current_observation']['relative_humidity'];
			
		},
		onerror: function(e){
			Titanium.API.debug(e.error);
		},
		timeout : 5000
	});

	//// UNCOMMENT THIS LINES TO DO REQUEST TO API
	client.open("GET", url);
	client.send();

}
