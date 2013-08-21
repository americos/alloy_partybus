var guests = Alloy.Collections.guest;


var sample_guests = [
	{ name: "Americo Savinon", email: "americos@gmail.com", phone: "2022861415", checked: 1},
	{ name: "Patri Medina", email: "patri@gmail.com", phone: "3334445555", checked: 0},
	{ name: "Eli Dominguez", email: "eli@gmail.com", phone: "2223334444", checked: 0},
	{ name: "Miguel Ortiz", email: "miguel@gmail.com", phone: "5556667777", checked: 1},
	{ "name": "Kermit Farmer", "email": "orci.lacus@loremtristique.co.uk", "phone": "8062456286",checked: 0 },
	{ "name": "Blake Freeman", "email": "dictum.Phasellus@est.co.uk", "phone": "9842753387",checked: 0 },
	{ "name": "Zeus Dillard", "email": "tellus.imperdiet@Proin.ca", "phone": "3029206332",checked: 0 },
	{ "name": "Kadeem Harrington", "email": "hendrerit.neque@imperdiet.co.uk", "phone": "5048326342",checked: 0 },
	{ "name": "Elmo Mcfadden", "email": "amet.consectetuer.adipiscing@habitantmorbitristique.com", "phone": "8024466001",checked: 0 },
	{ "name": "Jakeem Garza", "email": "velit.Sed@eleifendCrassed.co.uk", "phone": "7703155413",checked: 0 }
];

_.each( sample_guests, function(guest){
	guests.create({
		name: guest.name,
		email: guest.email,
		phone: guest.phone,
		checked: guest.checked
	});
});

guests.fetch();


Alloy.Globals.total_guests = guests.length;


function filterPending( collection ){
	return collection.where({ checked: 0}); 
}

function filterCheckedIn( collection ){
	return collection.where({ checked: 1})	
}


$.index.open();