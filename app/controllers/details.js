//Open Details modal Window
exports.openDetails = function(guest){
	$.addWin.open();
	
	Alloy.Globals.loadGuestDetails($, guest);
};


function closeDetails(){
	$.addWin.close();
}


function loadWeather(){
	
	getDataFromWeatherAPI();
}

//Getting Weather info through Wunderground.com
function getDataFromWeatherAPI(){

	var guest = Alloy.Globals.current_model;

	//My Developer Key (500 hits/day on free plan)
	var key = "d46b5a966acf0239";
	var state = guest.get("state");
	var city_camel_case = guest.get("city");

	var url = "http://api.wunderground.com/api/"+key+"/geolookup/conditions/q/"+state+"/"+city_camel_case+".json";
	console.log(" == Calling Weather WunderGround API with the following URL: " + url);
	var client = Titanium.Network.createHTTPClient({
		//Data ready
		onload: function(e){

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

	//// COMMENT THIS LINES TO AVOID DOING REQUEST TO API
	client.open("GET", url);
	client.send();

}
