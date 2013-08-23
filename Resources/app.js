var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.guest = Alloy.createCollection("guest");

Alloy.Globals.loadGuestDetails = function(guest) {
    console.log("============ Inside LoadDEtails");
    $.guest_name.text = guest.get("name");
};

Alloy.createController("index");