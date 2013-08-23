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
	
	console.log("---- guest state:", guest.get("state"));
	console.log("---- guest city:", guest.get("city"));
}
