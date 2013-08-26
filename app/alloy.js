// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

//Creating Collection
Alloy.Collections.guest = Alloy.createCollection("guest");

//This function will be resued to show the Guest details
Alloy.Globals.loadGuestDetails = function(instance, guest){
	
	instance.guest_name.text = guest.get("name");
	instance.guest_email.text = guest.get("email");
	instance.guest_phone.text = guest.get("phone");
	instance.guest_state.text = guest.get("state");
	instance.guest_city.text = guest.get("city");
	
	//Saving current model for later use (weather Third Party API call)
	Alloy.Globals.current_model = guest;
};