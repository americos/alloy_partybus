function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "stats";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.stats = Ti.UI.createView({
        id: "stats"
    });
    $.__views.stats && $.addTopLevelView($.__views.stats);
    $.__views.total_label = Ti.UI.createLabel({
        top: "10dp",
        id: "total_label",
        text: "Total number of Guests:"
    });
    $.__views.stats.add($.__views.total_label);
    $.__views.total_label_number = Ti.UI.createLabel({
        top: "40dp",
        font: {
            fontSize: 50,
            fontFamily: "Helvetica Neue"
        },
        id: "total_label_number",
        text: "1"
    });
    $.__views.stats.add($.__views.total_label_number);
    $.__views.pending_label = Ti.UI.createLabel({
        color: "#FF0000",
        top: "110dp",
        id: "pending_label",
        text: "Pending Guests:"
    });
    $.__views.stats.add($.__views.pending_label);
    $.__views.checked_label = Ti.UI.createLabel({
        color: "#00FF00",
        top: "190dp",
        id: "checked_label",
        text: "Checked In Guests:"
    });
    $.__views.stats.add($.__views.checked_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    console.log("===" + Alloy.Globals.total_guests);
    $.total_label_number.text = "(total)";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;