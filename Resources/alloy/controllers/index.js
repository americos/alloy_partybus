function Controller() {
    function __alloyId13() {
        __alloyId13.opts || {};
        var models = filterPending(__alloyId12);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId10 = models[i];
            __alloyId10.__transform = {};
            var __alloyId11 = Alloy.createController("row_pending", {
                $model: __alloyId10
            });
            rows.push(__alloyId11.getViewEx({
                recurse: true
            }));
        }
        $.__views.pending_table.setData(rows);
    }
    function __alloyId20() {
        __alloyId20.opts || {};
        var models = filterCheckedIn(__alloyId19);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId17 = models[i];
            __alloyId17.__transform = {};
            var __alloyId18 = Alloy.createController("row_checked", {
                $model: __alloyId17
            });
            rows.push(__alloyId18.getViewEx({
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
    $.__views.__alloyId8 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Pending Guests",
        id: "__alloyId8"
    });
    $.__views.pending_table = Ti.UI.createTableView({
        id: "pending_table"
    });
    $.__views.__alloyId8.add($.__views.pending_table);
    var __alloyId12 = Alloy.Collections["guest"] || guest;
    __alloyId12.on("fetch destroy change add remove reset", __alloyId13);
    $.__views.__alloyId7 = Ti.UI.createTab({
        window: $.__views.__alloyId8,
        title: "Pending",
        icon: "KS_nav_ui.png",
        id: "__alloyId7"
    });
    $.__views.index.addTab($.__views.__alloyId7);
    $.__views.__alloyId15 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Checkin Guests",
        id: "__alloyId15"
    });
    $.__views.checkedin_table = Ti.UI.createTableView({
        id: "checkedin_table"
    });
    $.__views.__alloyId15.add($.__views.checkedin_table);
    var __alloyId19 = Alloy.Collections["guest"] || guest;
    __alloyId19.on("fetch destroy change add remove reset", __alloyId20);
    $.__views.__alloyId14 = Ti.UI.createTab({
        window: $.__views.__alloyId15,
        title: "Checked-in",
        icon: "KS_nav_views.png",
        id: "__alloyId14"
    });
    $.__views.index.addTab($.__views.__alloyId14);
    $.__views.__alloyId22 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Stats",
        id: "__alloyId22"
    });
    $.__views.__alloyId23 = Alloy.createController("stats", {
        id: "__alloyId23",
        __parentSymbol: $.__views.__alloyId22
    });
    $.__views.__alloyId23.setParent($.__views.__alloyId22);
    $.__views.__alloyId21 = Ti.UI.createTab({
        window: $.__views.__alloyId22,
        title: "Stats",
        icon: "KS_nav_ui.png",
        id: "__alloyId21"
    });
    $.__views.index.addTab($.__views.__alloyId21);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId12.off("fetch destroy change add remove reset", __alloyId13);
        __alloyId19.off("fetch destroy change add remove reset", __alloyId20);
    };
    _.extend($, $.__views);
    var guests = Alloy.Collections.guest;
    var sample_guests = [ {
        name: "Americo Savinon",
        email: "americos@gmail.com",
        phone: "2022861415",
        checked: 1,
        state: "VA",
        city: "Arlington"
    }, {
        name: "Patri Medina",
        email: "patri@gmail.com",
        phone: "3334445555",
        checked: 0,
        state: "MD",
        city: "Bethesda"
    }, {
        name: "Eli Dominguez",
        email: "eli@gmail.com",
        phone: "2223334444",
        checked: 0,
        state: "DC",
        city: "Georgetown"
    }, {
        name: "Miguel Ortiz",
        email: "miguel@gmail.com",
        phone: "5556667777",
        checked: 1,
        state: "DC",
        city: "du_pont"
    }, {
        name: "Kermit Farmer",
        email: "orci.lacus@loremtristique.co.uk",
        phone: "8062456286",
        checked: 0,
        state: "MD",
        city: "chevy_chase"
    }, {
        name: "Blake Freeman",
        email: "dictum.Phasellus@est.co.uk",
        phone: "9842753387",
        checked: 0,
        state: "VA",
        city: "vienna"
    }, {
        name: "Zeus Dillard",
        email: "tellus.imperdiet@Proin.ca",
        phone: "3029206332",
        checked: 0,
        state: "VA",
        city: "falls_church"
    }, {
        name: "Kadeem Harrington",
        email: "hendrerit.neque@imperdiet.co.uk",
        phone: "5048326342",
        checked: 0,
        state: "VA",
        city: "arlington"
    }, {
        name: "Elmo Mcfadden",
        email: "amet.consectetuer.adipiscing@habitantmorbitristique.com",
        phone: "8024466001",
        checked: 0,
        state: "MD",
        city: "silver_spring"
    }, {
        name: "Jakeem Garza",
        email: "velit.Sed@eleifendCrassed.co.uk",
        phone: "7703155413",
        checked: 0,
        state: "DC",
        city: "Georgetown"
    } ];
    _.each(sample_guests, function(guest) {
        guests.create({
            name: guest.name,
            email: guest.email,
            phone: guest.phone,
            checked: guest.checked,
            state: guest.state,
            city: guest.city
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