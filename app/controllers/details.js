console.log("-- Inside details.js");

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
}
