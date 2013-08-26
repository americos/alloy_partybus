var guests = Alloy.Collections.guest;

//Remove a Guest from the collection
function removeGuest(e){
	e.cancelBubble = true;
	
	var id = $model.id;
	var guest = guests.get(id);
	guest.set("checked", 0);
	
	guest.save();
}


//Show details section
function showDetailsModal(e){
	e.cancelBubble = true; 
	
	var id = $model.id;
	var guest= guests.get(id);
	
	Alloy.createController('details').openDetails(guest);
}
