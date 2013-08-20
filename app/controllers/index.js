var guests = Alloy.Collections.guest;


var sample_guests = [
	{ name: "Americo Savinon", email: "americos@gmail.com", phone: "2022861415", checked: 1},
	{ name: "Patri Medina", email: "patri@gmail.com", phone: "3334445555", checked: 100}
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

function filterTable( collection ){
	return collection.models;	
}

$.index.open();