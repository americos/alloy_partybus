function Controller() {
    function closeDetails() {
        $.addWin.close();
    }
    function loadGuestDetails(guest) {
        $.guest_name.text = guest.get("name");
        $.guest_email.text = guest.get("email");
        $.guest_phone.text = guest.get("phone");
        $.guest_state.text = guest.get("state");
        $.guest_city.text = guest.get("city");
        Alloy.Globals.current_model = guest;
    }
    function loadWeather() {
        Alloy.Globals.current_model;
        getDataFromWeatherAPI();
    }
    function getDataFromWeatherAPI() {
        var key = "d46b5a966acf0239";
        var state = "VA";
        var city_camel_case = "falls_church";
        var url = "http://api.wunderground.com/api/" + key + "/geolookup/conditions/q/" + state + "/" + city_camel_case + ".json";
        console.log(" == Calling Weather WunderGround API with the following URL: " + url);
        var client = Titanium.Network.createHTTPClient({
            onload: function() {
                var response = JSON.parse(this.responseText);
                $.weather_temperature.text = "Temperature: " + response["current_observation"]["temp_f"];
                $.weather_time.text = "" + response["current_observation"]["observation_time"];
                $.weather_humidity.text = "Humidity: " + response["current_observation"]["relative_humidity"];
            },
            onerror: function(e) {
                Titanium.API.debug(e.error);
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
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
        color: "#00FF44",
        text: "Name",
        id: "__alloyId0"
    });
    $.__views.addWin.add($.__views.__alloyId0);
    $.__views.guest_name = Ti.UI.createLabel({
        color: "#FFFFFF",
        id: "guest_name",
        text: "More data"
    });
    $.__views.addWin.add($.__views.guest_name);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        color: "#00FF44",
        text: "Email",
        id: "__alloyId1"
    });
    $.__views.addWin.add($.__views.__alloyId1);
    $.__views.guest_email = Ti.UI.createLabel({
        color: "#FFFFFF",
        id: "guest_email",
        text: "More data"
    });
    $.__views.addWin.add($.__views.guest_email);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        color: "#00FF44",
        text: "Phone",
        id: "__alloyId2"
    });
    $.__views.addWin.add($.__views.__alloyId2);
    $.__views.guest_phone = Ti.UI.createLabel({
        color: "#FFFFFF",
        id: "guest_phone",
        text: "More data"
    });
    $.__views.addWin.add($.__views.guest_phone);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#00FF44",
        text: "State",
        id: "__alloyId3"
    });
    $.__views.addWin.add($.__views.__alloyId3);
    $.__views.guest_state = Ti.UI.createLabel({
        color: "#FFFFFF",
        id: "guest_state",
        text: "More data"
    });
    $.__views.addWin.add($.__views.guest_state);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "#00FF44",
        text: "City",
        id: "__alloyId4"
    });
    $.__views.addWin.add($.__views.__alloyId4);
    $.__views.guest_city = Ti.UI.createLabel({
        color: "#FFFFFF",
        id: "guest_city",
        text: "More data"
    });
    $.__views.addWin.add($.__views.guest_city);
    $.__views.__alloyId5 = Ti.UI.createButton({
        title: "Let's get the Weather",
        id: "__alloyId5"
    });
    $.__views.addWin.add($.__views.__alloyId5);
    loadWeather ? $.__views.__alloyId5.addEventListener("click", loadWeather) : __defers["$.__views.__alloyId5!click!loadWeather"] = true;
    $.__views.weather_temperature = Ti.UI.createLabel({
        color: "#BABABA",
        id: "weather_temperature",
        text: ""
    });
    $.__views.addWin.add($.__views.weather_temperature);
    $.__views.weather_humidity = Ti.UI.createLabel({
        color: "#BABABA",
        id: "weather_humidity",
        text: ""
    });
    $.__views.addWin.add($.__views.weather_humidity);
    $.__views.weather_time = Ti.UI.createLabel({
        color: "#BABABA",
        id: "weather_time",
        text: ""
    });
    $.__views.addWin.add($.__views.weather_time);
    $.__views.__alloyId6 = Ti.UI.createButton({
        title: "Cancel",
        id: "__alloyId6"
    });
    $.__views.addWin.add($.__views.__alloyId6);
    closeDetails ? $.__views.__alloyId6.addEventListener("click", closeDetails) : __defers["$.__views.__alloyId6!click!closeDetails"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openDetails = function(guest) {
        $.addWin.open();
        loadGuestDetails(guest);
    };
    __defers["$.__views.__alloyId5!click!loadWeather"] && $.__views.__alloyId5.addEventListener("click", loadWeather);
    __defers["$.__views.__alloyId6!click!closeDetails"] && $.__views.__alloyId6.addEventListener("click", closeDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;