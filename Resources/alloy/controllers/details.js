function Controller() {
    function closeDetails() {
        $.addWin.close();
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
        text: "Here will be the details",
        id: "__alloyId0"
    });
    $.__views.addWin.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Cancel",
        id: "__alloyId1"
    });
    $.__views.addWin.add($.__views.__alloyId1);
    closeDetails ? $.__views.__alloyId1.addEventListener("click", closeDetails) : __defers["$.__views.__alloyId1!click!closeDetails"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1!click!closeDetails"] && $.__views.__alloyId1.addEventListener("click", closeDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;