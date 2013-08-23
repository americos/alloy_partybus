function Controller() {
    function __alloyId11() {
        __alloyId11.opts || {};
        var models = filterPending(__alloyId10);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId8 = models[i];
            __alloyId8.__transform = {};
            var __alloyId9 = Alloy.createController("row_pending", {
                $model: __alloyId8
            });
            rows.push(__alloyId9.getViewEx({
                recurse: true
            }));
        }
        $.__views.pending_table.setData(rows);
    }
    function __alloyId18() {
        __alloyId18.opts || {};
        var models = filterCheckedIn(__alloyId17);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId15 = models[i];
            __alloyId15.__transform = {};
            var __alloyId16 = Alloy.createController("row_checked", {
                $model: __alloyId15
            });
            rows.push(__alloyId16.getViewEx({
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
    $.__views.__alloyId6 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Pending Guests",
        id: "__alloyId6"
    });
    $.__views.pending_table = Ti.UI.createTableView({
        id: "pending_table"
    });
    $.__views.__alloyId6.add($.__views.pending_table);
    var __alloyId10 = Alloy.Collections["guest"] || guest;
    __alloyId10.on("fetch destroy change add remove reset", __alloyId11);
    $.__views.__alloyId5 = Ti.UI.createTab({
        window: $.__views.__alloyId6,
        title: "Pending",
        icon: "KS_nav_ui.png",
        id: "__alloyId5"
    });
    $.__views.index.addTab($.__views.__alloyId5);
    $.__views.__alloyId13 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Checkin Guests",
        id: "__alloyId13"
    });
    $.__views.checkedin_table = Ti.UI.createTableView({
        id: "checkedin_table"
    });
    $.__views.__alloyId13.add($.__views.checkedin_table);
    var __alloyId17 = Alloy.Collections["guest"] || guest;
    __alloyId17.on("fetch destroy change add remove reset", __alloyId18);
    $.__views.__alloyId12 = Ti.UI.createTab({
        window: $.__views.__alloyId13,
        title: "Checked-in",
        icon: "KS_nav_views.png",
        id: "__alloyId12"
    });
    $.__views.index.addTab($.__views.__alloyId12);
    $.__views.__alloyId20 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Stats",
        id: "__alloyId20"
    });
    $.__views.__alloyId21 = Alloy.createController("stats", {
        id: "__alloyId21",
        __parentSymbol: $.__views.__alloyId20
    });
    $.__views.__alloyId21.setParent($.__views.__alloyId20);
    $.__views.__alloyId19 = Ti.UI.createTab({
        window: $.__views.__alloyId20,
        title: "Stats",
        icon: "KS_nav_ui.png",
        id: "__alloyId19"
    });
    $.__views.index.addTab($.__views.__alloyId19);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId10.off("fetch destroy change add remove reset", __alloyId11);
        __alloyId17.off("fetch destroy change add remove reset", __alloyId18);
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
            Titanium.API.debug(e.error);
        },
        timeout: 5e3
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;