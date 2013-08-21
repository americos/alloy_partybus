var guests = Alloy.Collections.guest;


var sample_guests = [
	{ name: "Americo Savinon", email: "americos@gmail.com", phone: "2022861415", checked: 1},
	{ name: "Patri Medina", email: "patri@gmail.com", phone: "3334445555", checked: 0},
	{ name: "Eli Dominguez", email: "eli@gmail.com", phone: "2223334444", checked: 0},
	{ name: "Miguel Ortiz", email: "miguel@gmail.com", phone: "5556667777", checked: 1}
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

function filterPending( collection ){
	return collection.where({ checked: 0}); 
}

function filterCheckedIn( collection ){
	return collection.where({ checked: 1})	
}


$.index.open();