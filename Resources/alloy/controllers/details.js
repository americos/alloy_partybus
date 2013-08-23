function Controller() {
    function closeDetails() {
        $.addWin.close();
    }
    function loadGuestDetails(guest) {
        $.guest_name.text = guest.get("name");
        $.guest_email.text = guest.get("email");
        $.guest_phone.text = guest.get("phone");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "details";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addWin = Ti.UI.createWindow({
        layout: "vertical",
        id: "addWin",
        title: "Guest Details",
        modal: "true"
    });
    $.__views.addWin && $.addTopLevelView($.__views.addWin);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        color: "#00FF44",
        text: "Name",
        id: "__alloyId0"
    });
    $.__views.addWin.add($.__views.__alloyId0);
    $.__views.guest_name = Ti.UI.createLabel({
        color: "#FFFFFF",
        id: "guest_name",
        text: "More data"
    });
    $.__views.addWin.add($.__views.guest_name);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        color: "#00FF44",
        text: "Email",
        id: "__alloyId1"
    });
    $.__views.addWin.add($.__views.__alloyId1);
    $.__views.guest_email = Ti.UI.createLabel({
        color: "#FFFFFF",
        id: "guest_email",
        text: "More data"
    });
    $.__views.addWin.add($.__views.guest_email);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        color: "#00FF44",
        text: "Phone",
        id: "__alloyId2"
    });
    $.__views.addWin.add($.__views.__alloyId2);
    $.__views.guest_phone = Ti.UI.createLabel({
        color: "#FFFFFF",
        id: "guest_phone",
        text: "More data"
    });
    $.__views.addWin.add($.__views.guest_phone);
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "Cancel",
        id: "__alloyId3"
    });
    $.__views.addWin.add($.__views.__alloyId3);
    closeDetails ? $.__views.__alloyId3.addEventListener("click", closeDetails) : __defers["$.__views.__alloyId3!click!closeDetails"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    console.log("-- Inside details.js");
    exports.openDetails = function(guest) {
        $.addWin.open();
        loadGuestDetails(guest);
    };
    __defers["$.__views.__alloyId3!click!closeDetails"] && $.__views.__alloyId3.addEventListener("click", closeDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;