var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.guest = Alloy.createCollection("guest");

Alloy.Globals.loadGuestDetails = function(instance, guest) {
    instance.guest_name.text = guest.get("name");
    instance.guest_email.text = guest.get("email");
    instance.guest_phone.text = guest.get("phone");
    instance.guest_state.text = guest.get("state");
    instance.guest_city.text = guest.get("city");
    Alloy.Globals.current_model = guest;
};

Alloy.createController("index");