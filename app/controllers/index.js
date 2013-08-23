var guests = Alloy.Collections.guest;


var sample_guests = [
	{ name: "Americo Savinon", email: "americos@gmail.com", phone: "2022861415", checked: 0, state: "VA", city: "Arlington"},
	{ name: "Patri Medina", email: "patri@gmail.com", phone: "3334445555", checked: 0, state: "MD", city: "Bethesda"},
	{ name: "Eli Dominguez", email: "eli@gmail.com", phone: "2223334444", checked: 0, state: "DC", city: "Georgetown"},
	{ name: "Miguel Ortiz", email: "miguel@gmail.com", phone: "5556667777", checked: 0, state: "DC", city: "du_pont"},
	{ name: "Kermit Farmer", email: "orci.lacus@loremtristique.co.uk", phone: "8062456286",checked: 0, state: "MD", city: "chevy_chase"},
	{ name: "Blake Freeman", email: "dictum.Phasellus@est.co.uk", phone: "9842753387",checked: 0, state: "VA", city: "vienna"},
	{ name: "Zeus Dillard", email: "tellus.imperdiet@Proin.ca", phone: "3029206332",checked: 0, state: "VA", city: "falls_church"},
	{ name: "Kadeem Harrington", email: "hendrerit.neque@imperdiet.co.uk", phone: "5048326342",checked: 0, state: "VA", city: "arlington"},
	{ name: "Elmo Mcfadden", email: "amet.consectetuer.adipiscing@habitantmorbitristique.com", phone: "8024466001",checked: 0, state: "MD", city: "silver_spring"},
	{ name: "Jakeem Garza", email: "velit.Sed@eleifendCrassed.co.uk", phone: "7703155413",checked: 0, state: "DC", city: "Georgetown"}
];

	
_.each( sample_guests, function(guest){
	guests.create({
		name: guest.name,
		email: guest.email,
		phone: guest.phone,
		checked: guest.checked,
		state: guest.state,
		city: guest.city
	});
});


Alloy.Globals.total_guests = guests.length;

//////////Loading the Weather API
var key = "d46b5a966acf0239";
var state = "VA";
var city_camel_case = "falls_church";
    
//var url = "http://api.wunderground.com/api/"+key+"/geolookup/conditions/q/"+state+"/"+city_camel_case+".json";
//console.log(" ==--- URL:" + url);
var client = Titanium.Network.createHTTPClient({
	//Data ready
	onload: function(e){
		// Ti.API.info("Received text: " + this['current_observation']['temp_f']);
		console.log(" ***** Inside the callback:", this.responseText);
	},
	onerror: function(e){
		Titanium.API.debug(e.error);
	},
	timeout : 5000
});

//// UNCOMMENT THIS LINES TO DO REQUEST TO API
//client.open("GET", url);
//client.send();

//

function filterPending( collection ){
	return collection.where({ checked: 0}); 
}

function filterCheckedIn( collection ){
	return collection.where({ checked: 1});
}


$.index.open();