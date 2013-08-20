exports.definition = {
    config: {
        columns: {
            name: "TEXT",
            email: "TEXT",
            phone: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "guest"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("guest", exports.definition, []);

collection = Alloy.C("guest", exports.definition, model);

exports.Model = model;

exports.Collection = collection;