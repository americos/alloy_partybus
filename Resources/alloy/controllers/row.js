function Controller() {
    function removeGuest(e) {
        e.cancelBubble = true;
        var id = $model.id;
        var guest = guests.get(id);
        guest.destroy();
    }
    function addGuest(e) {
        e.cancelBubble = true;
        var id = $model.id;
        var guest = guests.get(id);
        guest.set("checked", 1);
        guest.save();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
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
        id: "guest_name",
        text: "undefined" != typeof $model.__transform["name"] ? $model.__transform["name"] : $model.get("name")
    });
    $.__views.row.add($.__views.guest_name);
    $.__views.remove = Ti.UI.createImageView({
        image: "/remove_icon.png",
        right: 0,
        width: "40dp",
        height: "40dp",
        id: "remove"
    });
    $.__views.row.add($.__views.remove);
    removeGuest ? $.__views.remove.addEventListener("click", removeGuest) : __defers["$.__views.remove!click!removeGuest"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var guests = Alloy.Collections.guest;
    __defers["$.__views.add!click!addGuest"] && $.__views.add.addEventListener("click", addGuest);
    __defers["$.__views.remove!click!removeGuest"] && $.__views.remove.addEventListener("click", removeGuest);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;