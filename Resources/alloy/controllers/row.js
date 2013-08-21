function Controller() {
    function removeGuest(e) {
        e.cancelBubble = true;
        var id = $model.id;
        var guest = guests.get(id);
        guest.destroy();
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
    __defers["$.__views.remove!click!removeGuest"] && $.__views.remove.addEventListener("click", removeGuest);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;