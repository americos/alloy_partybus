var guests = Alloy.Collections.guest;

//Add a guest (checkin) 
function addGuest(e){
	e.cancelBubble = true;
	
	var id = $model.id;
	var guest = guests.get(id);
	guest.set("checked", 1);
	
	guest.save();
}

//Show details section
function showDetails(){
	console.log("=Showing Details");
	Alloy.createController('details').getView().open();
}