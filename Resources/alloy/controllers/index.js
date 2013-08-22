function Controller() {
    function __alloyId9() {
        __alloyId9.opts || {};
        var models = filterPending(__alloyId8);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = {};
            var __alloyId7 = Alloy.createController("row_pending", {
                $model: __alloyId6
            });
            rows.push(__alloyId7.getViewEx({
                recurse: true
            }));
        }
        $.__views.pending_table.setData(rows);
    }
    function __alloyId16() {
        __alloyId16.opts || {};
        var models = filterCheckedIn(__alloyId15);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId13 = models[i];
            __alloyId13.__transform = {};
            var __alloyId14 = Alloy.createController("row_checked", {
                $model: __alloyId13
            });
            rows.push(__alloyId14.getViewEx({
                recurse: true
            }));
        }
        $.__views.checkedin_table.setData(rows);
    }
    function filterPending(collection) {
        return collection.where({
            checked: 0
        });
    }
    function filterCheckedIn(collection) {
        return collection.where({
            checked: 1
        });
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
    $.__views.__alloyId4 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Pending Guests",
        id: "__alloyId4"
    });
    $.__views.pending_table = Ti.UI.createTableView({
        id: "pending_table"
    });
    $.__views.__alloyId4.add($.__views.pending_table);
    var __alloyId8 = Alloy.Collections["guest"] || guest;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    $.__views.__alloyId3 = Ti.UI.createTab({
        window: $.__views.__alloyId4,
        title: "Pending",
        icon: "KS_nav_ui.png",
        id: "__alloyId3"
    });
    $.__views.index.addTab($.__views.__alloyId3);
    $.__views.__alloyId11 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Checkin Guests",
        id: "__alloyId11"
    });
    $.__views.checkedin_table = Ti.UI.createTableView({
        id: "checkedin_table"
    });
    $.__views.__alloyId11.add($.__views.checkedin_table);
    var __alloyId15 = Alloy.Collections["guest"] || guest;
    __alloyId15.on("fetch destroy change add remove reset", __alloyId16);
    $.__views.__alloyId10 = Ti.UI.createTab({
        window: $.__views.__alloyId11,
        title: "Checked-in",
        icon: "KS_nav_views.png",
        id: "__alloyId10"
    });
    $.__views.index.addTab($.__views.__alloyId10);
    $.__views.__alloyId18 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Stats",
        id: "__alloyId18"
    });
    $.__views.__alloyId19 = Alloy.createController("stats", {
        id: "__alloyId19",
        __parentSymbol: $.__views.__alloyId18
    });
    $.__views.__alloyId19.setParent($.__views.__alloyId18);
    $.__views.__alloyId17 = Ti.UI.createTab({
        window: $.__views.__alloyId18,
        title: "Stats",
        icon: "KS_nav_ui.png",
        id: "__alloyId17"
    });
    $.__views.index.addTab($.__views.__alloyId17);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
        __alloyId15.off("fetch destroy change add remove reset", __alloyId16);
    };
    _.extend($, $.__views);
    var guests = Alloy.Collections.guest;
    var sample_guests = [ {
        name: "Americo Savinon",
        email: "americos@gmail.com",
        phone: "2022861415",
        checked: 1
    }, {
        name: "Patri Medina",
        email: "patri@gmail.com",
        phone: "3334445555",
        checked: 0
    }, {
        name: "Eli Dominguez",
        email: "eli@gmail.com",
        phone: "2223334444",
        checked: 0
    }, {
        name: "Miguel Ortiz",
        email: "miguel@gmail.com",
        phone: "5556667777",
        checked: 1
    }, {
        name: "Kermit Farmer",
        email: "orci.lacus@loremtristique.co.uk",
        phone: "8062456286",
        checked: 0
    }, {
        name: "Blake Freeman",
        email: "dictum.Phasellus@est.co.uk",
        phone: "9842753387",
        checked: 0
    }, {
        name: "Zeus Dillard",
        email: "tellus.imperdiet@Proin.ca",
        phone: "3029206332",
        checked: 0
    }, {
        name: "Kadeem Harrington",
        email: "hendrerit.neque@imperdiet.co.uk",
        phone: "5048326342",
        checked: 0
    }, {
        name: "Elmo Mcfadden",
        email: "amet.consectetuer.adipiscing@habitantmorbitristique.com",
        phone: "8024466001",
        checked: 0
    }, {
        name: "Jakeem Garza",
        email: "velit.Sed@eleifendCrassed.co.uk",
        phone: "7703155413",
        checked: 0
    } ];
    _.each(sample_guests, function(guest) {
        guests.create({
            name: guest.name,
            email: guest.email,
            phone: guest.phone,
            checked: guest.checked
        });
    });
    guests.fetch();
    Alloy.Globals.total_guests = guests.length;
    Titanium.Network.createHTTPClient({
        onload: function() {
            console.log(" ***** Inside the callback:", this.responseText);
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
        },
        timeout: 5e3
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;