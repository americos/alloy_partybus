function Controller() {
    function __alloyId7() {
        __alloyId7.opts || {};
        var models = filterTable(__alloyId6);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId4 = models[i];
            __alloyId4.__transform = {};
            var __alloyId5 = Alloy.createController("row", {
                $model: __alloyId4
            });
            rows.push(__alloyId5.getViewEx({
                recurse: true
            }));
        }
        $.__views.guests_table.setData(rows);
    }
    function __alloyId14() {
        __alloyId14.opts || {};
        var models = filterTable(__alloyId13);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId11 = models[i];
            __alloyId11.__transform = {};
            var __alloyId12 = Alloy.createController("row", {
                $model: __alloyId11
            });
            rows.push(__alloyId12.getViewEx({
                recurse: true
            }));
        }
        $.__views.guests_table.setData(rows);
    }
    function filterTable(collection) {
        return collection.models;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Pending Guests",
        id: "__alloyId2"
    });
    $.__views.guests_table = Ti.UI.createTableView({
        id: "guests_table"
    });
    $.__views.__alloyId2.add($.__views.guests_table);
    var __alloyId6 = Alloy.Collections["guest"] || guest;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Pending",
        icon: "KS_nav_ui.png",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId9 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Checkin Guests",
        id: "__alloyId9"
    });
    $.__views.guests_table = Ti.UI.createTableView({
        id: "guests_table"
    });
    $.__views.__alloyId9.add($.__views.guests_table);
    var __alloyId13 = Alloy.Collections["guest"] || guest;
    __alloyId13.on("fetch destroy change add remove reset", __alloyId14);
    $.__views.__alloyId8 = Ti.UI.createTab({
        window: $.__views.__alloyId9,
        title: "Checked-in",
        icon: "KS_nav_views.png",
        id: "__alloyId8"
    });
    $.__views.index.addTab($.__views.__alloyId8);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
        __alloyId13.off("fetch destroy change add remove reset", __alloyId14);
    };
    _.extend($, $.__views);
    var guests = Alloy.Collections.guest;
    var sample_guests = [ {
        name: "Americo Savinon",
        email: "americos@gmail.com",
        phone: "2022861415"
    } ];
    _.each(sample_guests, function(guest) {
        guests.create({
            name: guest.name,
            email: guest.email,
            phone: guest.phone
        });
    });
    guests.fetch();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;