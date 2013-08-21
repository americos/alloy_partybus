
var guests = Alloy.Collections.guest;

//Remove a Guest from the collection
function removeGuest(e){
	e.cancelBubble = true;
	
	var id = $model.id;
	var guest = guests.get(id);
	guest.destroy();
}

//
function addGuest(e){
	e.cancelBubble = true;
	
	var id = $model.id;
	var guest = guests.get(id);
	guest.set("checked", 1);
	
	guest.save();
}
