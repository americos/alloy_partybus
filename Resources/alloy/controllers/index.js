function Controller() {
    function __alloyId7() {
        __alloyId7.opts || {};
        var models = filterPending(__alloyId6);
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
        $.__views.pending_table.setData(rows);
    }
    function __alloyId14() {
        __alloyId14.opts || {};
        var models = filterCheckedIn(__alloyId13);
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
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Pending Guests",
        id: "__alloyId2"
    });
    $.__views.pending_table = Ti.UI.createTableView({
        id: "pending_table"
    });
    $.__views.__alloyId2.add($.__views.pending_table);
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
    $.__views.checkedin_table = Ti.UI.createTableView({
        id: "checkedin_table"
    });
    $.__views.__alloyId9.add($.__views.checkedin_table);
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
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;