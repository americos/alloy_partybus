function Controller() {
    function addGuest(e) {
        e.cancelBubble = true;
        var id = $model.id;
        var guest = guests.get(id);
        guest.set("checked", 1);
        guest.save();
    }
    function showDetailsModal(e) {
        e.cancelBubble = true;
        var id = $model.id;
        var guest = guests.get(id);
        Alloy.createController("details").openDetails(guest);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row_pending";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: "40dp",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.add = Ti.UI.createImageView({
        image: "/add_icon.png",
        left: 0,
        width: "40dp",
        height: "40dp",
        id: "add"
    });
    $.__views.row.add($.__views.add);
    addGuest ? $.__views.add.addEventListener("click", addGuest) : __defers["$.__views.add!click!addGuest"] = true;
    $.__views.guest_name = Ti.UI.createLabel({
        left: 45,
        id: "guest_name",
        text: "undefined" != typeof $model.__transform["name"] ? $model.__transform["name"] : $model.get("name")
    });
    $.__views.row.add($.__views.guest_name);
    $.__views.__alloyId26 = Ti.UI.createImageView({
        image: "/info.png",
        right: 0,
        width: "40dp",
        height: "40dp",
        id: "__alloyId26"
    });
    $.__views.row.add($.__views.__alloyId26);
    showDetailsModal ? $.__views.__alloyId26.addEventListener("click", showDetailsModal) : __defers["$.__views.__alloyId26!click!showDetailsModal"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var guests = Alloy.Collections.guest;
    __defers["$.__views.add!click!addGuest"] && $.__views.add.addEventListener("click", addGuest);
    __defers["$.__views.__alloyId26!click!showDetailsModal"] && $.__views.__alloyId26.addEventListener("click", showDetailsModal);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;